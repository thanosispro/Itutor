'use client';

import Image from 'next/image';

const tutorsData = [
  {
    name: 'John Doe',
    degree: 'M.Sc Mathematics',
    subjects: ['Algebra', 'Calculus', 'Geometry'],
    experience: '5 years teaching',
    timezone: 'GMT+5:45',
    img: '/tutors/tutor1.webp',
  },
  {
    name: 'Jane Smith',
    degree: 'Ph.D Physics',
    subjects: ['Physics', 'Astronomy'],
    experience: '7 years teaching',
    timezone: 'GMT+1:00',
    img: '/tutors/tutor2.webp',
  },
  {
    name: 'Alice Johnson',
    degree: 'M.A History',
    subjects: ['World History', 'Cultural Studies'],
    experience: '4 years teaching',
    timezone: 'GMT+3:00',
    img: '/tutors/tutor3.webp',
  },
  {
    name: 'Robert Brown',
    degree: 'B.Ed English',
    subjects: ['English Grammar', 'Literature'],
    experience: '6 years teaching',
    timezone: 'GMT-5:00',
    img: '/tutors/tutor4.webp',
  },
];

export default function TutorsPage() {
  return (
    <div className="min-h-screen bg-white pt-40 py-20 px-6 md:px-12">
      {/* Title Section */}
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-950 relative inline-block">
          Our Tutors
          <span className="block h-1 w-20 bg-teal-400 mx-auto mt-4 rounded-full animate-pulse"></span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Meet our expert tutors and explore their specialties
        </p>
      </div>

      {/* Tutors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {tutorsData.map((tutor) => (
          <div
            key={tutor.name}
            className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Tutor Image */}
            <Image
              src={tutor.img}
              alt={tutor.name}
              width={400}
              height={400}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Interactive Info Overlay */}
            <div className="absolute inset-0 bg-black/70 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-bold text-white">{tutor.name}</h3>
              <p className="text-gray-200 mt-1">{tutor.degree}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {tutor.subjects.map((subj, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-400/30 text-teal-200 text-xs px-2 py-1 rounded-full"
                  >
                    {subj}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mt-2">{tutor.experience}</p>
              <p className="text-gray-400 mt-1 text-sm">Timezone: {tutor.timezone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
