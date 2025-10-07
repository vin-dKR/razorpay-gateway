export const mockProduct: Products = {
    id: '1',
    title: 'Wireless Bluetooth Headphones, Noise Cancelling Over Ear Headphones with Microphone',
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 12543,
    description: 'Experience premium sound quality with our wireless Bluetooth headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for all-day use. Perfect for travel, work, and entertainment.',
    features: [
        'Active Noise Cancellation technology',
        '30-hour battery life with quick charge',
        'Bluetooth 5.0 with stable connection',
        'Built-in microphone for crystal clear calls',
        'Foldable design for easy storage',
        'Comfortable memory foam ear cushions',
        'Multi-device pairing capability',
        'Voice assistant compatible'
    ],
    images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1521334884684-d80222895322?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop'
    ],
    inStock: true,
    brand: 'AudioTech Pro',
    category: 'Electronics'
};

export const mockReviews: Review[] = [
    {
        id: '1',
        userName: 'John D.',
        rating: 5,
        date: 'January 15, 2024',
        title: 'Excellent sound quality!',
        content: 'These headphones exceeded my expectations. The noise cancellation is fantastic and battery life is as advertised. Very comfortable for long listening sessions.',
        verified: true
    },
    {
        id: '2',
        userName: 'Sarah M.',
        rating: 4,
        date: 'January 10, 2024',
        title: 'Great value for money',
        content: 'Comfortable to wear for long periods. Sound quality is impressive for the price point. The build quality feels premium.',
        verified: true
    },
    {
        id: '3',
        userName: 'Mike R.',
        rating: 5,
        date: 'December 28, 2023',
        title: 'Best headphones I have owned',
        content: 'The noise cancellation works perfectly in noisy environments. Battery life is incredible - I only charge them once a week.',
        verified: true
    }
];
