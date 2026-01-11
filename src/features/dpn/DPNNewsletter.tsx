const DPNNewsletter = () => {
  return (
    <section className="py-20 px-4 md:py-32 md:px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">
          Newsletter
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Stay Ahead of the Curve
        </h2>
        <p className="text-gray-500 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
          Get the latest digital compliance guides and industry tools delivered
          straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto p-2 bg-gray-50 rounded-lg border border-gray-100 shadow-inner group transition-all duration-300 hover:border-gray-200">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-8 py-5 bg-transparent text-gray-900 placeholder-gray-400 outline-none text-lg"
          />
          <button
            type="submit"
            className="px-10 py-5 rounded-lg font-bold bg-brand-primary hover:bg-brand-primary-dark text-white shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default DPNNewsletter;
