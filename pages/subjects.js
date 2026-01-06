'use client';
import { useState, useEffect } from 'react';
import { Search, ChevronDown, X, Check, BookOpen } from 'lucide-react';
import FindTutorModal from '@/components/formModals/FormModal';

const subjectsData = [
  { name: "Mathematics", img: "/subjects/mathematics.webp" },
  { name: "Physics", img: "/subjects/physics.webp" },
  { name: "Computer Science", img: "/subjects/computer-science.webp" },
  { name: "Web Development", img: "/subjects/web-development.webp" },
  { name: "Programming Fundamentals", img: "/subjects/programming-fundamental.webp" },
  { name: "Data Analysis Basics", img: "/subjects/data-analysis-basic.webp" },
  { name: "English (Language & Literature)", img: "/subjects/english.webp" },
  { name: "Economics", img: "/subjects/economics.webp" },
  { name: "Psychology", img: "/subjects/psychology.webp" },
  { name: "Environmental Science", img: "/subjects/environmental-science.webp" }
];


// Shuffle
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function SubjectsPage() {
  const [search, setSearch] = useState('');
  const [subjects, setSubjects] = useState(subjectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timezone, setTimezone] = useState('');
  const [availability, setAvailability] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    setSubjects(shuffleArray(subjectsData));
  }, []);

  const handleBookClass = (subject) => {
    setIsModalOpen(true);
  };

  const filteredSubjects = subjects.filter((subj) =>
    subj.name.toLowerCase().includes(search.toLowerCase())
  );

  // Fixed Dropdown Component
  const Dropdown = ({ label, value, options, onChange, id }) => (
    <div className="relative w-full md:w-auto">
      <button
        type="button"
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        className={`w-full md:w-64 flex justify-between items-center px-5 py-4 rounded-2xl border border-gray-200 bg-white text-base font-medium text-gray-700 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
      >
        <span>{value || label}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openDropdown === id ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu - Fixed z-index and positioning */}
      {openDropdown === id && (
        <div className="absolute left-0 right-0 mt-2 w-full md:w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpenDropdown(null);
              }}
              className="w-full flex items-center justify-between px-5 py-3 text-left text-gray-700 hover:bg-indigo-50 transition-colors duration-150"
            >
              <span className="flex-1 text-left">{option}</span>
              {value === option && <Check className="w-5 h-5 text-indigo-600 ml-3" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br pb-10 from-indigo-50 via-white to-teal-50 pt-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-indigo-950 mb-4">
          Explore Subjects
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover expert tutors in your favorite subjects and book personalized classes tailored to your schedule.
        </p>

        {/* SEARCH + FILTER WRAPPER - Added z-10 to prevent overlay issues */}
        <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-12 max-w-6xl mx-auto z-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
              <input
                type="text"
                placeholder="Search subjects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-lg text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            {/* Timezone Dropdown */}
            <Dropdown
              id="timezone"
              label="Select Timezone"
              value={timezone}
              onChange={setTimezone}
              options={[
                'GMT +5:45 (Nepal)',
                'GMT +5:30 (India)',
                'GMT +1:00 (UK)',
                'GMT -5:00 (US - EST)',
              ]}
            />

            {/* Availability Dropdown */}
            <Dropdown
              id="availability"
              label="Availability"
              value={availability}
              onChange={setAvailability}
              options={[
                'Morning (6am - 12pm)',
                'Afternoon (12pm - 5pm)',
                'Evening (5pm - 10pm)',
                'Night (10pm+)',
              ]}
            />
          </div>
        </div>

        {/* SUBJECT CARDS */}
        {filteredSubjects.length ? (
  <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {filteredSubjects.map((subj) => (
      <div
        key={subj.name}
        className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
      >
        {/* Card Content Wrapper */}
        <div className="p-4 text-center flex flex-col flex-grow">
          {/* Image Section */}
          <div className="relative mx-auto w-32 h-32 mb-6 flex-shrink-0">
            <img
              src={subj.img}
              alt={subj.name}
              className="w-full h-full rounded-full object-cover ring-8 ring-[#1D3E89]/10 group-hover:ring-[#1D3E89]/20 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Title Section - flex-grow ensures this area takes up available space */}
         <div className=" flex flex-row items-center justify-start mb-6 gap-2 w-full px-2">
  {/* The Fix: added shrink-0 and mt-1 for baseline alignment */}
  <BookOpen className="w-6 h-6 text-pink-500 shrink-0 mt-1" />
  
  <h3 className="text-md font-bold text-[#1D3E89]">
    <span className="leading-tight block px-2 text-start">{subj.name}</span>
  </h3>
  
  {/* Invisible placeholder to keep text perfectly centered if desired */}
  <div className="w-6 shrink-0" aria-hidden="true"></div>
</div>

          {/* Action Button - mt-auto pushes it to the bottom of the card */}
          <button
            onClick={() => handleBookClass(subj)}
            className="mt-auto w-full py-4 bg-gradient-to-r from-[#1D3E89] to-[#3A5FAD] text-white font-semibold rounded-2xl shadow-md hover:shadow-xl hover:opacity-90 transform hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            Book Class
          </button>
        </div>
      </div>
    ))}
  </div>
) : (
''
)}

        {/* MODAL */}
        {isModalOpen && (
          <FindTutorModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}