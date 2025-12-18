export default function CTA() {
  return (
    <section className="relative bg-indigo-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to <span className="text-indigo-200">Get Started?</span>
        </h3>

        <p className="max-w-2xl mx-auto text-indigo-100 text-base sm:text-lg mb-10">
          Let’s build something amazing together. Get in touch with our team
          today and turn your ideas into reality.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>

          <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
