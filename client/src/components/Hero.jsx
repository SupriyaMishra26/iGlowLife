export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-gradient rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-brand-gradient-reverse rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-brand-gradient rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Content */}
          <div className="space-y-10 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block gradient-text animate-glow">
                  Career Journey
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Join iGlowLife and unlock your potential with comprehensive training programs. 
                Learn from industry experts, work on real-world projects, and launch your dream career.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="btn-primary relative group">
                <span className="relative z-10 flex items-center justify-center">
                Start Your Journey
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="btn-secondary relative group">
                <span className="relative z-10 flex items-center justify-center">
                Explore Programs
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-600 font-medium">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">95%</div>
                <div className="text-gray-600 font-medium">Job Placement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600 font-medium">Expert Trainers</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-600 font-medium">Students Trained</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-gray-600 font-medium">Job Placement</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-600 font-medium">Expert Trainers</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative z-10 glass-effect rounded-3xl shadow-2xl p-8 card-hover">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-brand-gradient opacity-10 rounded-2xl"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-80 h-80 bg-brand-gradient rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-brand-gradient-reverse rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
