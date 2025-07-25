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
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
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
      iconColor: 'text-pink-600'
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
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 fade-in">
            Why Choose iGlowLife?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
            Build real skills, gain confidence, and kickstart a career you're proud of
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center fade-in">
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 benefit-icon`}>
                <div className={benefit.iconColor}>
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
