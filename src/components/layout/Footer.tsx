import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Get Certified", href: "/certification" },
    { name: "Contact us", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/dbi_rwanda",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/digital-business-institute-rwanda-dbi-rwanda-64284b24b/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full rounded-2xl overflow-hidden bg-brand-dark">
      {/* Background Shape */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/shapes/footer-shapes.png')" }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 2xl:px-16 py-12 md:py-16 2xl:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32">
            {/* Logo & Description */}
            <div>
              <Image
                src="/logo.png"
                alt="DBI Logo"
                className="w-32 md:w-40 mb-6"
                width={100}
                height={100}
              />
              <p className="text-white text-sm leading-relaxed max-w-xs">
                Empowering Rwanda&apos;s digital businesses through skills,
                trust, and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-white/80 transition-colors duration-200 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-brand-primary">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm">
                    Fairview Building, KG 622 Avenue
                    <br />
                    Kigali, Rwanda
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-brand-primary">
                    <EnvelopeIcon className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href="mailto:info@dbi.rw"
                    className="text-gray-300 text-sm"
                  >
                    info@dbi.rw
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-brand-primary">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href="tel:+250781375971"
                    className="text-gray-200 hover:text-white transition-colors text-sm"
                  >
                    +250781375971
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="border-t border-gray-700 h-2 w-full"></div>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 text-white bg-brand-primary"
                aria-label={social.name}
                target="blank"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 h-2 w-full"></div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-300 text-sm">
              Copyright © {currentYear} DBI Rwanda. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Terms & conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
