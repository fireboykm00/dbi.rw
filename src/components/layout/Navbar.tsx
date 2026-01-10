"use client";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import {
  primaryColor,
  primaryColorDark,
  startAssessmentLink,
} from "../../lib/site";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPath = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Certification", href: "/certification" },
    { name: "Academy", href: "/academy" },
    { name: "Directory", href: "/directory" },
    {
      name: "Digital Professionals Network",
      href: "/dpn",
    },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/" || currentPath === "";
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className="w-full p-4 py-8 2xl:py-10">
      <div
        className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 2xl:px-8 flex items-center justify-between backdrop-blur-md rounded-lg shadow-xl transition-all duration-300"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="DBI LOGO"
              className="w-32 md:w-44 2xl:w-52"
              width={500}
              height={500}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 2xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-sm 2xl:text-base font-medium tracking-wide transition-all duration-200 hover:text-white ${
                  isActive(link.href) ? "text-white font-bold" : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2.5 hover:bg-white/10 rounded-xl transition-all duration-200"
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
            href={startAssessmentLink}
            className={`flex items-center gap-2 text-white font-bold px-6 py-3 2xl:px-8 2xl:py-4 2xl:text-lg rounded-md transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 group bg-[${primaryColor}] hover:bg-[${primaryColorDark}]`}
          >
            Get Certified
            <ArrowRightIcon className="w-4 h-4 2xl:w-5 2xl:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="max-w-7xl mx-auto lg:hidden">
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out backdrop-blur-xl rounded-2xl shadow-2xl mt-2 ${
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
        >
          <ul className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg block py-3 px-4 rounded-xl transition-all duration-200 ${
                    isActive(link.href)
                      ? "font-bold text-white bg-white/10"
                      : "font-medium text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-white/10">
              <Link
                href="/certification"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center gap-2 text-white text-lg font-bold px-4 py-4 rounded-xl w-full shadow-lg transition-all active:scale-95 bg-[${primaryColor}] hover:bg-[${primaryColorDark}]`}
              >
                Get Certified
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
