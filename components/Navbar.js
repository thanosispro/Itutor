'use client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  BookOpen,
  GraduationCap,
  Users,
  Shield,
  Info,
  Mail,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import FindTutorModal from './FormModal';
import Link from 'next/link'; // Import Link component

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 // modal state
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) =>
      e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const menuItems = [
    { label: 'Subjects', icon: BookOpen, href: '/subjects', color: 'from-purple-500 to-pink-500' },
    { label: 'Courses', icon: GraduationCap, href: '#courses', color: 'from-blue-500 to-cyan-500' },
    
    { label: 'Our Tutors', icon: Users, href: '/tutors', color: 'from-emerald-500 to-teal-500' },
    { label: 'About Us', icon: Info, href: '/about', color: 'from-orange-500 to-red-500' },
    { label: 'Privacy Policy', icon: Shield, href: '/policy', color: 'from-indigo-500 to-purple-500' },
    { label: 'Contact Us', icon: Mail, href: '#contact', color: 'from-rose-500 to-pink-600' },
  ];

  return (
    <>
      {/* HEADER NAV */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-gradient-to-r from-cyan-200 via-blue-100 to-sky-700 backdrop-blur-xl shadow-xl py-2'
            : 'bg-gradient-to-r from-white via-cyan-100 to-cyan-600 shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          {/* LOGO */}
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}>
            <Link href={'/'}>
            <img
              src="/logo.png"
              alt="Logo"
              
              className={`object-contain transition-all duration-500 ${
                scrolled ? 'h-16 w-40' : 'h-22 w-52 md:h-28 md:w-64'
              }`}
              
            />
            </Link>
          </motion.div>

          {/* Desktop slogan */}
          <div className="hidden lg:block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">
            Learn Innovatively
          </div>

          {/* Desktop Find Tutors + Mobile Menu button */}
          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            {/* Desktop Find Tutors */}
            <motion.button className={`hidden md:block px-8 py-3 rounded-full font-bold text-lg shadow-xl transition-all cursor-pointer ${
                scrolled
                  ? 'bg-[#1D3E89] text-white  hover:bg-white/30'
                  : 'bg-[#1D3E89] text-white  hover:bg-white hover:text-slate-700'
              }`}
              whileHover={{ scale: 1.08 }}
               // open modal
            >
              <Link className='w-full h-full flex justify-center items-center' href="/subjects">Find Tutors</Link></motion.button>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`p-3 rounded-xl relative z-10 ${
                scrolled ? 'text-white hover:bg-white/20' : 'text-cyan-900 hover:bg-white/50'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.button>

            {/* DROPDOWN MENU */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="absolute top-full right-0 mt-3 w-64 bg-white/97 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition z-10"
                  >
                    <X size={20} className="text-gray-700" />
                  </button>

                  <div className="py-6 px-6 space-y-3">
                    {/* Mobile Find Tutors Button */}
                    <motion.button
                      className="lg:hidden w-full py-3 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg"
                      whileHover={{ scale: 1.03 }}
                      
                    >
                      <Link className='w-full h-full flex justify-center items-center' href="/subjects">Find Tutors</Link>
                    </motion.button>

                    {/* Menu Items */}
                    <nav className="space-y-2 pt-4 border-t border-gray-200">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-gray-100 active:scale-[0.98] transition text-gray-800 font-medium text-lg"
                          >
                            <span className="text-cyan-600">•</span>
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Modal */}
    </>
  );
};

export default Navbar;
