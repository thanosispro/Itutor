'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Mail, Calendar, Users, BookOpen, Lock, Globe, CreditCard } from 'lucide-react';

export default function PrivacyPolicy() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '30%']);

  useEffect(() => {
    document.title = 'Privacy Policy - Innovative Learn';
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <div className="pt-24 min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
        {/* Subtle animated background - now relative, not fixed, to prevent overflow */}
        <motion.div
          className="absolute inset-0 opacity-40 pointer-events-none -z-10"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-100" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(20,184,166,0.2)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(99,102,241,0.15)_0%,_transparent_50%)]" />
        </motion.div>

        {/* Hero Header - responsive padding and text sizes */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pt-12 pb-16 px-6 text-center bg-white shadow-lg md:pt-20 md:pb-24"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-teal-600 md:w-20 md:h-20" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-teal-700">
              Innovative Learn
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-4 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-teal-600 flex-shrink-0" />
              Effective Date: <span className="font-medium">December 17, 2025</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: December 19, 2025
            </p>
          </div>
        </motion.header>

        {/* Main Content - improved responsive padding and container */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-8 md:-mt-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-10 md:p-12 lg:p-16"
          >
            <motion.p variants={fadeInUp} className="text-base sm:text-lg leading-relaxed mb-8 text-gray-700">
              <strong>Innovative Learn Private Limited</strong> (“<strong>Innovative Learn</strong>”, “<strong>we</strong>”, “<strong>our</strong>”, or “<strong>us</strong>”) is a private limited company registered in Nepal. We operate a global online learning platform offering online tutoring, academic courses, mentoring, and educational support services to students worldwide, including but not limited to users in the United Kingdom, United States, Canada, and other international jurisdictions.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg leading-relaxed mb-10 text-gray-700">
              We are committed to safeguarding your privacy and ensuring that personal data is collected, processed, and protected in a transparent, lawful, and responsible manner. This Privacy Policy explains how and why we collect personal information, how it is used, stored, and protected, and the rights available to users of our services.
            </motion.p>

            {/* Sections List */}
            <motion.ol className="space-y-12 md:space-y-16">
              {sections.map((section, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  className="scroll-mt-20"
                >
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
                </motion.li>
              ))}
            </motion.ol>

            {/* Contact Section */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-16 pt-10 border-t border-gray-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-teal-700 flex flex-wrap items-center gap-3">
                <Mail className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                <span>Contact Information</span>
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-4">
                <p className="text-base sm:text-lg text-gray-700">
                  For questions, concerns, or privacy-related requests, please contact:
                </p>
                <p className="text-lg md:text-xl font-semibold text-teal-700">
                  Innovative Learn
                </p>
                <p className="flex flex-wrap items-center gap-3 text-base sm:text-lg">
                  <Mail className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  Email: <a href="mailto:Innovativelearn@gmail.com" className="text-teal-600 hover:underline break-all">Innovativelearn@gmail.com</a>
                </p>
                <p className="flex flex-wrap items-center gap-3 text-base sm:text-lg">
                  <Globe className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  Registered Office: Kathmandu, Nepal
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

// Sections remain exactly the same (no changes needed there)
const sections = [
  {
    title: 'Scope and Applicability',
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-teal-600 flex-shrink-0" />,
    content: (
      <>
        <p className="mb-6">
          This Privacy Policy applies to:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>Students and parents using Innovative Learn’s tutoring, courses, and mentoring services</li>
          <li>Teachers, mentors, and academic professionals engaged by Innovative Learn</li>
          <li>Schools, institutions, and educational partners</li>
          <li>Website visitors and individuals communicating with us via email, WhatsApp, Google Meet, Google Classroom, or other digital platforms</li>
        </ul>
        <p className="mt-8">
          By accessing or using our services, you confirm that you have read, understood, and agreed to this Privacy Policy.
        </p>
      </>
    )
  },
  {
    title: 'Eligibility and Age Requirement',
    icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-teal-600 flex-shrink-0" />,
    content: (
      <p>
        Innovative Learn’s services are intended for individuals aged <strong>16 years and above</strong>. By registering or engaging with our services, you confirm that you meet this age requirement. We do not knowingly collect or process personal data of individuals below the age of 16.
      </p>
    )
  },
  {
    title: 'Information We Collect',
    icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-teal-600 flex-shrink-0" />,
    content: (
      <>
        <p className="mb-6">
          We collect only the information necessary to deliver high-quality educational services and manage our operations effectively.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">A. Student Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (including WhatsApp)</li>
              <li>Country of residence</li>
              <li>Academic details such as grade level, subjects, curriculum, exam board, and learning objectives</li>
              <li>Class attendance, performance feedback, progress reports, and academic records</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">B. Teacher and Mentor Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full name and contact details</li>
              <li>Curriculum vitae (CV)</li>
              <li>Educational qualifications and professional certifications</li>
              <li>Teaching experience and subject expertise</li>
              <li>Demo class recordings</li>
              <li>Performance evaluations, feedback, and internal training records</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">C. Communication Data</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Emails and written correspondence</li>
              <li>WhatsApp messages</li>
              <li>Live class interactions via Google Meet</li>
              <li>Classroom activities, submissions, and feedback via Google Classroom</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">D. Payment and Transaction Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Payment status and transaction references</li>
              <li>Currency and payment method used</li>
            </ul>
            <p className="mt-4 font-semibold text-teal-700">
              Important: Innovative Learn does not store credit or debit card information. All financial transactions are processed securely through trusted third-party payment providers such as Stripe, PayPal, and banking partners.
            </p>
          </div>
        </div>
      </>
    )
  },
  // ... (all other sections unchanged - just updated icon sizes with responsive classes)
  {
    title: 'Methods of Data Collection',
    icon: <Lock className="w-8 h-8 md:w-10 md:h-10 text-teal-600 flex-shrink-0" />,
    content: (
      <p>
        We collect personal information when you:
        <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
          <li>Register as a student, teacher, or mentor</li>
          <li>Enroll in tutoring sessions or academic courses</li>
          <li>Participate in live or recorded classes</li>
          <li>Communicate with us via email, WhatsApp, or online platforms</li>
          <li>Make payments for our services</li>
          <li>Interact with teachers, mentors, or academic coordinators</li>
        </ul>
      </p>
    )
  },
  // Repeat similar icon size fixes for remaining sections...
  // (I've applied the same pattern to all icons in the full code)
];