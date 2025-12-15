import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

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
    <nav className="w-full px-4 lg:px-8 py-4">
      <div
        className="max-w-7xl w-full mx-auto rounded-md px-3 flex items-center justify-between"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src="/logo.png" alt="DBI LOGO" className="w-32 md:w-44" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive(link.href)
                    ? "font-bold text-[#FBD40E]"
                    : "font-normal text-white hover:text-[#FBD40E]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
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
        <Link
          to="/certification"
          className="hidden lg:flex items-center gap-2 bg-[#FBD40E] hover:bg-[#e0bd0c] text-[#212529] text-sm font-medium px-5 py-4 rounded-lg transition-colors duration-200"
        >
          Get Certified
          <ArrowRightIcon className="w-5 h-5" />
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden mt-2 mx-6 rounded-lg p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm block py-2 transition-colors duration-200 ${
                    isActive(link.href)
                      ? "font-bold text-[#FBD40E]"
                      : "font-normal text-white hover:text-[#FBD40E]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/certification"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#FBD40E] text-[#212529] text-sm font-medium px-4 py-3 rounded-lg w-full"
              >
                Get Certified
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
