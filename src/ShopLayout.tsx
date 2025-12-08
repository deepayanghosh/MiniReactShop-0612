'use client';

import { useState } from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import ShoppingCartSidebar from './components/ShoppingCartSidebar';
import ProductsGrid from './components/ProductsGrid';
import ProductsGridTopBar from './components/ProductsGridTopBar';
import ProductFilterOptions from './components/ProductFilterOptions';

export default function ShopLayout() {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    return (
        <>
        {/* Main 3-Column Layout */}
        <div className="grid bg-neutral-50 grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">
            {/* Left Sidebar */}
            <div className="bg-white p-6">
                <ProductFilterOptions />
            </div>
            {/* Middle Column for Products */}
            <div className="p-4">
                {/* Top bar for sorting options - sticky at top */}
                <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
                    <div className="p-6">
                        <ProductsGridTopBar />
                    </div>
                </div>
                {/* Product Grid */}
                <div className="flex-1 p-6">
                    <ProductsGrid />
                </div>
            </div>
            {/* Right Sidebar for Shopping Cart & Other Content */}
            <div className={`shadow-sm transform transition-transform duration-300 z-50 ${
                    isCartOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="">
                        <ShoppingCartSidebar cartOpenSetter = {setIsCartOpen} />
                    </div>
                
            </div>

            {/* Cart Toggle Button (Visible when cart is closed) */}
            {!isCartOpen && (
            <button
                onClick={() => setIsCartOpen(true)}
                className="fixed right-6 bottom-8 z-40 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110"
            >
                <ShoppingCartIcon className="w-7 h-7" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                1
                </span>
            </button>
            )}
        </div>
        </>
    );
}