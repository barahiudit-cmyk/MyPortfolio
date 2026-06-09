"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UditHero() {
  return (
    <section className="udit-hero" id="Hero">
      <div className="udit-hero-text">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I Am Udit
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Full Stack Developer passionate about building modern web
          applications and digital experiences using React, Next.js,
          Laravel, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="udit-hero-actions"
        >
          <a
            href="/resume/UditResume1.pdf"
            download
            className="udit-resume-btn"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="udit-avatar"
      >
        <Image
          src="/images/pic1.png"
          alt="profile-image"
          width={126}
          height={126}
        />
      </motion.div>
    </section>
  );
}