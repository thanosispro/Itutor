import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  BookOpenCheck,
  Sparkles,
  Lightbulb,
  Rocket,
  School,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutUs() {
  return (
    <div className="pt-36 min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 md:px-20 py-16 text-gray-800">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-700 drop-shadow-sm">
          About Us
        </h1>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          Empowering global learning with modern technology and world-class educators.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="max-w-5xl mx-auto space-y-10 text-lg leading-relaxed"
      >
        {/* 1 */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-6 rounded-2xl shadow-md flex gap-5 items-start border border-blue-100"
        >
          <Globe2 className="w-10 h-10 text-blue-600" />
          <p>
            At <strong>Innovative Learn</strong>, we believe education should travel beyond
            borders. We connect talented teachers with students across the UK, USA,
            Canada, and more — all without the jet lag.
          </p>
        </motion.div>

        {/* 2 */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-6 rounded-2xl shadow-md flex gap-5 items-start border border-blue-100"
        >
          <BookOpenCheck className="w-10 h-10 text-blue-600" />
          <p>
            We offer online tutoring, structured courses, mentoring, and academic
            support — helping students not just pass exams but truly understand what
            they’re learning. Yes… even Physics.
          </p>
        </motion.div>

        {/* 3 */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-6 rounded-2xl shadow-md flex gap-5 items-start border border-blue-100"
        >
          <Users className="w-10 h-10 text-blue-600" />
          <p>
            Our services include 1-to-1 and small group tutoring in Math, Physics,
            Chemistry, plus pre-recorded lessons, live batches, crash courses, and
            tailored academic mentoring.
          </p>
        </motion.div>

        {/* 4 */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-6 rounded-2xl shadow-md flex gap-5 items-start border border-blue-100"
        >
          <Lightbulb className="w-10 h-10 text-yellow-500" />
          <p>
            We know that learning is not one-size-fits-all. Some students need
            clarity, some need confidence, and others just need a concept explained
            differently. That’s where mentoring and guidance matter.
          </p>
        </motion.div>

        {/* 5 */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-6 rounded-2xl shadow-md flex gap-5 items-start border border-blue-100"
        >
          <School className="w-10 h-10 text-green-600" />
          <p>
            Our mission is to build a global learning bridge — empowering teachers
            worldwide and delivering meaningful results for students across the globe.
          </p>
        </motion.div>

        {/* 6 */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-6 rounded-2xl shadow-md flex gap-5 items-start border border-blue-100"
        >
          <Sparkles className="w-10 h-10 text-purple-600" />
          <p>
            By combining modern technology with skilled educators, we provide an
            effective, flexible, and friendly learning experience that feels nothing
            like traditional tutoring.
          </p>
        </motion.div>

        {/* 7 */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-6 rounded-2xl shadow-md flex gap-5 items-start border border-blue-100"
        >
          <Rocket className="w-10 h-10 text-red-500" />
          <p>
            Innovative Learn is more than online classes — it’s about building
            confidence, opening doors, and proving that quality education doesn’t
            need to be complicated or expensive. It just needs to be done right.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}