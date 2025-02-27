import { Paystack } from "paystack-sdk"
import dotenv from "dotenv"

dotenv.config();
const payStackKey = process.env.PAY_STACK_KEY;
  if (!payStackKey) {
      throw new Error("Paystack Key not found");
}

export const paystack = new Paystack(payStackKey);