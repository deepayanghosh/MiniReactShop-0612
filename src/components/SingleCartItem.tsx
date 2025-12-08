import { Minus, Plus, X } from "lucide-react";

export default function SingleCartItem() {
    return(
        <div className="bg-white border border-gray-300 rounded-md p-4 mb-4 relative">
            <button className="absolute top-3 right-3 p-1.5 hover:bg-gray-100 rounded-full transition">
            <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="flex gap-4">
            <img
                src="/react-display-1.webp"
                width={80}
                height={80}
                alt="White T-Shirt"
                className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
                <h4 className="font-medium text-gray-900 line-clamp-2">
                White T-Shirt...
                </h4>
                <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-bold">₹449</span>
                <span className="text-sm text-gray-400 line-through">₹409</span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-3">
                <button
                    onClick={() => null }
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                    <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-medium">1</span>
                <button
                    onClick={() => null }
                    className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700"
                >
                    <Plus className="w-4 h-4" />
                </button>
                </div>
            </div>
            </div>
        </div>
    )
}