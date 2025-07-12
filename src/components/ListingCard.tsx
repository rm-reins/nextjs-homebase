import { Star, Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";

interface ListingCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isFavorite?: boolean;
  onFavoriteClick?: (id: string) => void;
  onClick?: (id: string) => void;
}

const ListingCard = ({
  id,
  title,
  location,
  price,
  rating,
  reviewCount,
  imageUrl,
  isFavorite = false,
  onFavoriteClick,
  onClick,
}: ListingCardProps) => {
  return (
    <div className="group cursor-pointer" onClick={() => onClick?.(id)}>
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          width="600"
          height="600"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 rounded-full bg-white/80 p-2 hover:bg-white"
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick?.(id);
          }}
        >
          <Heart
            className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
          />
        </Button>
      </div>

      <div className="mt-3 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="truncate font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-gray-500">({reviewCount})</span>
          </div>
        </div>
        <p className="truncate text-gray-600">{location}</p>
        <p className="text-gray-900">
          <span className="font-semibold">${price}</span>
          <span className="text-gray-600"> / night</span>
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
