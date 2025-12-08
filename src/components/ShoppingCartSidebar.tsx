'use client';   // to be rendered on the client side (in the browser) only, not on the server.

import React, { useState } from 'react';
import { X, Truck, Tag, Plus, Minus, ShoppingCartIcon } from 'lucide-react';
import SingleCartItem from './SingleCartItem';

interface cartOpenStatus {
    cartOpenSetter: React.Dispatch< React.SetStateAction<boolean> >
}

export default function ShoppingCartSidebar( {cartOpenSetter} : cartOpenStatus ) {

    const [ coupon, setCoupon ] = useState('EXTRA10'); // Applied coupon

    return (
        /* fixed inset-0 bg-black bg-opacity-50 z-50 */
        <div className="">
            {/* absolute right-0 top-0  */}
            <div className="bg-white flex flex-col">
                {/* Header */}
                <div className="sticky top-0 bg-white z-20 flex items-center justify-between p-6 border-gray-200 border-b">
                    <h2 className="text-xl font-semibold flex items-center gap-3">
                        <ShoppingCartIcon className="w-6 h-6" />
                        Total ₹451
                    </h2>
                    <button 
                    className="p-2 hover:bg-gray-100 rounded-full transition"
                    onClick={() => cartOpenSetter(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 px-6 py-4">
                    {/* Total Savings */}
                    <div className="bg-teal-50 text-teal-700 px-4 py-3 rounded-lg text-sm font-medium mb-4">
                        Your total savings <span className="float-right">₹40</span>
                    </div>

                    {/* Delivery Info */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-full">
                        <Truck className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                        <p className="font-medium">Delivery in 2 days</p>
                        <p className="text-sm text-gray-500">Shipment of 1 item</p>
                        </div>
                    </div>

                    {/* Cart Item */}
                    <SingleCartItem />

                    {/* Coupon Section */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        {coupon ? (
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2 text-green-600 font-medium">
                            <Tag className="w-5 h-5" />
                            <span>{coupon} applied</span>
                            </div>
                            <button
                            onClick={() => setCoupon('')}
                            className="text-gray-500 hover:text-red-600"
                            >
                            <X className="w-5 h-5" />
                            </button>
                        </div>
                        ) : (
                        <div className="flex gap-2">
                            <input
                            type="text"
                            placeholder="Enter coupon code"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button className="px-5 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
                            Apply
                            </button>
                        </div>
                        )}
                    </div>

                    {/* Bill Details */}
                    <div className="border-t pt-4">
                        <h3 className="font-semibold mb-3">Bill Details</h3>
                        <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Items total</span>
                            <span>₹469 <span className="text-gray-400 line-through">₹449</span></span>
                        </div>
                        <div className="flex justify-between text-green-600">
                            <span>Saved ₹40</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Delivery charge</span>
                            <span className="text-green-600">FREE</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Handling charge</span>
                            <span>₹2</span>
                        </div>
                        </div>
                        <div className="border-t mt-4 pt-4">
                        <div className="flex justify-between text-lg font-bold">
                            <span>Grand total</span>
                            <span>₹451</span>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Checkout Footer */}
                <div className="border-t p-6 bg-white">
                <div className="flex items-center justify-center mb-4">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition flex items-center gap-2">
                        Login to Proceed
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>                        
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}