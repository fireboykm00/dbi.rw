const Footer = () => {
  return (
    <footer className="w-full bg-[#455F84] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <div className="border-2 border-white p-2 mb-4">
            {/* Placeholder for logo if image not available, or use the same logo as navbar */}
            <div className="text-2xl font-bold leading-none">DBI</div>
            <div className="text-[0.6rem] leading-none mt-1">
              DIGITAL
              <br />
              BUSINESS
              <br />
              INSTITUTE
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-white/30 h-40 mx-4"></div>

        {/* Contact Us */}
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="text-xl font-bold">Contact us</h3>
          <div className="flex flex-col gap-2 opacity-90">
            <p>Email: info@dbi.rw</p>
            <p>
              Office: Fairview Building, KG 622
              <br />
              Avenue Kigali, Rwanda
            </p>
            <p>Phone: +250781375971</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="text-xl font-bold">Quick links</h3>
          <ul className="flex flex-col gap-2 opacity-90">
            <li>
              <a href="/about" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="/certificate" className="hover:underline">
                DBI Certificate
              </a>
            </li>
            <li>
              <a href="/events" className="hover:underline">
                Our Events
              </a>
            </li>
            <li>
              <a href="/support" className="hover:underline">
                Support Offers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="flex flex-col gap-4 max-w-xs text-sm">
          <p className="opacity-90">
            Are you an IT company that needs to genuinely get updated
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="sample@mail.com"
              className="px-4 py-2 text-gray-800 bg-white w-full outline-none"
            />
            <button className="bg-[#374151] hover:bg-[#4b5563] text-white px-6 py-2 border border-white/20 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-16 opacity-75">
        DBI Copyright © 2024
      </div>
    </footer>
  );
};

export default Footer;
