export const payStackKey = async () => {
  try {
    const payStack = process.env.PAY_STACK_KEY;
    if (!payStack) {
      throw new Error("Paystack Key not found");
    }
  } catch (error) {
    console.log(error)
  }
}