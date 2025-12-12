const Navbar = () => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

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
    <nav className="w-full px-6 py-4">
      <div
        className="max-w-7xl w-full mx-auto rounded-md px-3 flex items-center justify-between"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="./logo.png" alt="DBI LOGO" className="w-44" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-white text-sm transition-colors duration-200 ${
                  isActive(link.href)
                    ? "font-bold"
                    : "font-normal hover:text-gray-300"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#"
          className="flex items-center gap-2 bg-[#03396C] hover:bg-[#143f68] text-white text-sm font-medium px-5 py-4 rounded-lg transition-colors duration-200"
        >
          Get Certified
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
