import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/slices/darkModeSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.enabled);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="text-2xl focus:outline-none"
            title="Toggle Theme"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <Link
            to="/"
            className={`text-2xl font-bold flex items-center gap-4 ${
              darkMode ? "text-blue-300" : "text-green-500"
            }`}
          >
            <span>
              AI
              <span className={darkMode ? "text-white" : "text-gray-700"}>
                Resume
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`transition hover:text-green-500 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className={`md:hidden text-2xl focus:outline-none ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul
          className={`md:hidden border-t shadow-md ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                onClick={closeMenu}
                className={`block px-4 py-2 transition ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
