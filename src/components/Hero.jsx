import { useRef } from "react";
import { motion } from "framer-motion";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import useMousePosition from "../hooks/useMousePosition";

const floatingShapes = [
  { size: 60, x: "15%", y: "20%", from: "rgba(59,130,246,0.15)", to: "rgba(168,85,247,0.15)", delay: 0 },
  { size: 40, x: "80%", y: "30%", from: "rgba(236,72,153,0.15)", to: "rgba(249,115,22,0.15)", delay: 1 },
  { size: 50, x: "70%", y: "70%", from: "rgba(168,85,247,0.15)", to: "rgba(236,72,153,0.15)", delay: 2 },
  { size: 35, x: "20%", y: "75%", from: "rgba(249,115,22,0.15)", to: "rgba(234,179,8,0.15)", delay: 0.5 },
];

function MagneticButton({ children, href, className = "" }) {
  const ref = useRef(null);

  const handleMouse = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-shadow duration-300 cursor-pointer ${className}`}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const mouse = useMousePosition();

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[5vw] overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: mouse.x * 0.02,
            y: mouse.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: mouse.x * -0.015,
            y: mouse.y * -0.015,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-brand-pink/10 to-brand-orange/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: mouse.x * 0.01,
            y: mouse.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-brand-yellow/5 to-brand-pink/5 blur-[100px]"
        />
      </div>

      {/* Floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-2xl blur-[2px]"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            background: `linear-gradient(135deg, ${shape.from}, ${shape.to})`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6 + shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-brand-blue font-medium tracking-wider uppercase text-sm md:text-base"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[90px] font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-brand-text">Hello, I'm </span>
            <br />
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink bg-clip-text text-transparent">
              Saurabh Kumar Dubey
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            {["Full Stack Developer", "React Developer", "MERN Stack Developer"].map(
              (role) => (
                <span
                  key={role}
                  className="px-4 py-2 rounded-full glass text-brand-text-muted text-sm md:text-base"
                >
                  {role}
                </span>
              )
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-6"
          >
            <MagneticButton
              href="#projects"
              className="bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40"
            >
              View My Work
              <HiArrowRight />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="glass text-brand-text hover:bg-brand-card/50"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-text-muted hover:text-brand-text transition-colors"
        aria-label="Scroll to about section"
      >
        <HiArrowDown className="text-2xl" />
      </motion.button>
    </section>
  );
}
