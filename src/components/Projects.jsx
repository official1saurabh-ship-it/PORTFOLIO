import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import projectsData from "../data/projectsData";

const colorMap = {
  "brand-blue": "#3B82F6",
  "brand-orange": "#F97316",
  "brand-pink": "#EC4899",
};

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-brand-orange text-sm font-medium tracking-wider uppercase">
            Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-text">
            Featured{" "}
            <span className="bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-pink bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="space-y-10">
          {projectsData.map((project, i) => {
            const accentColor = colorMap[project.color] || "#3B82F6";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group"
              >
                <div className="glass rounded-3xl overflow-hidden relative hover:bg-brand-card/30 transition-all duration-500">
                  {/* Gradient border effect */}
                  <div
                    className="absolute inset-0 rounded-3xl p-[1px] pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}40, transparent, ${accentColor}20)`,
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "1px",
                    }}
                  />

                  <div className="grid md:grid-cols-5 gap-0 relative z-10">
                    {/* Preview */}
                    <div className="md:col-span-2 min-h-[250px] md:min-h-full">
                      <div
                        className="w-full h-full min-h-[250px] flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`,
                        }}
                      >
                        <span
                          className="text-6xl md:text-8xl font-bold opacity-20 select-none"
                          style={{ color: accentColor }}
                        >
                          {project.image}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${accentColor}, #fff)`,
                          WebkitBackgroundClip: "text",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-brand-text-muted text-base md:text-lg mb-4">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-xs font-medium glass"
                            style={{ color: accentColor }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <ul className="space-y-1.5 mb-6">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="text-sm text-brand-text-muted flex items-center gap-2"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: accentColor }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-shadow duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
                            boxShadow: `0 4px 20px ${accentColor}30`,
                          }}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium glass text-brand-text hover:bg-brand-card/50 transition-all"
                        >
                          <FaGithub /> GitHub
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
