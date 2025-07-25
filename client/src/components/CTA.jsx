export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 fade-in">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-blue-100 mb-8 fade-in">
          Join thousands of successful graduates who built real skills and landed amazing jobs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 shadow-lg">
            Start Your Journey Today
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
            Schedule a Call
          </button>
        </div>
        <p className="text-blue-200 mt-6">No upfront payment • 100% job guarantee • Free career coaching</p>
      </div>
    </section>
  );
}
