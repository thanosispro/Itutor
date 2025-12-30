'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const subjects = [
  { id: '1', name: 'Mathematics', description: 'Master calculus and algebra.', imageUrl: '/subjects/math.webp' },
  { id: '2', name: 'Physics', description: 'Explore mechanics and electromagnetism.', imageUrl: '/subjects/game.webp' },
  { id: '3', name: 'Chemistry', description: 'Understand reactions and bonding.', imageUrl: '/subjects/science.webp' },
];

const SLIDE_DURATION = 0.6;
const AUTO_SLIDE_INTERVAL = 3000;

const SubjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const timerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const extendedSubjects = [subjects[subjects.length - 1], ...subjects, subjects[0]];

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);

  const handleAnimationComplete = () => {
    if (currentIndex === extendedSubjects.length - 1) {
      setIsAnimating(false);
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (shouldReduceMotion) return; // Disable auto-slide for reduced motion / mobile

    const startAutoSlide = () => { timerRef.current = setInterval(nextSlide, AUTO_SLIDE_INTERVAL); };
    const stopAutoSlide = () => { if (timerRef.current) clearInterval(timerRef.current); };

    const handleVisibilityChange = () => {
      document.hidden ? stopAutoSlide() : startAutoSlide();
    };

    startAutoSlide();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopAutoSlide();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="relative min-h-[420px] md:h-[500px]">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={isAnimating ? { duration: SLIDE_DURATION, ease: 'easeInOut' } : { duration: 0 }}
          onAnimationComplete={handleAnimationComplete}
        >
          {extendedSubjects.map((subject, index) => (
            <div key={`${subject.id}-${index}`} className="min-w-full h-full flex flex-col md:flex-row items-center justify-center px-4 py-6 md:px-8 md:py-12 gap-6 md:gap-10">
              <div className="w-full max-w-[280px] md:max-w-[500px]">
                <Image src={subject.imageUrl} alt={subject.name} width={500} height={400} className="rounded-xl object-cover shadow-lg w-full h-auto" priority={index === 1} />
              </div>
              <div className="text-center md:text-left max-w-md">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{subject.name}</h2>
                <p className="text-sm md:text-lg text-gray-600 mb-6">{subject.description}</p>
                
                <Link href={'/courses'} className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl text-sm md:text-base">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {subjects.map((_, idx) => (
          <div key={idx} className={`h-2 rounded-full transition-all ${idx === (currentIndex - 1) % subjects.length ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2'}`} />
        ))}
      </div>
    </div>
  );
};

export default SubjectCarousel;
