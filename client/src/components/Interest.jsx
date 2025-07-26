// import { useState } from 'react';
// import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: 'Email Us',
//       content: 'info@iglowlife.com',
//       description: 'Send us an email anytime'
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: 'Call Us',
//       content: '+91 73680 07363',
//       description: 'Mon-Sat from 9am to 6pm'
//     },
//     {
//       icon: <MessageCircle className="w-6 h-6" />,
//       title: 'WhatsApp',
//       content: '+91 73680 07363',
//       description: 'Quick support via WhatsApp'
//     },
   
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
//         <div className="container mx-auto max-w-6xl px-6">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               Get in <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Ready to start your professional journey? We're here to help you every step of the way
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="section-padding">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Contact Form */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
//                 <p className="text-gray-600">
//                   Have questions about our programs? Fill out the form and we'll get back to you within 24 hours.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Your full name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
//                       placeholder="+91 9876543210"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
//                       placeholder="What's this about?"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
//                     placeholder="Tell us about your goals and how we can help you..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 px-8 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//                 >
//                   <Send className="w-5 h-5" />
//                   <span>Send Message</span>
//                 </button>
//               </form>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
//                 <p className="text-gray-600">
//                   Multiple ways to reach us. Choose what works best for you.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
//                     <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
//                       <p className="text-lg text-gray-800 font-medium mb-1">{info.content}</p>
//                       <p className="text-sm text-gray-600">{info.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Business Hours */}
//               <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6">
//                 <div className="flex items-center space-x-3 mb-4">
//                   <Clock className="w-6 h-6 text-orange-500" />
//                   <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
//                 </div>
//                 <div className="space-y-2 text-gray-700">
//                   <div className="flex justify-between">
//                     <span>Monday - Friday</span>
//                     <span>9:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Saturday</span>
//                     <span>9:00 AM - 6:00 PM</span>
//                   </div>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
import React from "react";
import { FaUserGraduate, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Interest.css";

export default function Contact() {
  return (
    <section className="intern-cta">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="intern-cta-inner"
      >
        <div className="icon-wrapper">
          <FaUserGraduate className="icon" />
        </div>
        <h2>Interested in an Internship at iGlowLife?</h2>
        <p>
          We're always on the lookout for motivated individuals eager to contribute and learn.
          If you’re considering an internship with us, we’d love to know more about your interests and goals.
          Kindly share your details to help us explore potential opportunities together.
        </p>
        <a
          href="https://forms.gle/RUgFzM5KHEbCo53F6"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Express Your Interest <FaArrowRight />
        </a>
      </motion.div>

      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
    </section>
  );
}
