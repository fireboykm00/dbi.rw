import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Certification", href: "/certification" },
    { name: "Academy", href: "/academy" },
    { name: "Directory", href: "/directory" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/" || currentPath === "";
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className="w-full p-4 py-8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between bg-[#455F84]/80 backdrop-blur-md rounded-lg shadow-xl transition-all duration-300">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <img src="/logo.png" alt="DBI LOGO" className="w-32 md:w-44" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-white ${
                  isActive(link.href) ? "text-white font-bold" : "text-white/80"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="h-0.5 bg-white mt-0.5"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/certification"
            className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#455F84] text-sm font-bold px-6 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Certified
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#455F84] border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg block py-2 transition-colors duration-200 ${
                      isActive(link.href)
                        ? "font-bold text-white"
                        : "font-medium text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
                <Link
                  to="/certification"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-white text-[#455F84] text-lg font-bold px-4 py-4 rounded-xl w-full shadow-lg"
                >
                  Get Certified
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
