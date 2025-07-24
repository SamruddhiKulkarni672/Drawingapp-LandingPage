import { Heart, Share, Download } from "lucide-react";
import featuredImage from "../assets/featured-artworks.png";

const FeaturedArtworks = () => {
  const artworks = [
    {
      id: 1,
      title: "Abstract Landscape",
      artist: "Sarah Chen",
      likes: 1240,
      category: "Digital Painting",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
    },
    {
      id: 2,
      title: "Character Design",
      artist: "Mike Rodriguez",
      likes: 856,
      category: "Illustration",
      colors: ["#9B59B6", "#E74C3C", "#F39C12"],
    },
    {
      id: 3,
      title: "Nature Study",
      artist: "Emma Thompson",
      likes: 2103,
      category: "Sketch",
      colors: ["#27AE60", "#2ECC71", "#16A085"],
    },
    {
      id: 4,
      title: "Urban Sketch",
      artist: "Alex Park",
      likes: 674,
      category: "Architecture",
      colors: ["#34495E", "#95A5A6", "#BDC3C7"],
    },
    {
      id: 5,
      title: "Fantasy Portrait",
      artist: "Lisa Wang",
      likes: 1567,
      category: "Fantasy Art",
      colors: ["#8E44AD", "#3498DB", "#E67E22"],
    },
    {
      id: 6,
      title: "Minimalist Design",
      artist: "David Kim",
      likes: 923,
      category: "Minimalism",
      colors: ["#2C3E50", "#ECF0F1", "#E74C3C"],
    },
  ];

  return (
    <section className="py-24 bg-[#0d0a10]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Artworks
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover amazing art created by our community using the digital
            drawing app. Get inspired and start your own creative journey!
          </p>
        </div>

        {/* Artworks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="group bg-[#1a1625] rounded-xl overflow-hidden shadow-md hover:shadow-[0_10px_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image with Overlay */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={featuredImage}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Action Buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <div className="flex gap-2">
                      {[Heart, Share, Download].map((Icon, i) => (
                        <button
                          key={i}
                          className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Color Palette */}
                <div className="absolute top-4 right-4 flex gap-1">
                  {artwork.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full border border-white/50"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-white group-hover:text-purple-400 transition-colors">
                    {artwork.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                    {artwork.likes}
                  </div>
                </div>

                <p className="text-gray-400 mb-2">by {artwork.artist}</p>

                <div className="inline-block bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
                  {artwork.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="text-white border border-gray-600 hover:bg-gray-800 px-8 py-4 rounded-md text-lg transition">
            View All Artworks
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;
