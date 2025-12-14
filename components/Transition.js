import { motion } from "framer-motion";
export default function ColorTransitionOverlay() {
  return (
   <motion.div
  className="h-48 w-full"
  animate={{
    background: [
      "linear-gradient(to bottom, #a7f3d0, #fef9c3)",
      "linear-gradient(to bottom, #99f6e4, #fde68a)",
      "linear-gradient(to bottom, #a7f3d0, #fef9c3)",
    ]
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
  );
}