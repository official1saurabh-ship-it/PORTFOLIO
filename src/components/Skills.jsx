import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skillsData } from "../data/skillsData";

const colorMap = {
  "brand-orange": { bg: "rgba(249,115,22,0.15)", bar: "#F97316", text: "text-brand-orange" },
  "brand-blue": { bg: "rgba(59,130,246,0.15)", bar: "#3B82F6", text: "text-brand-blue" },
  "brand-yellow": { bg: "rgba(234,179,8,0.15)", bar: "#EAB308", text: "text-brand-yellow" },
  "brand-purple": { bg: "rgba(168,85,247,0.15)", bar: "#A855F7", text: "text-brand-purple" },
  "brand-green": { bg: "rgba(34,197,94,0.15)", bar: "#22C55E", text: "text-brand-green" },
  "brand-pink": { bg: "rgba(236,72,153,0.15)", bar: "#EC4899", text: "text-brand-pink" },
  "brand-text": { bg: "rgba(255,255,255,0.1)", bar: "#FFFFFF", text: "text-brand-text" },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-brand-purple text-sm font-medium tracking-wider uppercase">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-text">
            My{" "}
            <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
              Toolbox
            </span>
          </h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((skill, i) => {
            const c = colorMap[skill.color] || colorMap["brand-blue"];
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 hover:bg-brand-card/50 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: c.bg }}
                  >
                    <Icon style={{ color: c.bar }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-text">
                      {skill.name}
                    </h3>
                    <span className={`text-xs ${c.text}`}>{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full h-[4px] rounded-full bg-brand-surface overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: c.bar }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
