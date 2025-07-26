import { Link } from "wouter";
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
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">🚀 Launching Soon</span>
            </div>
            
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

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                <span className="text-orange-500">💼</span>
                <span className="text-sm font-medium text-gray-700">Real Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                <span className="text-pink-500">👨‍🏫</span>
                <span className="text-sm font-medium text-gray-700">Expert Mentors</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                <span className="text-purple-500">🎓</span>
                <span className="text-sm font-medium text-gray-700">Industry Certificates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/interest">
  <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
   Become an Early Member
  </button>
</Link>
             
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Join our founding community:</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Coming</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Soon</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Expert</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Mentors</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Industry</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Ready</div>
                </div>
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
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Skill Building</div>
                    <div className="text-xs text-gray-600">In Progress</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🎯</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Career Ready</div>
                    <div className="text-xs text-gray-600">Your Goal</div>
                  </div>
                </div>
              </div>
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