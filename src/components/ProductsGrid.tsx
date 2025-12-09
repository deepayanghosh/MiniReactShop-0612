import React, { useState } from "react";
import SingleProductCard from "./SingleProductCard";
import type { cartItem } from "./ShoppingCartSidebar";

const productDefaultImg = '/react-display-1.webp';

export interface Product {
    id: number,
    name: string,
    category: string,
    image: string,
    price: number,
    off_percent: number,
    rating: number,
    reviews: number
}

const allProducts: Product[] = [
    {
        id: 1,
        name: "Product 1",
        category: "Category 1",
        image: productDefaultImg,
        price: 100,
        off_percent: 0, 
        rating: 4,
        reviews: 10
    },
    {
        id: 2,
        name: "Product 2",
        category: "Category 2",
        image: productDefaultImg,
        price: 200,
        off_percent: 0, 
        rating: 4,
        reviews: 10
    },
    {
        id: 3,
        name: "Product 3",
        category: "Category 1",
        image: productDefaultImg,
        price: 500,
        off_percent: 0, 
        rating: 4,
        reviews: 10
    }
]

interface ProductsGridProps {
    cartItems: cartItem[],
    setCartItems: React.Dispatch< React.SetStateAction<cartItem[]> >
}

export default function ProductsGrid( {cartItems, setCartItems}: ProductsGridProps ) {

    const [ products, setProducts ] = useState<Product[]>( allProducts )

    function handleAddToCart( product_id: number ) {
        
        const productToAdd = products.find( p => p.id === product_id )

        if ( ! productToAdd ) return

        setCartItems( prev => {
            const existing = prev.find(c => c.product_id === product_id)
            if( existing ) {
                // increment quantity
                return prev.map( i => i.product_id === product_id 
                    ? { ...i, in_cart: i.in_cart + 1 }
                    : i
                )
            }
            const newItem: cartItem = {
                cart_id: crypto.randomUUID(),
                product_id: productToAdd.id,
                name: productToAdd.name,
                image: productToAdd.image,
                price: productToAdd.price,
                in_cart: 1
            }
            return [ ...prev, newItem ]
        } )
    }

    return (
        <div className="grid w-full grid-cols-2 gap-6">
            {
                /* singleProduct prop = product object (interface Product) */
                products.map( ( product ) => 
                    <SingleProductCard 
                    key={product.id} 
                    singleProduct = {product} 
                    addToCartHandler = {handleAddToCart}
                    /> 
                )
            }
        </div>
    )
}