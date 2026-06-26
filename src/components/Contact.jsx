import { motion } from "framer-motion";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-brand-green text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-7xl font-bold text-brand-text leading-tight">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-lg text-brand-text-muted max-w-xl mx-auto">
            Have a project in mind? Let's work together to create something great.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-10 space-y-6 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center">
                <HiMail className="text-brand-blue text-xl" />
              </div>
              <div className="text-left">
                <p className="text-sm text-brand-text-muted">Email</p>
                <a
                  href="mailto:bharadwajsaurabh842@gmail.com"
                  className="text-brand-text font-medium hover:text-brand-blue transition-colors"
                >
                  bharadwajsaurabh842@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-green/15 flex items-center justify-center">
                <HiPhone className="text-brand-green text-xl" />
              </div>
              <div className="text-left">
                <p className="text-sm text-brand-text-muted">Phone</p>
                <a
                  href="tel:+918115561727"
                  className="text-brand-text font-medium hover:text-brand-green transition-colors"
                >
                  +91 8115561727
                </a>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            <div className="space-y-4">
              <p className="text-sm text-brand-text-muted font-medium uppercase tracking-wider">
                Social Links
              </p>
              <div className="flex justify-center gap-3">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/saurabh-kumar-dubey-85975221b", label: "LinkedIn", color: "brand-blue" },
                  { icon: FaGithub, href: "https://github.com/official1saurabh-ship-it", label: "GitHub", color: "brand-text" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-text-muted hover:text-brand-text hover:bg-brand-card/50 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/5" />

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-brand-purple/20 text-brand-text hover:from-brand-purple/20 hover:to-brand-pink/20 transition-all group"
            >
              <FaFileDownload className="text-brand-purple group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-medium">Download Resume</p>
                <p className="text-sm text-brand-text-muted">PDF format</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
