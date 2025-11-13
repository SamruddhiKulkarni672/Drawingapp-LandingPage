import { Brush, Palette, Video, Layers, Undo, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brush,
      title: "Multiple Brushes",
      description: "Professional brush collection with realistic textures",
      color: "text-purple-400",
      special: false,
    },
    {
      icon: Palette,
      title: "Smart Color Picker",
      description: "Advanced HSB controls with intelligent color suggestions",
      color: "text-pink-400",
      special: false,
    },
    {
      icon: Video,
      title: "Auto Video Recording",
      description: "Capture your creative process automatically",
      color: "text-pink-400",
      special: true,
    },
    {
      icon: Sparkles,
      title: "AI SVG Generation",
      description: "Generate stunning SVG artwork using AI technology",
      color: "text-purple-400",
      special: true,
    },
    {
      icon: Layers,
      title: "Advanced Layers",
      description: "Professional layer system with blend modes",
      color: "text-purple-400",
      special: false,
    },
    {
      icon: Undo,
      title: "Unlimited Undo",
      description: "Never lose your progress with infinite history",
      color: "text-pink-400",
      special: false,
    },
  ];

  return (
    <section className="py-16 bg-[#0d0b14] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-[#7c4dff] to-[#ec4899] bg-clip-text text-transparent">
              {" "}
              Every Artist
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional tools that make digital art creation effortless and
            enjoyable.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative rounded-xl p-6 transition-all duration-500 hover:-translate-y-2
                         bg-gradient-to-br from-[#1a1625] to-[#0f0c18]
                         border border-[#2b2338]
                         hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 transition-transform duration-300 ${
                  feature.special
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.5)]"
                    : "bg-[#191622]"
                }`}
              >
                <feature.icon
                  className={`w-6 h-6 ${
                    feature.special ? "text-white" : feature.color
                  }`}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                {feature.title}
                {feature.special && (
                  <span className="ml-2 text-xs bg-gradient-to-r from-purple-400 to-pink-400 text-white px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Special animation - Auto Video Recording */}
              {feature.title === "Auto Video Recording" && (
                <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                  <div className="w-full h-full border-2 border-pink-200 rounded-full animate-ping"></div>
                  <div className="absolute top-2 left-2 w-12 h-12 bg-pink-400/40 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-pink-400/80 rounded-full animate-bounce"></div>
                </div>
              )}

              {/* Special animation - AI SVG Generation */}
              {feature.title === "AI SVG Generation" && (
                <div className="absolute top-4 right-4 w-16 h-16 opacity-30">
                  <Sparkles className="w-4 h-4 absolute top-2 left-2 text-purple-400 animate-pulse" />
                  <Sparkles className="w-3 h-3 absolute top-8 left-8 text-pink-400 animate-pulse delay-150" />
                  <Sparkles className="w-2 h-2 absolute top-6 left-12 text-purple-400 animate-pulse delay-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
