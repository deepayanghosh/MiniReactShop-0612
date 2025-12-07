import { Heart, ShoppingCart } from "lucide-react";
import { ProductRating } from "./ProductRating";
import type { Product } from "./ProductsGrid";

export default function SingleProductCard( {singleProduct}: {singleProduct: Product} ) {
    return (
        <div className="h-[360px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
                <img
                src="/react-display-1.webp"
                alt="SilkSculpt Serum"
                className=""
                />
                <DiscountBadge discount="50% off" />
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10">
                    <Heart className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="p-5 space-y-3">
                <div className="flex justify-between">
                    <p className="text-sm text-gray-500">{singleProduct.category}</p>
                    <ProductRating rating={4.9} reviews={128} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{singleProduct.name}</h3>
                <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-gray-900">$35.00</span>
                <span className="text-md text-gray-400 line-through">$70.00</span>
                <button className="ml-auto flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors">
                    <ShoppingCart className="w-5 h-5" /> Add
                </button>
                </div>
            </div>
        </div>
    );
}

function DiscountBadge({ discount }: { discount: string }) {
    return (
        <div className="absolute top-4 left-4 bg-emerald-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full z-10">
            {discount}
        </div>
    );
}