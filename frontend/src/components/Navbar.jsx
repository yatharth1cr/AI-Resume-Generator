import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">
          AI Resume Generator
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200">
          <li>
            <a href="#home" className="block px-4 py-2 hover:bg-gray-100">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="block px-4 py-2 hover:bg-gray-100">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="block px-4 py-2 hover:bg-gray-100">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
