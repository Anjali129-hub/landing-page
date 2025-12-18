export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">
          About <span className="text-indigo-600">Sammunat</span>
        </h3>

        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
          Sammunat is a technology-driven company dedicated to building scalable,
          secure, and innovative digital solutions. We help startups and
          enterprises transform ideas into impactful products using modern web
          technologies.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-8">
          <div className="p-6 rounded-xl shadow-sm border hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
            <p className="text-gray-600">
              Empower businesses with reliable and future-ready digital
              solutions.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-sm border hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
            <p className="text-gray-600">
              To become a trusted global partner for innovative technology
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
