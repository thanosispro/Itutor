import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import Link from "next/link";
import { Video, BadgeCheck, Calendar } from "lucide-react";

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

export function Section1() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="clip-wave-bottom relative w-full min-h-screen bg-gradient-to-br from-cyan-100 via-teal-100 to-emerald-200 overflow-x-hidden pt-8 sm:pt-10"
      variants={fade}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {/* Background Decorations - Adjusted for mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60" {...floating} />
        <motion.div className="absolute top-20 sm:top-40 right-0 w-40 h-40 sm:w-80 sm:h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50" {...floating2} />
        <motion.div className="absolute bottom-0 left-10 sm:left-40 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40" {...floating} transition={{ delay: 1 }} />

        <motion.div
          className="hidden sm:block absolute top-20 right-32 w-64 h-64 bg-cyan-300 opacity-30 [clip-path:polygon(50%_0%,_100%_100%,_0%_100%)]"
          {...rotateSlow}
        />
        <motion.div
          className="absolute bottom-32 left-5 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 bg-teal-300 opacity-20 [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* HERO CONTENT */}
      <motion.div
        className="relative px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-20 z-10 w-full"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* TEXT SIDE */}
          <motion.div className="space-y-6 sm:space-y-8">
            <motion.h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight" variants={fadeUp}>
              Qualified educators and tutors for your child for nearly any subject
            </motion.h1>

            <motion.button
              className="bg-[#1D3E89] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-teal-700 transition relative overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-teal-600/40 w-full sm:w-auto"
              variants={fadeUp}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href='/subjects' className="relative z-10 w-full h-full block">Find My Tutor</Link>
              <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20" />
            </motion.button>

            <motion.div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 pt-6 sm:pt-8" variants={fadeUp}>
              {[
                { text: 'Live video sessions', icon: Video, color: 'text-yellow-500' },
                { text: 'Certified teachers', icon: BadgeCheck, color: 'text-amber-50' },
                { text: 'Flexible scheduling', icon: Calendar, color: 'text-amber-500' },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <Icon size={18} className={`${item.color}`} />
                    </motion.div>

                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            className="relative h-64 sm:h-96 md:h-[520px] cursor-pointer w-full"
            variants={fadeUp}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/70 to-teal-600/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 backdrop-blur-sm transition-all duration-700 hover:shadow-3xl hover:shadow-teal-900/60">
              <motion.img
                src="/group.webp"
                alt="Classroom"
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* PARTNERS SECTION */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 text-center z-20 px-4 w-full"
        variants={fadeUp}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-teal-400/70 to-transparent w-48 sm:w-80 mx-auto mb-4" />

        <div className="relative inline-block">
          <p
            className="text-xs sm:text-sm font-semibold 
            bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 
            text-white px-6 sm:px-10 py-2 sm:py-3 
            rounded-full shadow-xl tracking-wide whitespace-nowrap"
          >
            Partners with
          </p>

          <div
            className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 
              w-0 h-0 
              border-l-[12px] sm:border-l-[16px] border-l-transparent 
              border-r-[12px] sm:border-r-[16px] border-r-transparent 
              border-t-[14px] sm:border-t-[18px] border-t-teal-300/90"
          />
        </div>
      </motion.div>

    </motion.div>
  );
}