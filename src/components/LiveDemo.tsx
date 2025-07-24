import { Play, ExternalLink } from "lucide-react";

const LiveDemo = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-[#0a0414]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              See It in
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Action
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              Watch our drawing app in action! This demo shows smooth brush
              strokes, color mixing, and real-time video recording features.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-8 py-4 rounded-md shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Play Demo
              </button>
              <button className="flex items-center justify-center border border-gray-600 text-white text-lg px-8 py-4 rounded-md hover:bg-gray-800 transition-all duration-300">
                <ExternalLink className="w-5 h-5 mr-2" />
                Open Full App
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">Brush Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">∞</div>
                <div className="text-sm text-gray-400">Color Options</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">4K</div>
                <div className="text-sm text-gray-400">Export Quality</div>
              </div>
            </div>
          </div>

          {/* Right Section - Demo Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1625] to-[#0f0c18] shadow-[0_10px_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] aspect-video transition-all duration-500">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-white font-medium">Click to watch demo</p>
                  <p className="text-white/70 text-sm mt-1">
                    See the app in action
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 bg-black/40 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                🔴 Recording
              </div>
              <div className="absolute bottom-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                2:30 / 5:45
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-[float_6s_ease-in-out_infinite]">
              ⚡ Real-time
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-[float_6s_ease-in-out_infinite]"
              style={{ animationDelay: "1s" }}
            >
              🎥 HD Recording
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
