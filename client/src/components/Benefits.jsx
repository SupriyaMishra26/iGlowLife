import { 
  Briefcase, 
  Users, 
  Clock, 
  Rocket, 
  Heart, 
  Award 
} from 'lucide-react';
// import learningImage from '@assets/image_1753455863505.png';
// import successImage from '@assets/image_1753455916676.png';
// import productivityImage from '@assets/image_1753455980191.png';

export default function Benefits() {
  const mainFeatures = [
    {
      image: "https://res.cloudinary.com/dbmjqp2dz/image/upload/v1753532557/c466e258-8778-449c-aa8d-9e2eb45993ae_icdxh2.jpg",
      title: 'Interactive Learning Experience',
      description: 'Engage with cutting-edge technology and hands-on projects that prepare you for real-world challenges.',
      bgGradient: 'from-blue-500 to-cyan-500'
    },
    {
      image: "https://res.cloudinary.com/dbmjqp2dz/image/upload/v1753532557/d66be402-5bd3-4a9d-8ebb-90d94ef4c810_qh6mgz.jpg",
      title: 'Career Support & Guidance',
      description: 'We’re here to support your learning journey. Get help in setting goals, choosing your career path, and understanding how to grow with real skills. ',
      bgGradient: 'from-pink-500 to-orange-500'
    },
    {
      image: "https://res.cloudinary.com/dbmjqp2dz/image/upload/v1753532556/Flexible_Productive_illustartion_arsrmi.jpg",
      title: 'Flexible & Productive',
      description: 'Learn at your own pace with structured programs designed for maximum productivity and growth.',
      bgGradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const benefits = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Real Projects',
      description: 'Work on actual industry projects',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Learning',
      description: 'Study at your own pace',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certifications',
      description: 'Earn industry-recognized credentials',
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-white via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">iGlowLife?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of learning with our innovative approach to skill development
          </p>
        </div>

        {/* Main Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="p-8 text-center relative z-10">
                <div className="w-full h-64 mb-6 relative overflow-hidden rounded-2xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-orange-100 p-6 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
