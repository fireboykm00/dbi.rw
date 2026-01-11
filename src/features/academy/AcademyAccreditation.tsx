import Image from "next/image";

const AcademyAccreditation = () => {
  return (
    <div className="p-2 relative">
      <Image
        src="/shapes/shapes.svg"
        className="w-full inset-0 absolute h-full pointer-events-none opacity-40"
        alt="Background Pattern"
        width={1000}
        height={1000}
      />
      <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 flex flex-col md:flex-row gap-6 lg:gap-10 items-center max-w-7xl w-full mx-auto overflow-hidden">
        <div className="grow">
          <Image
            src="/all/accreditation-cert.png"
            className="w-full object-cover -rotate-2 hover:rotate-0 transition-transform duration-700"
            alt="Accreditation"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-brand-primary">
            Don&apos;t just learn. Get Accredited.
          </h2>
          <p className="text-gray-600">
            Digital Business Institute is fully accredited by the Southern
            African Software Testing Qualifications Board (SASTQB) to deliver
            the ISTQB Certified Tester Foundation Level (CTFL) training. Your
            certificate will be recognized in over 100 countries.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AcademyAccreditation;
