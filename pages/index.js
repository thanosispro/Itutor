'use client';

import FeedbackWidget from '@/components/FeedbackWidget';
import { Section1 } from '@/components/Section1';
import { Section3 } from '@/components/Section3';
import ColorTransitionOverlay from '@/components/Transition';

import { motion } from 'framer-motion';

/* =========================================================
   GLOBAL ANIMATION VARIANTS (Reusable for smooth sequencing)
   ========================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' }
  }
};

const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.28,
    }
  }
};

/* =========================================================
   FLOATING BACKGROUND ANIMATIONS
   ========================================================= */

const floating = {
  animate: { y: [0, -30, 0], x: [0, 20, 0] },
  transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
};

const floating2 = {
  animate: { y: [0, 40, 0], x: [0, -30, 0] },
  transition: { duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 },
};

const rotateSlow = {
  animate: { rotate: 360 },
  transition: { duration: 50, repeat: Infinity, ease: 'linear' },
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Navbar – now a reusable component */}
      

      {/* Main content with the same stagger animation */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="w-full pt-16 sm:pt-20 md:pt-24"
      >
        <Section1 />
        <Section3 />
        
        {/* Add more sections here */}
      </motion.div>

      {/* Floating feedback widget */}
      
    </div>
  );
}