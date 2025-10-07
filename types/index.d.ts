export { }

declare global {
    interface Product {
        id: string;
        title: string;
        price: number;
        originalPrice?: number;
        rating: number;
        reviewCount: number;
        description: string;
        features: string[];
        images: string[];
        inStock: boolean;
        brand: string;
        category: string;
    }

    interface Review {
        id: string;
        userName: string;
        rating: number;
        date: string;
        title: string;
        content: string;
        verified: boolean;
    }

    interface CartItem {
        product: Product;
        quantity: number;
    }

    interface RazorpayOrderSuccess {
        id: string;
        entity: "order";
        amount: number;
        amount_paid: number;
        amount_due: number;
        currency: string;
        receipt: string;
        offer_id: string | null;
        status: "created" | "paid" | "attempted";
        attempts: number;
        notes: Record<string, string>;
        created_at: number;
    }

    interface RazorpayOrderError {
        error: {
            code: string;
            description: string;
            source: string;
            step: string;
            reason: string;
            metadata: Record<string, any>;
            field: string;
        };
    }
}
