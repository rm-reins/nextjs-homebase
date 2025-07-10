import {
  Header,
  HeroSection,
  FeaturedListings,
  InspirationSection,
  Footer,
} from "~/components";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

const featuredListings = [
  {
    id: "1",
    title: "Modern Beachfront Villa",
    location: "Malibu, California",
    price: 450,
    rating: 4.9,
    reviewCount: 127,
    imageUrl:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&q=80",
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 320,
    rating: 4.8,
    reviewCount: 89,
    imageUrl:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
  },
  {
    id: "3",
    title: "Downtown Loft",
    location: "New York, NY",
    price: 280,
    rating: 4.7,
    reviewCount: 156,
    imageUrl:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
  },
  {
    id: "4",
    title: "Lakeside Retreat",
    location: "Lake Tahoe, Nevada",
    price: 380,
    rating: 4.9,
    reviewCount: 203,
    imageUrl:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80",
  },
  {
    id: "5",
    title: "Historic Brownstone",
    location: "Boston, Massachusetts",
    price: 225,
    rating: 4.6,
    reviewCount: 94,
    imageUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
  },
  {
    id: "6",
    title: "Desert Oasis",
    location: "Scottsdale, Arizona",
    price: 195,
    rating: 4.8,
    reviewCount: 78,
    imageUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  },
];

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <HeroSection />
        <FeaturedListings listings={featuredListings} />
        <InspirationSection />
        <Footer />
      </div>
    </HydrateClient>
  );
}
