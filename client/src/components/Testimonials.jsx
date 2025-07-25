import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image: "/api/placeholder/100/100",
    rating: 5,
    content: "The personalized training program completely transformed my approach to fitness. I've never felt stronger or more confident!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    image: "/api/placeholder/100/100",
    rating: 5,
    content: "iGlowLife helped me find balance between my demanding career and health goals. The trainers are incredibly knowledgeable."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "New Mom",
    image: "/api/placeholder/100/100",
    rating: 5,
    content: "After having my baby, I thought I'd never get back in shape. The supportive community and expert guidance made all the difference."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from people who transformed their lives with iGlowLife
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}