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
            className={`p-3 rounded-xl cursor-pointer hover:text-emerald-600 text-cyan-900 '}`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* DROPDOWN */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-lg border">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-3 right-3 p-2 text-white rounded-full bg-[#1D3E89] hover:bg-[#1D3E89]/90"
              >
                <X size={18} />
              </button>

              <div className="py-6 px-6 space-y-3">
                <button className="lg:hidden w-full py-3 rounded-xl font-semibold text-white bg-[#1D3E89] shadow hover:bg-[#1D3E89]/90">
                  <Link href="/subjects">Find Tutors</Link>
                </button>

                <nav className="space-y-2 pt-4 border-t">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-2 rounded-lg hover:bg-gray-100 text-gray-800 font-medium"
                    >
                      {item.label}
                      <item.icon size={20} className="inline-block ml-2 text-sky-500" />
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