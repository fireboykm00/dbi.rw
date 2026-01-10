import { primaryColor } from "../../lib/site";
import Image from "next/image";

const CertificationValidation = () => {
  const seals = [
    {
      title: "For Tech Startups",
      description:
        "Recognizes tech start-ups that demonstrate exceptional potential in innovation, growth, and impact within Rwanda's digital sector.",
      image: "/seals/startup.png",
      color: "bg-gray-50",
    },
    {
      title: "For Digital Learning",
      description:
        "Recognizes EdTech solutions that enhance access to quality education and foster learning through technology.",
      image: "/seals/edtech.png",
      color: "bg-gray-50",
    },
    {
      title: "For Online Retail",
      description:
        "Recognizes platforms that demonstrate excellence in user experience, business growth, and market impact.",
      image: "/seals/ecommerce.png",
      color: "bg-gray-50",
    },
    {
      title: "For Engineering Excellence",
      description:
        "Recognizes organizations that demonstrate excellence in software engineering and adherence to industry best practices.",
      image: "/seals/sod.png",
      color: "bg-gray-50",
    },
    {
      title: "For Financial Innovation",
      description:
        "Recognizes FinTech companies that adhere to industry best practices and demonstrate excellence in driving financial inclusion.",
      image: "/seals/fintech.png",
      color: "bg-gray-50",
    },
  ];

  return (
    <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Header Card */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: primaryColor }}
            >
              Validate Your Excellence
            </h2>
            <p className="text-gray-600 text-lg">
              Prove your credibility with a sector-specific seal. Choose your
              path below to get certified.
            </p>
          </div>

          {/* Seal Cards */}
          {seals.map((seal, index) => (
            <div
              key={index}
              className={`${seal.color} border border-transparent rounded-2xl p-8 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1 shadow-md`}
            >
              <div className="mb-6 transition-transform duration-200 hover:scale-110">
                <Image
                  src={seal.image}
                  alt={seal.title}
                  className="w-24 h-24 object-contain"
                  width={24}
                  height={24}
                />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: primaryColor }}
              >
                {seal.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {seal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationValidation;
