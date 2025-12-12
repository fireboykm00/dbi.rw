const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-center w-screen bg-[#455F84] text-white">
      <div className="flex flex-row items-center justify-between max-w-7xl w-full py-2">
        <div className="w-32">
          <img
            src="/logo.png"
            alt="DBI LOGO"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <nav className="nav flex flex-row items-center justify-center">
          <a href="/" className="py-2 px-4 hover:bg-[#2a4874] bg-[#2a4874]">
            Home
          </a>
          <a href="/training" className="py-2 px-4 hover:bg-[#2a4874]">
            Training
          </a>
          <a href="/certification" className="py-2 px-4 hover:bg-[#2a4874]">
            Certification
          </a>
          <a href="/support" className="py-2 px-4 hover:bg-[#2a4874]">
            Support Catalogue
          </a>
          <a href="/community" className="py-2 px-4 hover:bg-[#2a4874]">
            Our Community
          </a>
          <a href="/faq" className="py-2 px-4 hover:bg-[#2a4874]">
            FAQ Pages
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
