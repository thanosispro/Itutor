import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-indigo-50 py-12 relative">
      {/* Wave background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full absolute bottom-0">
          <path
            fill="#6366f1"
            fillOpacity="0.1"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.png" alt="Logo" className="h-24 mb-4 object-contain" />
          <p className="font-medium text-indigo-800 text-center md:text-left">Learning Without Limits</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2 text-indigo-900">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-indigo-600 transition">Find a Tutor</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Become a Tutor</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Courses</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Blog</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2 text-indigo-900">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2"><Mail className="w-5 h-5 text-indigo-600"/> innovativelearn.uk@gmail.com</p>
          <p className="flex items-center justify-center md:justify-start gap-2"><Phone className="w-5 h-5 text-indigo-600"/> +977-9803178238</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2 text-indigo-900">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#"><Facebook className="w-6 h-6 text-indigo-600 hover:text-indigo-800"/></a>
            <a href="#"><Twitter className="w-6 h-6 text-indigo-600 hover:text-indigo-800"/></a>
            <a href="#"><Instagram className="w-6 h-6 text-indigo-600 hover:text-indigo-800"/></a>
            <a href="#"><Linkedin className="w-6 h-6 text-indigo-600 hover:text-indigo-800"/></a>
          </div>
        </div>
      </div>

      <div className=" flex-col justify-center border-t gap-20 border-indigo-200 mt-8 pt-4 text-sm text-gray-600 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center justify-center  gap-20 py-3 md:mt-0">
          <Link href="/policy" className="hover:text-indigo-600 transition">Privacy Policy</Link>
          <p>© 2025 Innovative Learn. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
