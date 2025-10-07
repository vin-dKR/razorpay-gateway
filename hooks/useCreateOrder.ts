import { createOrder } from "@/actions/createOrder"
import { useState } from "react"

export const useCreateOrder = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<RazorpayOrderSuccess | RazorpayOrderError | null>(null)

    const create = async (amount: number) => {
        setIsLoading(true)

        try {
            const response = await createOrder(amount)
            if (response.success) {
                setData(response.data)
            } else {
                setData(response.data)
            }
            return response
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        data,
        create,
        isLoading
    }
}
