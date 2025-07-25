export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-xl"></div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About iGlowLife
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to transforming freshers into industry-ready professionals through 
            comprehensive training and hands-on experience with real-world projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Training session"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl card-hover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Empowering the Next Generation of Professionals
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At iGlowLife, we believe that every fresher has the potential to become an industry leader. 
              Our comprehensive training programs are designed to bridge the gap between academic knowledge 
              and industry requirements.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We focus on practical learning, ensuring that our students not only understand theoretical 
              concepts but can also apply them in real-world scenarios. Our experienced trainers guide 
              students through their learning journey, providing mentorship and support every step of the way.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl">✓</span>
                </div>
                <span className="text-gray-700 font-semibold text-base sm:text-lg">Industry-aligned curriculum</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl">✓</span>
                </div>
                <span className="text-gray-700 font-semibold text-base sm:text-lg">Hands-on project experience</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl">✓</span>
                </div>
                <span className="text-gray-700 font-semibold text-base sm:text-lg">Career guidance and placement support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}