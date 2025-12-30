'use client';

import Link from 'next/link';
import { Video, BadgeCheck, Calendar } from 'lucide-react';
import React from 'react';

export function Section1() {
  return (
    <div className="relative w-full h-auto py-20 bg-tras overflow-x-hidden pt-8 sm:pt-10">
      {/* Hero Content */}
      <div className="relative px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-20 z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Column */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#0069a5]">
  <span className="text-[#003c8b]">Qualified educators</span> and tutors for your child for nearly any subject
</h1>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/subjects"
                className="inline-block bg-[#1D3E89] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#1D3E89]/90 transition shadow-lg w-full sm:w-auto text-center"
              >
                Find My Tutor
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 pt-6 sm:pt-8">
              {[
                { text: 'Live video sessions', icon: Video, color: 'text-sky-500' },
                { text: 'Certified teachers', icon: BadgeCheck, color: 'text-emerald-500' },
                { text: 'Flexible scheduling', icon: Calendar, color: 'text-blue-500' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <Icon size={18} className={item.color} />
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative h-64 sm:h-96 md:h-[520px] w-full">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/group.webp"
                alt="Classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}