import bannerImage from "@assets/image_1753454122490.png";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-50 min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-gray-900">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-gray-900 fade-in">
              Transform Your<br />
              Career Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed fade-in max-w-lg">
              Join iGlowLife and unlock your potential with comprehensive training programs. Learn from industry experts, work on real-world projects, and launch your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 lg:mb-12 fade-in">
              <button className="bg-gray-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
                Start Your Journey
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border border-gray-300 text-gray-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2">
                Explore Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 fade-in">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Job Placement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Expert Trainers</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end fade-in order-first lg:order-last">
            <div className="bg-white rounded-2xl p-2 shadow-xl max-w-sm sm:max-w-md w-full">
              <img 
                src={bannerImage} 
                alt="Professional handshake in office"
                className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
