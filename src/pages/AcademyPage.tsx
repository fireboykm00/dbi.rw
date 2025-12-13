import PartnersSection from "../components/PartnersSection";

const AcademyPage = () => {
  const categories = [
    {
      title: "CABA",
      description:
        "Certified Agile Business Analysis (CABA) helps companies find ways to improve their structures, principles, communication and business processes. The goal is to optimize workflows and, for example, implement IT solutions that add business value. With the internationally recognized iSQI® Certified Agile Business Analysis (CABA) certification, you have the necessary knowledge to conduct business analysis and can utilize this in agile development.",
    },
    {
      title: "CTFL",
      description:
        "Certified Tester Foundation Level (CTFL). This training provided essential testing knowledge that can be put to practical use and very importantly, explained the terminology and concepts that are used worldwide in the testing domain for software development. The training has covered three main topics which are the fundamental concepts of software testing, techniques for designing tests at all test levels and testing throughout the software development life cycle.",
    },
    {
      title: "TMAP",
      description:
        "TMAP mostly focused on how to deliver a high quality product rather than testing. The training course offers the IT Team the required knowledge and skills to build quality into an IT-system. This training is mostly for all people working in IT delivery teams (such as DevOps and Scrum) that are responsible for or heavily involved in quality engineering such as Quality Assurance(QA )professionals, testers and operations people.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="p-2">
        <section className="relative min-h-[60vh] w-full overflow-hidden rounded-xl flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/all/587b0cfabd568a039db949742072ab6090ae1cd3.jpg')", // Using a placeholder that likely represents the classroom
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Global Certification. Local Impact.
            </h1>
          </div>
        </section>
      </div>

      {/* Accreditation Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0a1929] mb-8">
                CTFL Accreditation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Digital Business Institute (DBI Rwanda) has been accredited by
                SASTQB as ISTQB training provider for ISTQB – Certified tester
                foundation level.
              </p>
            </div>

            {/* Certificate Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative shadow-2xl rounded-lg p-2 bg-white transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/all/d8f543e7441cb48d1c86ff70b389c64024504459.png" // Placeholder for certificate
                  alt="ISTQB Certificate"
                  className="max-w-full md:max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#03396C] inline-block border-b-4 border-[#03396C] pb-2">
              Categories
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#03396C] hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-black mb-6">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PartnersSection />
    </div>
  );
};

export default AcademyPage;
