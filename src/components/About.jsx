import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { HiAcademicCap, HiBriefcase, HiCode, HiHeart } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";

function Counter({ target, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-brand-text">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-brand-text-muted mt-1">{label}</div>
    </div>
  );
}

const timeline = [
  {
    year: "2021 - 2025",
    title: "B.Tech - Computer Science and Engineering",
    subtitle: "NIET, Greater Noida",
    desc: "Completed a comprehensive degree in Computer Science and Engineering with focus on software development, data structures, and modern web technologies.",
    icon: HiAcademicCap,
    color: "#3B82F6",
    border: "border-brand-blue",
    textColor: "text-brand-blue",
  },
  {
    year: "2019 - 2020",
    title: "Higher Secondary (12th)",
    subtitle: "Divine Public School",
    desc: "Science stream with focus on mathematics and computer science.",
    icon: HiAcademicCap,
    color: "#A855F7",
    border: "border-brand-purple",
    textColor: "text-brand-purple",
  },
  {
    year: "April 2026 - Jun 2026",
    title: "Web Development Intern",
    subtitle: "Biosoftech Solution Private Limited",
    desc: "Built responsive apps with React & Tailwind CSS. Integrated REST APIs and optimized performance.",
    icon: HiBriefcase,
    color: "#EC4899",
    border: "border-brand-pink",
    textColor: "text-brand-pink",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-brand-blue text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-text">
            Passionate About{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Building
            </span>{" "}
            Great Web Experiences
          </h2>
        </motion.div>

        {/* Intro + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-brand-text-muted leading-relaxed">
              I'm a passionate Full Stack Developer  with a strong
              foundation in building modern, responsive, and user-friendly web
              applications. I love turning complex problems into simple, beautiful,
              and intuitive solutions.
            </p>
            <p className="text-lg md:text-xl text-brand-text-muted leading-relaxed">
              Completed my B.Tech, I'm constantly exploring new technologies
              and frameworks to stay at the cutting edge of web development.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="glass px-4 py-2 rounded-lg text-brand-text-muted text-sm flex items-center gap-2">
                <HiCode className="text-brand-blue" /> 1+ Year Coding
              </span>
              <span className="glass px-4 py-2 rounded-lg text-brand-text-muted text-sm flex items-center gap-2">
                <HiHeart className="text-brand-pink" /> Open Source
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass p-1 max-h-[420px]">
              <img
                src="/profile.png"
                alt="Saurabh Kumar Dubey"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { target: 12, suffix: "+", label: "Projects Completed" },
            { target: 6, suffix: "+", label: "Technologies" },
            { target: 3, suffix: "", label: "Certifications" },
            { target: 500, suffix: "+", label: "Hours of Coding" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 hover:bg-brand-card/50 transition-colors"
            >
              <Counter {...stat} />
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-brand-text text-center">
            My Journey
          </h3>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-card" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex items-start gap-6 pl-10 md:pl-0"
                >
                  {/* Desktop */}
                  <div className="hidden md:flex w-full items-start gap-6">
                    <div className="flex-1 text-right">
                      <div className="glass rounded-2xl p-6 inline-block text-left max-w-md">
                        <span className={`text-xs font-medium ${item.textColor} uppercase tracking-wider`}>
                          {item.year}
                        </span>
                        <h4 className="text-lg font-semibold text-brand-text mt-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-brand-text-muted">{item.subtitle}</p>
                        <p className="text-sm text-brand-text-muted mt-2">{item.desc}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full bg-brand-surface-alt border-2 ${item.border} flex items-center justify-center`}>
                        <item.icon style={{ color: item.color, fontSize: 14 }} />
                      </div>
                    </div>
                    <div className="flex-1" />
                  </div>

                  {/* Mobile - always on the right */}
                  <div className="md:hidden relative z-10">
                    <div className={`absolute -left-10 top-1 w-8 h-8 rounded-full bg-brand-surface-alt border-2 ${item.border} flex items-center justify-center`}>
                      <item.icon style={{ color: item.color, fontSize: 14 }} />
                    </div>
                    <div className="glass rounded-2xl p-5">
                      <span className={`text-xs font-medium ${item.textColor} uppercase tracking-wider`}>
                        {item.year}
                      </span>
                      <h4 className="text-base font-semibold text-brand-text mt-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-brand-text-muted">{item.subtitle}</p>
                      <p className="text-sm text-brand-text-muted mt-2">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
