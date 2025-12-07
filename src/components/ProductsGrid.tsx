import { useState } from "react";
import SingleProductCard from "./SingleProductCard";

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

export default function ProductsGrid() {

    const [ products, setProducts ] = useState<Product[]>( allProducts )

    return (
        <div className="grid w-full grid-cols-2 gap-6">
            {
                /* singleProduct prop = product object (interface Product) */
                products.map( ( product ) => <SingleProductCard key={product.id} singleProduct = {product} /> )
            }
        </div>
    )
}