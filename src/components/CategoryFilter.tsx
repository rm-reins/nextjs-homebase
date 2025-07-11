import {
  Home,
  TreePine,
  Waves,
  Mountain,
  Building,
  Palmtree,
  Coffee,
  Camera,
} from "lucide-react";

const categories = [
  { id: "all", name: "All", icon: Home },
  { id: "beachfront", name: "Beachfront", icon: Waves },
  { id: "cabin", name: "Cabins", icon: TreePine },
  { id: "mountains", name: "Mountains", icon: Mountain },
  { id: "city", name: "City", icon: Building },
  { id: "tropical", name: "Tropical", icon: Palmtree },
  { id: "unique", name: "Unique stays", icon: Camera },
  { id: "trending", name: "Trending", icon: Coffee },
];

interface CategoryFilterProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const CategoryFilter = ({
  selectedCategory = "all",
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="scrollbar-hide flex space-x-8 overflow-x-auto py-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange?.(category.id)}
                className={`flex min-w-0 flex-shrink-0 flex-col items-center space-y-2 rounded-lg p-2 transition-colors ${
                  isActive
                    ? "text-coral-500 border-coral-500 border-b-2"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
