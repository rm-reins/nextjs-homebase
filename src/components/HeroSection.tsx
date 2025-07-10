"use client";

import { SearchBar } from "~/components";

interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

const HeroSection = () => {
  const handleSearch = (filters: SearchFilters) => {
    console.log("Search with filters:", filters);
  };

  return (
    <section className="from-coral-500 relative flex h-[70vh] items-center justify-center bg-gradient-to-br to-orange-400">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Find your perfect stay
        </h1>
        <p className="mb-8 text-xl opacity-90 md:text-2xl">
          Discover amazing places to stay around the world
        </p>
        <SearchBar onSearch={handleSearch} large />
      </div>
    </section>
  );
};

export default HeroSection;
