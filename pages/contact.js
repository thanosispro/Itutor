// components/Contact.jsx
import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  // Page entrance animation (subtle fade + slight upward movement)
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="inline-block p-2 bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 rounded-full shadow-2xl"
>
  <div className="p-4 bg-white rounded-full shadow-inner">
    <Image
      src="/logo.png"
      alt="Innovative Learn Logo"
      width={280}
      height={280}
      className="rounded-full object-contain drop-shadow-md"
      priority
    />
  </div>
</motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-2xl lg:text-3xl text-indigo-700 font-medium"
          >
            Learning Without Limits
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Left: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-12"
          >
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                Get in Touch
              </h2>

              {/* Email */}
              <a
                href="mailto:innovativelearn.uk@gmail.com"
                className="group flex items-center space-x-5 py-6 border-b border-gray-200 last:border-0 hover:bg-indigo-50/50 rounded-xl px-4 -mx-4 transition-colors"
              >
                <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-xl font-medium text-gray-900 mt-1">
                    innovativelearn.uk@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+9779803178238"
                className="group flex items-center space-x-5 py-6 border-b border-gray-200 last:border-0 hover:bg-green-50/50 rounded-xl px-4 -mx-4 transition-colors"
              >
                <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-xl font-medium text-gray-900 mt-1">
                    +977-9803178238
                  </p>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                Follow Us
              </h2>
              <div className="flex justify-center space-x-8">
                {[
                  { Icon: Facebook, label: "Facebook", href: "https://facebook.com/yourpage" },
                  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/yourcompany" },
                  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/yourhandle" },
                ].map(({ Icon, label, href }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-5 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors"
                    aria-label={`Follow us on ${label}`}
                  >
                    <Icon className="w-10 h-10 text-gray-800" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Slogans & Inspiration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-gray-900">
              Why Learn With Us?
            </h2>

            {[
              { title: "Empower Your Future", desc: "Gain skills that open doors to endless opportunities." },
              { title: "Knowledge Beyond Boundaries", desc: "Access world-class education from anywhere." },
              { title: "Innovate, Learn, Grow", desc: "Transform ideas into reality through continuous learning." },
              { title: "Personalized Learning Paths", desc: "Tailored courses designed for your unique goals." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + idx * 0.1 }}
                className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl p-8 border border-indigo-100"
              >
                <h3 className="text-2xl font-bold text-indigo-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-700">
            Ready to take the next step in your learning journey?
          </p>
          <p className="text-lg text-gray-600 mt-4">
            We are here to help you every step of the way.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}