import { MessageCircle } from 'lucide-react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">iGlowLife</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering the next generation of professionals through real projects, expert mentorship, and proven career pathways.
            </p>
            <div className="flex space-x-4">
             <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <MessageCircle className="w-6 h-6" />
              </a>
<a href="https://www.facebook.com/iglowlifetrust" className="text-gray-400 hover:text-white transition-colors duration-200">
  <FaFacebook className="w-6 h-6" />
</a>
<a href="https://www.linkedin.com/company/iGlowLife" className="text-gray-400 hover:text-white transition-colors duration-200">
  <FaLinkedin className="w-6 h-6" />
</a>
            </div>
          </div>
          
          
          
          <div>
            <h4 className="text-white font-semibold mb-4">Section</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Benefits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Trainers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
         <p className="text-gray-400 text-sm">
  © 2025 iGlowLife. Powered by Microhub. All rights reserved.
</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
