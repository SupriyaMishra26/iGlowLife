export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 fade-in">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-white/90 mb-8 fade-in">
          Join thousands of successful graduates who built real skills and landed amazing jobs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Start Your Journey Today
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200">
            Schedule a Call
          </button>
        </div>
        <p className="text-white/80 mt-6">No upfront payment • 100% job guarantee • Free career coaching</p>
      </div>
    </section>
  );
}
