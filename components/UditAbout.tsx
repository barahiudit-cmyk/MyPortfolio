"use client";

import { motion } from 'framer-motion';

export default function UditAbout() {
  return (
    <section className="udit-section udit-about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="udit-section-title"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p>
          I am a Web Developer who genuinely enjoys building <u>clean, responsive, and user-friendly web applications</u>.
          My main interest lies in creating seamless digital experiences using technologies like <strong>React, JavaScript, PHP, and Laravel</strong>.
        </p>

        <p className="mt-4">
          I have a keen interest in exploring <u>full-stack development, backend logic, and learning about cloud-based solutions</u>.
          I love solving logical challenges, experimenting with new frameworks, and continuously improving my coding skills through hands-on projects.
        </p>

        <p className="mt-4">
          Apart from coding, I am highly interested in visual arts, which includes <strong><u>graphics designing, photoshop, and video editing</u></strong>.
          I always try to bring that creative touch into the digital products I build.
        </p>
      </motion.div>
    </section>
  );
}