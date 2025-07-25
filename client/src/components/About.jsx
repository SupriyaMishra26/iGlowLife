export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-pink-50/30 to-purple-50/50"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Freshers</span> into 
            <br className="hidden md:block" />Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridge the gap between academic knowledge and industry requirements with our comprehensive training programs
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8 fade-in">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Building Tomorrow's Professionals Today
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At iGlowLife, we believe every fresher has untapped potential. Our mission is to unlock that potential 
                through structured learning, real-world projects, and personalized mentorship that prepares you for 
                industry challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines theoretical knowledge with practical application, ensuring our students don't 
                just learn concepts—they master skills that make them valuable from day one.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Industry-Aligned Curriculum</h4>
                <p className="text-gray-600 text-sm">Courses designed with current industry needs and future trends in mind</p>
              </div>
              
              <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">💼</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Real Project Experience</h4>
                <p className="text-gray-600 text-sm">Work on actual projects that build your portfolio and confidence</p>
              </div>
              
              <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">👥</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Personal Mentorship</h4>
                <p className="text-gray-600 text-sm">One-on-one guidance from industry experts throughout your journey</p>
              </div>
              
              <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Career Placement</h4>
                <p className="text-gray-600 text-sm">Comprehensive job placement support and career guidance</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 fade-in">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional training session at iGlowLife"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
              

              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-200 to-pink-200 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}