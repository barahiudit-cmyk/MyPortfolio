"use client";
import { motion } from 'framer-motion';
import { hackathons } from '../data/udit-portfolio-data';

export default function UditHackathons() {
  return (
    <section>
      <div className="udit-hackathons-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="udit-label-pill"
        >
          Hackathons
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          I like building things
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
        I believe in building solutions that solve real-world problems. Participating in the Cloud First Hackathon at Habbale Academy was an incredible experience where I, along with other motivated minds, spent days focused on rapid execution and innovation. Designing and optimization under tight deadlines pushed my frontend skills to the next level and winning 3rd place validated my approach towards clean, performance-driven UI.
        </motion.p>
      </div>

      <div className="udit-hack-list">
        {hackathons.map((h, i) => (
          <motion.div
            key={h.title + h.date}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
            className="udit-hack-item"
          >
            <div
              className="udit-hack-icon"
              style={{ background: `${h.color}15`, borderColor: `${h.color}40`, color: h.color }}
            >
              <span style={{ fontSize: 20 }}>{h.emoji}</span>
            </div>
            <div>
              <p className="udit-hack-date">{h.date}</p>
              <h3 className="udit-hack-title">{h.title}</h3>
              <p className="udit-hack-location">{h.location}</p>
              <p className="udit-hack-desc">{h.description}</p>
              {h.tags.length > 0 && (
                <div className="udit-hack-tags">
                  {h.tags.map((t) => (
                    <span key={t.label} className="udit-hack-tag">
                      {t.icon && <span>{t.icon}</span>}
                      {t.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
