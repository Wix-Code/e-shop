import { createContext, useEffect, useState } from "react";
import { dummyData } from "../dummy/data";

export const createStore = createContext()

const StoreProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [wishlist, setwishlist] = useState([])
  const [compare, setCompare] = useState([])

  const [data, setData] = useState(dummyData)
  const [viewProduct, setViewProduct] = useState(false)

 
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setCart(JSON.parse(storedWishlist));
    }
  }, []);
  useEffect(() => {
    const storedCompare = localStorage.getItem("compare");
    if (storedCompare) {
      setCart(JSON.parse(storedCompare));
    }
  }, []);

  const addToCart = (data) => {
    console.log(data)
    const exist = cart.find((x) =>  x.id === data.id)
    console.log(exist)
    if (exist) {
      alert("Item already in cart")
    } else {
      const updateCart = [...cart, { ...data, qty: 1 }];
      setCart(updateCart);
      alert("Item added in cart")
      localStorage.setItem("cart", JSON.stringify(updateCart))
    }
  }

  const addCompare = (data) => {
    console.log(data)
    const exist = cart.find((x) =>  x.id === data.id)
    console.log(exist)
    if (exist) {
     alert("Item already in cart")
    } else {
      const updateCompare = [...compare, { ...data }];
      setCompare(updateCompare);
      alert("Item added in cart")
      localStorage.setItem("compare", JSON.stringify(updateCompare))
    }
  }

  const addWishlist = (data) => { 
    const exist = wishlist.find((x) =>  x.id === data.id)
    console.log(exist, "Compare")
    if (exist) {
     alert("Item already in cart")
    } else {
      const updateWishlist = [...wishlist, { ...data}]
      setwishlist(updateWishlist);
      alert("Item added in compare")
      localStorage.setItem("wishlist", JSON.stringify(updateWishlist))
    }
  }

  const cartQty = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)

  /*useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Parse and set cart state
    }
  }, []);*/

  console.log(cart)

  return (
    <createStore.Provider value={{ data, setViewProduct, viewProduct, cartQty, addCompare, compare, addToCart, cart, wishlist, addWishlist}}>
      {children}
    </createStore.Provider>
  )
}

export default StoreProvider