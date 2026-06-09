
"use client";
import { motion } from 'framer-motion';
import { skills } from '../data/udit-portfolio-data';

export default function UditSkills() {
  return (
    <section className="udit-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="udit-section-title"
      >
        Skills
      </motion.h2>
      <div className="udit-skills">
        {skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="udit-skill"
          >
            <span className="udit-skill-icon" style={{ color: skill.color }}>
              {skill.initial}
            </span>
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
