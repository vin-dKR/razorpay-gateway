{ }

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
}
