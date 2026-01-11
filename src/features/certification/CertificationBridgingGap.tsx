import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const CertificationBridgingGap = () => {
  return (
    <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-[80%] h-full opacity-100 pointer-events-none">
        <Image
          src="/shapes/shapes.svg"
          alt="Background Pattern"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-20 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative h-[600px] transform -rotate-2 bg-black rounded-4xl overflow-hidden hover:rotate-0 transition-transform duration-700">
            <Image
              src="/all/bridging-gap-bg.jpg"
              alt="Professionals working"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
              width={1000}
              height={1000}
            />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.15] text-brand-primary">
              Bridging the Gap Between
              <br />
              You and Your Customers
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
              Before offering the Seal, DBI evaluates credibility based on
              industry best practices. Ultimately, this Seal serves as an
              imperative tool for businesses to depict the trustworthiness of
              their services, spanning from inception to delivery.
            </p>

            <div className="space-y-6 text-brand-primary">
              {[
                {
                  label: "Credible Mark:",
                  text: "A proven signal of assurance for your market.",
                },
                {
                  label: "Compliance:",
                  text: "Evaluated against general principles of best practices.",
                },
                {
                  label: "Full Lifecycle Trust:",
                  text: "Depict trustworthiness from inception to delivery.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start group transition-transform duration-200 hover:translate-x-1"
                >
                  <BadgeCheck
                    className="w-6 h-6 shrink-0 mt-1 transition-colors duration-200"
                    strokeWidth={2}
                  />
                  <div>
                    <span className="font-bold text-lg">{item.label} </span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBridgingGap;
