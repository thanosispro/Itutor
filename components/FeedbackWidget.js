'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING FEEDBACK LABEL */}
      

      {/* FLOATING BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-[#1D3E89] to-teal-700 
                   rounded-full shadow-2xl flex items-center justify-center text-white z-40 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.22, rotate: 10 }}
        whileTap={{ scale: 0.85 }}
      >
        <motion.svg
  className="w-8 h-8"
  fill="currentColor"
  viewBox="0 0 24 24"
  animate={{ y: [0, -6, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" />
</motion.svg>
      </motion.button>

      {/* FEEDBACK MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* MODAL BOX */}
            <motion.div
              className="relative p-8 w-[90%] max-w-md rounded-3xl shadow-2xl 
                         border border-teal-300/50 bg-gradient-to-br 
                         from-cyan-100 via-teal-100 to-emerald-100"
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 16 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <h2 className="text-2xl font-bold text-blue-900 text-center mb-4">
                Send Your Feedback
              </h2>

              {/* TEXTAREA */}
              <textarea
                className="w-full h-32 rounded-xl p-4 bg-white/90 border border-teal-300/40 
                           text-sm outline-none resize-none text-slate-800 shadow-inner"
                placeholder="Tell us how we can improve..."
              />

              {/* SUBMIT BUTTON */}
              <motion.button
                className="w-full mt-5 bg-gradient-to-r from-[#1D3E89] to-blue-500 
                           text-white font-semibold py-3 rounded-full shadow-lg border border-teal-200/50"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 200, 200, .35)" }}
                whileTap={{ scale: 0.9 }}
              >
                Submit
              </motion.button>

              {/* CLOSE BUTTON */}
              <motion.button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-teal-800 hover:text-teal-900"
                whileHover={{ scale: 1.2 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
