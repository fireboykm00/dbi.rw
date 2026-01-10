import { ArrowRightIcon } from "lucide-react";
import { primaryColor, primaryColorDark } from "../../lib/site";
import Image from "next/image";

const JoinICTChamber = () => {
  return (
    <div className="p-2 my-6 md:my-10 lg:my-16">
      <section className="relative p-12 md:py-24 lg:px-12 overflow-hidden rounded-xl min-h-[500px] md:min-h-[700px] bg-black flex items-center">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/all/alex-ntale-meeting.png')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 " />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to become an ICT Chamber member?
              </h2>
              <p className="text-lg mb-10 leading-relaxed text-white/90">
                The Rwanda ICT Chamber is a member-based organization
                representing country-based ICT companies under supervision of
                the Rwanda Private Sector Federation (PSF). The Rwanda ICT
                Chamber represents more than 300 member companies at different
                stages of their development: Startups, Small and Medium
                Enterprises and Corporations.
              </p>
              <a
                href="#"
                className={`inline-flex bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white gap-2 items-center font-bold px-8 py-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1`}
              >
                Become A Member
                <ArrowRightIcon className="w-5" />
              </a>
            </div>

            {/* Logo Card */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-white p-12 rounded-xl shadow-2xl max-w-md w-full flex flex-col items-center text-center transition-transform hover:scale-105 duration-200">
                {/* Using a placeholder or existing logo, user can replace */}
                <Image
                  src="/company/partner-9.png"
                  alt="Rwanda ICT Chamber"
                  className="w-48 h-auto mb-6 transition-all duration-200"
                  width={192}
                  height={192}
                />
                <div className="border-t-2 border-gray-200 w-16 my-4" />
                <p className="text-gray-500 font-medium">
                  Connect. Grow. Expand
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinICTChamber;
