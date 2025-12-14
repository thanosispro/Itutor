// import all
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React from "react";

const fadeUp3 = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const fade3 = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2 } },
};

const float1 = {
  animate: { y: [-20, 30, -20], rotate: [0, 360] },
  transition: { duration: 18, repeat: Infinity, ease: 'linear' },
};

const float2 = {
  animate: { y: [30, -40, 30], x: [-30, 40, -30] },
  transition: { duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 },
};

const pulseGlow = {
  animate: { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
};

export function Section3() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const cards = [
    { img: '/icon1.png', title: 'Certified', desc: 'All of our tutors are required to be either state-certified or qualified to teach their subject.' },
    { img: '/icon2.png', title: 'Affordable', desc: 'Most tutors on Innovative Learn charge $25/hour—lower than competitors with less strict standards.' },
    { img: '/icon3.png', title: 'Safe', desc: 'Every tutor undergoes full background checks and interviews to ensure safety.' },
  ];

  return (
    <motion.section
      ref={ref}
      className="pt-52 relative clip-wave-top w-full min-h-screen bg-gradient-to-br from-amber-200 via-yellow-50 to-teal-50 overflow-x-hidden py-16 sm:py-24 md:py-32"
      variants={fade3}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {/* Animated Background Geometry - Adjusted for mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large glowing circle */}
        <motion.div
          className="absolute top-5 left-5 sm:top-10 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-300/30 rounded-full blur-3xl"
          {...pulseGlow}
        />

        {/* Floating triangle */}
        <motion.div
          className="hidden sm:block absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500 opacity-40 clip-triangle"
          {...float1}
        />

        {/* Ellipse */}
        <motion.div
          className="absolute bottom-40 left-5 sm:left-32 w-48 h-40 sm:w-80 sm:h-56 bg-gradient-to-tr from-teal-300 to-cyan-400 opacity-30 rounded-full blur-xl"
          {...float2}
        />

        {/* Soft rotating circle */}
        <motion.div
          className="absolute top-1/2 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-bl from-yellow-400/50 to-amber-600/30 rounded-full blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        {/* Small floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full opacity-60"
            style={{
              top: `${20 + i * 15}%`,
              left: i % 2 === 0 ? '5%' : 'auto',
              right: i % 2 === 0 ? 'auto' : '5%',
            }}
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}
      </div>

      {/* Custom CSS for triangle clip-path */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20" variants={fadeUp3}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight px-2">
            Experience high quality learning <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              at an affordable price.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-900 max-w-4xl mx-auto font-medium px-2">
            Educators on Innovative Learn are part of our company, delivering the best learning experience worldwide.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.25, duration: 0.8 }}
              variants={fadeUp3}
              className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl sm:shadow-2xl 
                         border border-amber-100/50 overflow-hidden duration-500 h-full flex flex-col justify-center"
            >
              <div className="relative z-10">
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <div className="p-0 rounded-2xl">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg"
                    />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-3 sm:mb-5 text-center">
                  {card.title}
                </h3>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}