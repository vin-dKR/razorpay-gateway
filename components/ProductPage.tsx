"use client"

import React, { useState } from 'react';
import { mockProduct, mockReviews } from "@/constants/mockData"

const ProductPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<'description' | 'features' | 'reviews'>('description');

    const handleAddToCart = () => {
        alert(`Added ${quantity} item(s) to cart!`);
    };

    const handleBuyNow = () => {
        alert('Proceeding to checkout!');
    };

    const discount = mockProduct.originalPrice
        ? Math.round(((mockProduct.originalPrice - mockProduct.price) / mockProduct.originalPrice) * 100)
        : 0;

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`text-lg ${index < fullStars
                            ? 'text-yellow-400'
                            : index === fullStars && hasHalfStar
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                    >
                        {index < fullStars ? '★' : index === fullStars && hasHalfStar ? '★' : '☆'}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <nav className="flex space-x-2 text-sm text-gray-500">
                        <span>Electronics</span>
                        <span>&gt;</span>
                        <span>Headphones</span>
                        <span>&gt;</span>
                        <span className="text-gray-700">Wireless Headphones</span>
                    </nav>
                </div>
            </div>

            {/* Main Product Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Images */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="mb-4">
                                <img
                                    src={mockProduct.images[selectedImage]}
                                    alt={mockProduct.title}
                                    className="w-full h-96 object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex space-x-2 overflow-x-auto">
                                {mockProduct.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${mockProduct.title} view ${index + 1}`}
                                        className={`w-20 h-20 object-cover rounded border-2 cursor-pointer transition-all ${selectedImage === index
                                            ? 'border-blue-500 ring-2 ring-blue-200'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        onClick={() => setSelectedImage(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                                {mockProduct.title}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center space-x-2 mb-4">
                                {renderStars(mockProduct.rating)}
                                <span className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                    {mockProduct.reviewCount.toLocaleString()} ratings
                                </span>
                            </div>

                            {/* Price Section */}
                            <div className="mb-6">
                                <div className="flex items-baseline space-x-2 mb-1">
                                    {mockProduct.originalPrice && (
                                        <span className="text-lg text-gray-500 line-through">
                                            ${mockProduct.originalPrice.toFixed(2)}
                                        </span>
                                    )}
                                    <span className="text-3xl font-bold text-gray-900">
                                        ${mockProduct.price.toFixed(2)}
                                    </span>
                                    {discount > 0 && (
                                        <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                                            Save {discount}%
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600">
                                    $26.66/month for 3 months with special financing
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                                    {mockProduct.features.slice(0, 4).map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Delivery Info */}
                            <div className="mb-6 space-y-2">
                                <div className="flex items-center">
                                    {mockProduct.inStock ? (
                                        <span className="text-green-600 font-semibold">In Stock</span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">Out of Stock</span>
                                    )}
                                </div>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p>FREE delivery <strong>Tomorrow</strong> by 10 PM</p>
                                    <p>Or fastest delivery <strong>Today</strong> by 8 PM</p>
                                    <p className="flex items-center">
                                        <span className="text-green-600 mr-1">✓</span>
                                        FREE Returns
                                    </p>
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quantity:
                                </label>
                                <select
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 mb-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full transition-colors duration-200"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={handleBuyNow}
                                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
                                >
                                    Buy Now
                                </button>
                            </div>

                            {/* Security Info */}
                            <div className="text-center">
                                <p className="text-sm text-gray-500 flex items-center justify-center">
                                    <span className="mr-1">🔒</span>
                                    Secure transaction
                                </p>
                            </div>
                        </div>

                        {/* Additional Info Card */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Product information</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex">
                                    <span className="w-32 text-gray-500">Brand</span>
                                    <span className="text-gray-900">{mockProduct.brand}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 text-gray-500">Category</span>
                                    <span className="text-gray-900">{mockProduct.category}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 text-gray-500">Warranty</span>
                                    <span className="text-gray-900">1 year limited warranty</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs */}
                <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Tab Headers */}
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6">
                            {[
                                { id: 'description', label: 'Description' },
                                { id: 'features', label: 'Features' },
                                { id: 'reviews', label: 'Reviews' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'description' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                                <p className="text-gray-600 leading-relaxed">{mockProduct.description}</p>
                            </div>
                        )}

                        {activeTab === 'features' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Product Features</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {mockProduct.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-500 mr-2">✓</span>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-6">Customer Reviews</h3>
                                <div className="space-y-6">
                                    {mockReviews.map((review) => (
                                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                                            <div className="flex items-center space-x-2 mb-2">
                                                {renderStars(review.rating)}
                                                <span className="font-semibold text-gray-900">{review.title}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                                                <span>By {review.userName}</span>
                                                <span>•</span>
                                                <span>{review.date}</span>
                                                {review.verified && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="text-green-600 font-medium">Verified Purchase</span>
                                                    </>
                                                )}
                                            </div>
                                            <p className="text-gray-600">{review.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
