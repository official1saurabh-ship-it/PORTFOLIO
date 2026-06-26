import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionWrapper({ children, className = "", id, gradient }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen px-[5vw] py-20 md:py-28 flex items-center ${className}`}
    >
      {children}
    </motion.section>
  );
}
