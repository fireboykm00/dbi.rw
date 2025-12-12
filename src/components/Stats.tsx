const stats = [
  { number: "500+", label: "Graduates" },
  { number: "50+", label: "Corporate Partners" },
  { number: "100%", label: "Commitment" },
  { number: "10+", label: "Years Experience" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-[#455F84] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {stat.number}
              </div>
              <div className="text-blue-200 uppercase tracking-wider text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
