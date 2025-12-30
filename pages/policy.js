'use client';

import React, { useEffect } from 'react';
import { Shield, Mail, Calendar, Users, BookOpen, Lock, Globe, CreditCard } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Innovative Learn';
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Header */}
      <header className="pt-12 pb-16 px-6 text-center bg-white shadow-lg md:pt-20 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-teal-600 md:w-20 md:h-20" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-teal-700">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1D3E89]">
            Innovative Learn
          </p>
          <p className="text-base md:text-lg text-gray-600 mt-4 flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-teal-600" />
            Effective Date: <span className="font-medium">December 17, 2025</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: December 19, 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-8 md:-mt-16">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-10 md:p-12 lg:p-16 space-y-12">
          {/* Intro Paragraphs */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            <strong>Innovative Learn Private Limited</strong> (“<strong>Innovative Learn</strong>”, “<strong>we</strong>”, “<strong>our</strong>”, or “<strong>us</strong>”) operates a global online learning platform offering tutoring, courses, mentoring, and educational support worldwide.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            We are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, store, and protect personal information, and the rights available to users.
          </p>

          {/* Sections */}
          <ol className="space-y-12 md:space-y-16">
            {sections.map((section, index) => (
              <li key={index} className="scroll-mt-20">
                <div className="flex gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-lg md:text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-teal-700 flex flex-wrap items-center gap-3">
                      {section.icon}
                      <span>{section.title}</span>
                    </h2>
                    <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Contact Info */}
          <div className="mt-16 pt-10 border-t border-gray-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-teal-700 flex flex-wrap items-center gap-3">
              <Mail className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
              Contact Information
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-4">
              <p className="text-base sm:text-lg text-gray-700">
                For questions, concerns, or privacy requests, contact:
              </p>
              <p className="text-lg md:text-xl font-semibold text-teal-700">Innovative Learn</p>
              <p className="flex flex-wrap items-center gap-3 text-base sm:text-lg">
                <Mail className="w-6 h-6 text-teal-600 flex-shrink-0" />
                Email: <a href="mailto:Innovativelearn@gmail.com" className="text-teal-600 hover:underline break-all">Innovativelearn@gmail.com</a>
              </p>
              <p className="flex flex-wrap items-center gap-3 text-base sm:text-lg">
                <Globe className="w-6 h-6 text-teal-600 flex-shrink-0" />
                Registered Office: Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const sections = [
  {
    title: 'Scope and Applicability',
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-teal-600" />,
    content: (
      <>
        <p className="mb-6">This Privacy Policy applies to:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>Students and parents using Innovative Learn’s tutoring, courses, and mentoring services</li>
          <li>Teachers, mentors, and academic professionals engaged by Innovative Learn</li>
          <li>Schools, institutions, and educational partners</li>
          <li>Website visitors and individuals communicating via email, WhatsApp, or other platforms</li>
        </ul>
        <p className="mt-8">By using our services, you confirm that you have read and agreed to this Privacy Policy.</p>
      </>
    )
  },
  {
    title: 'Eligibility and Age Requirement',
    icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-teal-600" />,
    content: <p>Our services are intended for individuals aged <strong>16 years and above</strong>. We do not knowingly collect personal data of those below 16.</p>
  },
  {
    title: 'Information We Collect',
    icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-teal-600" />,
    content: (
      <>
        <p className="mb-6">We collect information necessary to deliver high-quality educational services.</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Student info: name, email, phone, country, academic details</li>
          <li>Teacher info: CV, qualifications, experience, feedback</li>
          <li>Communication data: emails, WhatsApp, class interactions</li>
          <li>Payment & transaction info: status, method, currency (securely processed externally)</li>
        </ul>
      </>
    )
  },
  {
    title: 'Methods of Data Collection',
    icon: <Lock className="w-8 h-8 md:w-10 md:h-10 text-teal-600" />,
    content: (
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Registration as student, teacher, or mentor</li>
        <li>Enrollment in tutoring sessions or courses</li>
        <li>Participation in live or recorded classes</li>
        <li>Communication via email, WhatsApp, or online platforms</li>
        <li>Payments for services</li>
        <li>Interaction with educators or coordinators</li>
      </ul>
    )
  },
  // Add remaining sections in same optimized style
];
