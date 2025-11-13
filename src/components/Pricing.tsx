import { Check, Star, Gift } from "lucide-react";

const Pricing = () => {
  const features = [
    "All brush types and tools",
    "Unlimited layers",
    "Auto video recording",
    "HD export (up to 4K)",
    "Cloud sync across devices",
    "Advanced color tools",
    "Community gallery access",
    "Regular feature updates",
    "Priority support",
    "No watermarks",
    "Commercial use allowed",
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-900/30 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            Limited Time Offer
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything is
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}Completely Free
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No subscriptions, no hidden fees, no premium tiers. Get access to all
            professional features at zero cost.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto relative">
          <div className="relative overflow-hidden border-2 border-purple-500/20 rounded-xl shadow-[0_10px_40px_-10px_rgba(168,85,247,0.4)] bg-gradient-to-b from-purple-900/30 to-black">
            {/* Star Decoration */}
            <div className="absolute -top-4 -right-4 bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 fill-current" />
            </div>

            {/* Header */}
            <div className="text-center p-8 bg-gradient-to-b from-purple-800/20 to-transparent">
              <h3 className="text-2xl font-bold mb-2">Full Access</h3>
              <p className="text-gray-400 mb-6">Forever free for everyone</p>

              <div className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                $0
              </div>
              <p className="text-gray-400 mb-6">No cost, ever</p>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
              onClick={() =>
                            window.open("https://tulikadigitaldrawingapp.vercel.app/", "_blank")
                        }>
                Get Started Now
              </button>
            </div>

            {/* Features */}
            <div className="p-8">
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Why Free? */}
              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg text-gray-400 text-sm flex items-start gap-2">
                <Gift className="w-4 h-4 text-pink-400 mt-0.5" />
                <span>
                  <strong className="text-white">Why free?</strong> We believe
                  creativity should be accessible to everyone. Our app is
                  community-driven and supported by optional donations.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Join thousands of artists already creating amazing digital art
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>50,000+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>4.9/5 Star Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Active Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
