'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown, X, Check, Code2, BookOpen } from 'lucide-react';
import FindTutorModal from '@/components/formModals/FormModal';
import InstituteModal from '@/components/formModals/instituteModal'; // New Modal for Personal or Institute Selection
import CourseBookingChoiceModal from '@/components/formModals/choiceModal';
const coursesData = [
  { name: "Web Development", img: "/courses/web-development.webp" },
  { name: "App Development", img: "/courses/app-development.webp" },
  { name: "Game Development", img: "/courses/game-development.webp" },
  { name: "Python Programming", img: "/courses/python-programming.webp" },
  { name: "Data Science", img: "/courses/data-science.webp" },
  { name: "AI Fundamentals", img: "/courses/ai-fundamentals.webp" },
  { name: "Cybersecurity", img: "/courses/cyber-security.webp" },

  { name: "Graphic Design", img: "/courses/graphic-design.webp" },
  { name: "UI/UX Design", img: "/courses/ui-ux-design.webp" },
  { name: "Video Editing", img: "/courses/video-editing.webp" },]

// Shuffle array for dynamic feel on each visit
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState(coursesData);
  const [isModalOpen, setIsModalOpen] = useState(false); // Personal Registration Modal state
  const [isInstituteModalOpen, setIsInstituteModalOpen] = useState(false); // Institute Registration Modal state
  const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false); // Modal for selecting Personal or Institute
  const [timezone, setTimezone] = useState('');
  const [availability, setAvailability] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    setCourses(shuffleArray(coursesData));
  }, []);

  const handleBookClass = () => {
    setIsChoiceModalOpen(true); // Show the modal to choose Personal or Institute
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle the choice selection (Personal or Institute)
  const handleChoiceSelection = (type) => {
    setIsChoiceModalOpen(false); // Close the choice modal
    if (type === 'personal') {
      setIsModalOpen(true); // Open the personal registration modal
    } else {
      setIsInstituteModalOpen(true); // Open the institute registration modal
    }
  };

  // Dropdown component
  const Dropdown = ({ label, value, options, onChange, id }) => (
    <div className="relative w-full md:w-64">
      <button
        type="button"
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        className="w-full flex justify-between items-center px-6 py-4 rounded-2xl border border-gray-300 bg-white text-base font-medium text-gray-800 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300"
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>{value || label}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            openDropdown === id ? 'rotate-180' : ''
          }`}
        />
      </button>

      {openDropdown === id && (
        <div className="absolute left-0 right-0 mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-50">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpenDropdown(null);
              }}
              className="w-full flex items-center justify-between px-6 py-3.5 text-left text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200"
            >
              <span>{option}</span>
              {value === option && <Check className="w-5 h-5 text-indigo-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-48 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-800 mb-6">
            Explore Expert-Led Courses
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Accelerate your career with industry-relevant skills taught by experienced professionals. 
            From cutting-edge AI to full-stack development — your growth starts here.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 text-lg text-indigo-700 font-medium">
            <BookOpen className="w-6 h-6" />
            <span>{coursesData.length} Premium Courses Available</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="relative bg-white/90 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-10 max-w-6xl mx-auto -mt-8 z-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
              <input
                type="text"
                placeholder="Search by course name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-16 pr-14 py-5 bg-gray-50/70 border border-gray-300 rounded-2xl text-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 shadow-inner"
              />
            </div>

            {/* Filters */}
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

            <Dropdown
              id="availability"
              label="Preferred Time"
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

        {/* Courses Grid */}
        <div className="mt-10">
  {filteredCourses.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
      {filteredCourses.map((course) => (
        <div
          key={course.name}
          className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 h-full border border-gray-100"
        >
          {/* Image Container - Fixed Aspect Ratio */}
          <div className="relative w-full aspect-square overflow-hidden flex-shrink-0">
            <img
              src={course.img}
              alt={course.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
              <p className="text-white text-sm sm:text-base font-semibold">
                Start Learning Today
              </p>
            </div>
          </div>

          {/* Card Content - flex-grow makes this section expand to fill space */}
          <div className="p-5 sm:p-6 text-center flex flex-col flex-grow">
            {/* Title Section - Nested flex-grow keeps title centered even if it wraps */}
            <div className="flex-grow flex items-center justify-center mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center justify-center gap-2 leading-tight">
                <Code2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                {course.name}
              </h3>
            </div>

            {/* Action Button - mt-auto ensures it sits at the very bottom */}
            <button
              onClick={handleBookClass}
              className="mt-auto w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    /* Empty State */
    <div className="text-center py-14 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-dashed border-gray-200 shadow-sm">
      <div className="max-w-sm mx-auto px-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-indigo-50 rounded-full flex items-center justify-center">
          <Search className="w-10 h-10 text-indigo-300" />
        </div>
        <h3 className="text-2xl font-extrabold text-gray-800 mb-2">No Courses Found</h3>
        <p className="text-gray-500 text-base">
          Try adjusting your search term or filters to find what you're looking for.
        </p>
      </div>
    </div>
  )}
</div>


        {/* Modals */}
        {isChoiceModalOpen && (
          <CourseBookingChoiceModal
            isOpen={isChoiceModalOpen}
            onClose={() => setIsChoiceModalOpen(false)}
            onSelect={handleChoiceSelection}
          />
        )}

        {isModalOpen && (
          <FindTutorModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        {isInstituteModalOpen && (
          <InstituteModal
            isOpen={isInstituteModalOpen}
            onClose={() => setIsInstituteModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
