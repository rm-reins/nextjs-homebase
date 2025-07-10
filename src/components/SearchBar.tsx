"use client";

import React, { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
  large?: boolean;
}

interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

const formatDateForInput = (date: Date): string => {
  return date.toISOString().split("T")[0]!;
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const SearchBar = ({ onSearch, large = false }: SearchBarProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    checkIn: formatDateForInput(today),
    checkOut: formatDateForInput(tomorrow),
    guests: 1,
  });

  const handleSearch = () => {
    onSearch?.(filters);
  };

  if (large) {
    return (
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-2xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Where</label>
            <div className="relative">
              <MapPin className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search destinations"
                className="h-12 border-gray-300 pl-10 text-gray-700 placeholder:font-normal placeholder:text-gray-400"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Check in
            </label>
            <div className="relative">
              <Calendar className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <Input
                type="date"
                className="h-12 border-gray-300 pl-10 text-gray-600 placeholder:text-gray-400"
                value={filters.checkIn}
                onChange={(e) =>
                  setFilters({ ...filters, checkIn: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Check out
            </label>
            <div className="relative">
              <Calendar className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <Input
                type="date"
                className="h-12 border-gray-300 pl-10 text-gray-600 placeholder:text-gray-400"
                value={filters.checkOut}
                onChange={(e) =>
                  setFilters({ ...filters, checkOut: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Guests
            </label>
            <div className="relative">
              <Users className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <Input
                type="number"
                min="1"
                placeholder="1 guest"
                className="h-12 border-gray-300 pl-10 text-gray-700"
                value={filters.guests}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    guests: parseInt(e.target.value) || 1,
                  })
                }
              />
            </div>
          </div>
        </div>

        <Button
          onClick={handleSearch}
          className="bg-coral-500 hover:bg-coral-600 mt-6 h-12 w-full px-8 md:w-auto"
        >
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-2xl items-center rounded-full bg-white p-2 shadow-lg">
      <div className="flex-1 px-4">
        <Input
          placeholder="Where to?"
          className="border-0 bg-transparent placeholder:font-light placeholder:text-gray-400 focus:ring-0"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
      </div>
      <div className="h-8 w-px bg-gray-300"></div>
      <div className="flex-1 px-4">
        <Input
          type="date"
          className="border-0 bg-transparent text-gray-600 placeholder:text-gray-400 focus:ring-0"
          value={filters.checkIn}
          onChange={(e) => setFilters({ ...filters, checkIn: e.target.value })}
        />
      </div>
      <Button
        onClick={handleSearch}
        size="sm"
        className="bg-coral-500 hover:bg-coral-600 m-1 rounded-full px-4"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SearchBar;
