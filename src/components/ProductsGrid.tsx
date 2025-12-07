import SingleProductCard from "./SingleProductCard";

export default function ProductsGrid() {
    return (
        <div className="grid w-full grid-cols-2 gap-6">
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
        </div>
    )
}