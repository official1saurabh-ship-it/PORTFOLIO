import { motion } from "framer-motion";
import { HiBadgeCheck, HiArrowSmRight } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import { internship } from "../data/experienceData";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-brand-pink text-sm font-medium tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-text">
            Where I've{" "}
            <span className="bg-gradient-to-r from-brand-pink to-brand-orange bg-clip-text text-transparent">
              Grown
            </span>
          </h2>
        </motion.div>

        {internship.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:bg-brand-card/40 transition-all duration-500">
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-pink/5 to-brand-orange/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-sm font-medium text-brand-pink uppercase tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-text mt-1">
                      {item.title}
                    </h3>
                    <p className="text-lg text-brand-text-muted">{item.company}</p>
                  </div>
                  <div className="px-4 py-2 rounded-full glass text-brand-pink text-sm font-medium">
                    Internship
                  </div>
                </div>

                <div className="space-y-3">
                  {item.responsibilities.map((resp, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + j * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <HiBadgeCheck className="text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-brand-text-muted text-base md:text-lg">
                        {resp}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
