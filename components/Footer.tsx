import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-blue p-1.5 rounded-lg text-white">
                <GraduationCap size={20} />
              </div>
              <span className="text-xl font-bold">OurSchool.it</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering students with the skills they need for a brighter future. Join our community of lifelong learners today.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">All Courses</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Methodology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Courses</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">English for Kids</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IELTS Preparation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Basic Computer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advanced Speaking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>Via Sant'Antonio 9, Trento-38122 Italy</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>+39 328 005 1253</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>labu4bd@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} OurSchool.it. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;