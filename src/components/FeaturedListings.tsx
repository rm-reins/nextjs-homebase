"use client";

import { useState } from "react";
import { CategoryFilter, ListingCard } from "~/components";

interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

interface FeaturedListingsProps {
  listings: Listing[];
}

const FeaturedListings = ({ listings }: FeaturedListingsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFavoriteClick = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const handleListingClick = (id: string) => {
    console.log("Navigate to listing:", id);
  };

  return (
    <>
      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Featured Listings */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Featured stays
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              {...listing}
              isFavorite={favorites.includes(listing.id)}
              onFavoriteClick={handleFavoriteClick}
              onClick={handleListingClick}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedListings;
