import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-brand-surface flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink bg-clip-text text-transparent"
            >
              SKD
            </motion.h1>
            <motion.div
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[3px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink rounded-full mt-4 mx-auto"
              style={{ maxWidth: 120 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
