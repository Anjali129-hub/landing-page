export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Building Smart <span className="text-indigo-200">Digital Solutions</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-indigo-100 mb-10">
          We help startups and businesses grow faster with scalable, secure,
          and modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
