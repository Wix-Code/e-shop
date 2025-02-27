import { paystack } from "../lib/paystackApi.js";
import Order from "../models/order.model.js";
import { uptime } from "process"
import userModel from "../models/user.model.js";

const frontend_url = "http://localhost:5173/"
export const order = async (req, res) => {
  const userId = req.user;
  const { fname, lname, email, phoneNo, state, city, status, products, amount, street} = req.body
  try {

    if (!userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ success: false, message: "Items must be an array and cannot be empty" });
    }

    const itemsTotal = products.reduce((sum, item) => sum + item.price * item.qty, 0);
    const totalAmount = itemsTotal + 1000;

    const newOrder = new Order(
      {
        fname,
        lname,
        phoneNo,
        state,
        city,
        email,
        status,
        products,
        amount: totalAmount,
        street,
        userId,
      }
    )
    await newOrder.save();

    const response = await paystack.transaction.initialize({
      email: email, // User's phone number
      amount: totalAmount * 100, // Convert Naira to Kobo
      currency: "NGN",
      callback_url: `${frontend_url}/verify?orderId=${order._id}`, // Redirect after payment
    });

    res.status(201).json({ success: true, message: "Order created successfully", totalAmount: totalAmount, session: response, newOrder });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to create order" });
  }
}

export const verifyPayment = async (req, res) => {
  try {
    const { reference, orderId } = req.body;
    if (!reference || !orderId) return res.status(400).json({ success: false, message: "Payment reference and Order ID are required" });

    const response = await paystack.transaction.verify(reference);
    if (!response?.data || response.data.status !== "success") {
      return res.status(400).json({ success: false, message: "Payment verification failed", details: response?.data });
    }

    const updateOrder = await Order.findByIdAndUpdate(orderId, {
      paid: true,
      status: "paid",
      paymentReference: reference,
      paidAt: new Date(),
      paymentAmount: response.data.amount / 100, // Convert kobo to naira
    }, { new: true });

    if (!updateOrder) return res.status(404).json({ success: false, message: "Booking not found" });

    await userModel.findByIdAndUpdate(updateOrder.userId, { cart: [] }); // Clear cart

    res.status(200).json({ success: true, message: "Payment verified", order: updateOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to verify payment" });
  }
}

export const getUserOrders = async (req, res) => {
  const userId = req.user;
  try {
    const orders = await Order.find({userId})
    res.status(200).json({success:true, message: "User orders fetched", data:orders})
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false, message:"User orders not fetched"})
  }
}