import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-indigo-50 pt-16 pb-8 relative overflow-hidden">
      {/* Wave background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full absolute bottom-0 transform scale-110">
          <path
            fill="#6366f1"
            fillOpacity="0.1"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-gray-700">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src="/logo.png" alt="Logo" className="h-20 w-auto object-contain" />
            <p className="font-semibold text-indigo-900 tracking-tight text-center md:text-left">
              Learning Without Limits
            </p>
            <p className="text-sm text-gray-500 max-w-xs text-center md:text-left leading-relaxed">
              Empowering students globally with expert-led courses and personalized tutoring.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-6 text-indigo-950">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href='/tutors' className="hover:text-indigo-600 transition-colors duration-200">Find a Tutor</Link></li>
              <li><Link href='/courses' className="hover:text-indigo-600 transition-colors duration-200">Courses</Link></li>
              <li><Link href='/subjects' className="hover:text-indigo-600 transition-colors duration-200">Subjects</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-6 text-indigo-950">Get in Touch</h3>
            <div className="space-y-4">
              <a href="mailto:innovativelearn.uk@gmail.com" className="flex items-center justify-center md:justify-start gap-3 group">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-indigo-600 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-indigo-600 group-hover:text-white"/>
                </div>
                <span className="text-sm break-all">innovativelearn.uk@gmail.com</span>
              </a>
              <a href="tel:+9779705459146" className="flex items-center justify-center md:justify-start gap-3 group">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-indigo-600 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-indigo-600 group-hover:text-white"/>
                </div>
                <span className="text-sm">+977-9705459146</span>
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-6 text-indigo-950">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-3">
              {[
                { Icon: Facebook, link: "https://www.facebook.com/profile.php?id=61585764614541" },
                { Icon: Instagram, link: "https://www.instagram.com/innovativelearn" },
                // { Icon: Twitter, link: "#" },
                { Icon: Linkedin, link: "https://www.linkedin.com/company/110929226/admin/dashboard" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-sm text-indigo-600 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <social.Icon className="w-5 h-5"/>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-indigo-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
            <p>© {new Date().getFullYear()} Innovative Learn. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <Link href="/policy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;