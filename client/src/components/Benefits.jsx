import { 
  Briefcase, 
  Users, 
  Clock, 
  Rocket, 
  Heart, 
  Award 
} from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Real-World Projects',
      description: 'Work on actual projects for real companies and build a portfolio that impresses employers',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Mentorship',
      description: 'Get personalized guidance from industry professionals who are invested in your success',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with flexible online and in-person programs that fit your schedule',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Career Launch',
      description: 'Get job placement assistance and career guidance to land your dream role',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Vibrant Community',
      description: 'Connect with like-minded peers and build lasting professional relationships',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Certifications',
      description: 'Earn recognized certifications that validate your skills to potential employers',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,165,0,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,192,203,0.1),transparent_70%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-pink-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-glow">
              Why Choose iGlowLife?
            </h2>
            <div className="h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed">
            Experience the future of learning with our innovative approach to skill development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-2xl">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-bl-3xl rounded-tr-2xl opacity-50"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
}
