import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Assuming lucide-react for icons (install if needed)

const Footer = () => {
  // Softer fade-in and slide-up animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Subtle hover for links
  const linkHover = {
    y: -2,
    transition: { duration: 0.3 },
  };

  return (
    <motion.footer
      className="relative bg-gradient-to-b from-indigo-50 via-white to-indigo-50 py-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Subtle wave background for modern feel */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path
            fill="#6366f1"
            fillOpacity="0.1"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <img
              src="/logo.png"
              alt="Innovative Learn Logo"
              className="h-24 mb-4 object-contain"
            />
            <p className="text-indigo-800 font-medium text-lg text-center md:text-left">
              Learning Without Limits
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="font-semibold text-xl text-indigo-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <motion.a whileHover={linkHover} href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                  Find a Tutor
                </motion.a>
              </li>
              <li>
                <motion.a whileHover={linkHover} href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                  Become a Tutor
                </motion.a>
              </li>
              <li>
                <motion.a whileHover={linkHover} href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                  Courses
                </motion.a>
              </li>
              <li>
                <motion.a whileHover={linkHover} href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                  Blog
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="font-semibold text-xl text-indigo-900 mb-4">Contact Us</h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-5 h-5 text-indigo-600" />
                innovativelearn.uk@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-5 h-5 text-indigo-600" />
                +977-9803178238
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="font-semibold text-xl text-indigo-900 mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-6">
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-indigo-600 hover:text-indigo-800">
                <Facebook className="w-7 h-7" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-indigo-600 hover:text-indigo-800">
                <Twitter className="w-7 h-7" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-indigo-600 hover:text-indigo-800">
                <Instagram className="w-7 h-7" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-indigo-600 hover:text-indigo-800">
                <Linkedin className="w-7 h-7" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-indigo-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600"
        >
          <p>© 2025 Innovative Learn. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;