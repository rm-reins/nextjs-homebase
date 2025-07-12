import Image from "next/image";

const InspirationSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Inspiration for your next trip
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group relative h-64 cursor-pointer overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&q=80"
              alt="Beach destinations"
              width="600"
              height="600"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Beach destinations</h3>
              <p className="text-gray-200">Sun, sand, and relaxation</p>
            </div>
          </div>

          <div className="group relative h-64 cursor-pointer overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80"
              alt="Mountain retreats"
              width="600"
              height="600"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Mountain retreats</h3>
              <p className="text-gray-200">Fresh air and stunning views</p>
            </div>
          </div>

          <div className="group relative h-64 cursor-pointer overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
              alt="City experiences"
              width="600"
              height="600"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">City experiences</h3>
              <p className="text-gray-200">Culture, food, and nightlife</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
