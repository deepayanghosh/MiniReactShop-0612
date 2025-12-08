import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  reviews?: number;
}

export function ProductRating({ rating, reviews }: RatingProps) {
    return (
        <div className="flex items-center gap-2">
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={ `w-4 h-4 ${
                    i < Math.floor(rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300'}`
                }
            />
            ))}
        </div>
        <span className="text-sm font-medium text-gray-700">{rating}</span>
        {reviews && <span className="text-sm text-gray-400">({reviews})</span>}
        </div>
    );
}