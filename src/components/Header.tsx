"use client";

import { useState } from "react";
import { Search, User, Menu, Globe } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

interface HeaderProps {
  onAuthClick?: () => void;
}

const Header = ({ onAuthClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-coral-500 text-2xl font-bold">
              <span className="text-coral-500">Home</span>
              <span className="text-gray-700">Base</span>
            </div>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Become a host
            </Button>

            <Button variant="ghost" size="sm">
              <Globe className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-2 rounded-full border border-gray-300 p-2 transition-shadow hover:shadow-md">
              <Button variant="ghost" size="sm" className="p-1">
                <Menu className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-1"
                onClick={onAuthClick}
              >
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-4 pb-4 md:hidden">
        <div className="flex items-center rounded-full bg-gray-50 shadow-sm">
          <Search className="ml-4 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Where to?"
            className="rounded-full border-0 bg-transparent pl-3 focus:ring-0"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
