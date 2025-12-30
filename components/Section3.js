'use client';
import Link from 'next/link';
import React from 'react';

export function Section3() {
  const cards = [
    {
      img: '/icon1.png',
      title: 'Certified',
      desc: 'All of our tutors are required to be either state-certified or qualified to teach their subject.',
    },
    {
      img: '/icon2.png',
      title: 'Affordable',
      desc: 'Most tutors on Innovative Learn charge $25/hour—lower than competitors with less strict standards.',
    },
    {
      img: '/icon3.png',
      title: 'Safe',
      desc: 'Every tutor undergoes full background checks and interviews to ensure safety.',
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
            Experience high-quality learning at an {' '}
            <span className="text-yellow-600"> affordable price</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-800 max-w-3xl mx-auto font-medium">
            Educators on Innovative Learn are part of our company, delivering the best learning experience worldwide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
