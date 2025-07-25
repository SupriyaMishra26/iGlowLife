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
          <div className="space-y-6 animate-slide-up">
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