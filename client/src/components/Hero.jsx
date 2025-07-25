import bannerImage from "@assets/image_1753453821601.png";

export default function Hero() {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Transform Your<br />
              <span className="text-yellow-400">Career Journey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed fade-in">
              Join iGlowLife and unlock your potential with comprehensive training programs. Learn from industry experts, work on real-world projects, and launch your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in">
              <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 shadow-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200">
                Watch Demo
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
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
          
          {/* Right Image Card */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-sm">
              <img 
                src={bannerImage} 
                alt="Professional working on laptop"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Real Success Stories</h3>
                <p className="text-white/80 text-sm">
                  Join thousands who transformed their careers through hands-on learning and expert mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
