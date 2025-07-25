export default function Hero() {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            You Won't Just Learn,<br />
            <span className="text-yellow-400">You'll Build Real Impact</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed fade-in">
            Work on real projects, explore your true interests, and get mentored by industry experts who care about your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 shadow-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200">
              Watch Demo
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center fade-in">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-lg opacity-90">Real Projects</div>
            </div>
            <div className="text-center fade-in">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-lg opacity-90">Expert Mentors</div>
            </div>
            <div className="text-center fade-in">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-lg opacity-90">Career Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
