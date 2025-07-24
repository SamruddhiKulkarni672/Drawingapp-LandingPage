import { Github, Twitter, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      {/* Scoped hover style */}
      <style>
        {`
          .footer-link {
            color: #9ca3af; /* Tailwind gray-400 */
            transition: color 0.2s ease;
            text-decoration: none;
          }
          .footer-link:hover {
            color: #a855f7; /* Tailwind purple-400 */
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Digital Drawing App
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering artists worldwide with free, professional-grade digital
              drawing tools. Create, share, and inspire without limits.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Instagram, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 text-gray-300 hover:text-white hover:border-purple-500 transition"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* App Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">App</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Download",
                "Features",
                "Live Demo",
                "Tutorials",
                "System Requirements",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Community</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Gallery",
                "Discord",
                "Forums",
                "Submit Artwork",
                "Artist Spotlight",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 text-center md:text-left">
            © 2024 Digital Drawing App. Made with{" "}
            <Heart className="w-4 h-4 inline text-pink-500 fill-current" /> by the
            community.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
            <a href="#" className="footer-link">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
