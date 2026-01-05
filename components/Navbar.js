'use client';

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
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const menuItems = [
    { label: 'Subjects', icon: BookOpen, href: '/subjects' },
    { label: 'Courses', icon: GraduationCap, href: '/courses' },
    { label: 'Our Tutors', icon: Users, href: '/tutors' },
    { label: 'About Us', icon: Info, href: '/about' },
    { label: 'Privacy Policy', icon: Shield, href: '/policy' },
    { label: 'Contact Us', icon: Mail, href: '/contact' },
  ];

  return (
    <header
  className={`fixed  top-0 left-0 w-full z-50 transition-all duration-300
    ${
      scrolled
        ? 'bg-cyan-200 shadow-md py-2'
        : 'bg-cyan-200 shadow py-3'
    }`}
>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {/* LOGO */}
        <div>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className={`object-contain transition-all duration-300 ${
                scrolled ? 'h-14 w-36 sm:h-16 sm:w-40' : 'h-16 w-44 sm:h-24 sm:w-60'
              }`}
            />
          </Link>
        </div>

        {/* Desktop slogan */}
        <div className="hidden lg:block text-3xl font-bold text-[#224E93]">
          Learn Innovatively
        </div>

        <div className="flex items-center gap-3 relative" ref={dropdownRef}>
          {/* Desktop Find Tutors */}
          <button
            className={`hidden md:block px-8 py-3 rounded-full font-bold text-lg shadow
              ${scrolled ? 'bg-[#1D3E89] text-white hover:bg-[#1D3E89]/90' : 'bg-[#1D3E89] text-white hover:bg-[#1D3E89]/90'}`}
          >
            <Link href="/subjects">Find Tutors</Link>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className={`p-3 rounded-xl cursor-pointer hover:text-emerald-600   text-cyan-900 '}`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* DROPDOWN */}
          {isMenuOpen && (
  <div className="absolute top-full right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
    <div className="py-6 px-5 flex flex-col items-center">
      
      {/* Header Section with Blue Line */}
      <div className="flex items-center w-full mb-2">
        <div className="h-1 flex-grow bg-[#1D3E89] rounded-full"></div>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="flex-shrink-0 text-white rounded-full bg-[#1D3E89] hover:bg-[#1D3E89]/90 p-1.5 transition-transform active:scale-90"
        >
          <X size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* Primary Action Button */}
      <Link href="/subjects" className="w-full">
        <button className="lg:hidden w-full py-3.5 rounded-xl font-bold text-white bg-[#1D3E89] shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
          Find Tutors
        </button>
      </Link>

      {/* Navigation Links */}
      <nav className="w-full mt-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between w-full py-3.5 px-4 rounded-xl text-gray-700 font-semibold hover:bg-gray-200 hover:text-[#1D3E89] transition-colors group"
          >
            <span className="text-base">{item.label}</span>
            <item.icon 
              size={20} 
              className="text-sky-500 group-hover:scale-110 transition-transform" 
            />
          </Link>
        ))}
      </nav>
    </div>
  </div>
)}
        </div>
      </div>
    </header>
  );
};

export default Navbar;