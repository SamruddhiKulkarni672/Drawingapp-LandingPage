import { Palette, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-[#2a2a2a]">
      {/* Scoped CSS for hover replacements */}
      <style>
        {`
          .nav-link {
            color: #e5e7eb; /* Tailwind gray-200 */
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .nav-link:hover {
            color: #a855f7; /* Tailwind purple-400 */
          }

          .sign-in-button {
            color: #e5e7eb;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            transition: color 0.2s ease;
            background: none;
            border: none;
          }
          .sign-in-button:hover {
            color: #a855f7;
          }

          .start-drawing-button {
            background: linear-gradient(to right, #a855f7, #ec4899);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            border: none;
            transition: box-shadow 0.3s ease;
          }
          .start-drawing-button:hover {
            box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ArtCanvas
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/how-to-use" className="nav-link">How to Use</Link>
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="sign-in-button">Sign In</button>
          <button className="start-drawing-button">Start Drawing</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#0f0f0f] border-b border-[#2a2a2a] md:hidden">
            <nav className="flex flex-col p-6 space-y-4">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/how-to-use" className="nav-link">How to Use</Link>
              <a href="#features" className="nav-link">Features</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="sign-in-button">Sign In</button>
                <button className="start-drawing-button">Start Drawing</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
