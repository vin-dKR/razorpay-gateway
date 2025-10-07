"use server"

import Razorpay from "razorpay";

interface CreateOrderType {
    success: boolean,
    data: RazorpayOrderSuccess | RazorpayOrderError
}
export const createOrder = async (amount: number, receipt = "receipt#1"): Promise<CreateOrderType> => {
    console.log("key is", process.env.RAZORPAY_KEY_ID, "the sercret is", process.env.RAZORPAY_SECRET)
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID!,
            key_secret: process.env.RAZORPAY_SECRET!,
        });

        const options = {
            amount: amount * 100, // Convert INR to paise
            currency: "INR",
            receipt,
            notes: { key1: "value3", key2: "value2" },
        };

        const order = (await razorpay.orders.create(options)) as RazorpayOrderSuccess

        return {
            success: true,
            data: order
        }
    } catch (err) {
        const error = err as RazorpayOrderError
        console.error("Razorpay Order Error:", error);

        return {
            success: false,
            data: error
        };
    }
}
