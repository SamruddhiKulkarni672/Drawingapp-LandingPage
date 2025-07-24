import { Play, Download, Sparkles } from "lucide-react";
import heroImage from "../assets/hero-app-preview.png";

const Hero = () => {
  return (
    <section className="relative  w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a0b2e] via-[#11071f] to-[#0a0414] overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(255,255,255,0.05)_1px,_transparent_1px),linear-gradient(-45deg,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-[fade-in_1s_ease-out]">
            <div className="inline-flex items-center gap-2 bg-[#2a1f44] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-gray-200">Free Digital Drawing App</span>
            </div>

            <div className="text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Create
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Amazing{" "}
              </span>
              Digital Art
            </div>

            <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Unleash your creativity with our powerful digital drawing app.
              Multiple brushes, paint selector, auto video recording, and so
              much more – all completely free!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-8 py-4 rounded-md shadow-md hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all">
                <Play className="w-5 h-5 mr-2" />
                Try Live Demo
              </button>
              <button className="flex items-center justify-center border border-gray-500 text-white text-lg px-8 py-4 rounded-md hover:bg-gray-800 transition-all">
                <Download className="w-5 h-5 mr-2" />
                Download Free
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              ✨ No registration required • 🎨 All features free • 📱 Works on
              all devices
            </div>
          </div>

          {/* Right content - App preview */}
          <div className="relative animate-[slide-in-right_1s_ease-out]">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.2)] hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all duration-500">
              <img
                src={heroImage}
                alt="Digital Drawing App Preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-[pulse_2s_infinite]">
              🎬 Auto Recording
            </div>
            <div
              className="absolute -bottom-6 -left-6 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-[pulse_2s_infinite]"
              style={{ animationDelay: "0.5s" }}
            >
              🖌️ Multiple Brushes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
