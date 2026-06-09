"use client";
import { motion } from 'framer-motion';
import Image from 'next/image'; // <-- Next.js Image Component Import Kiya
import { projects } from '../data/udit-portfolio-data';

export default function UditProjects() {
  return (
    <section className="udit-projects-section">
      <div className="udit-projects-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="udit-label-pill"
        >
          My Projects
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Check out my latest work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </motion.p>
      </div>

      <div className="udit-project-grid">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="udit-project-card"
          >
            {/* Thumbnail Container jahan image load hogi */}
            {/* <div 
              className={`udit-project-thumb ${p.thumbClass || ''}`}
              style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }} 
            >
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} Thumbnail`}
                  fill
                  sizes="(max-width: 968px) 100vw, 100vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={i < 2} // Pehle do projects fast render karne ke liye
                />
              ) : (
                p.thumbContent
              )}

            
              {p.badges && p.badges.length > 0 && (
                <div className="udit-project-badges" style={{ zIndex: 10 }}>
                  {p.badges.map((b) => (
                    <span key={b.label} className="udit-project-badge">
                      {b.icon && <span>{b.icon}</span>}
                      {b.label}
                    </span>
                  ))}
                </div>
              )}
            </div> */}

            <div className="udit-project-body">
              <div className="udit-project-title-row">
                <h3 className="udit-project-title">{p.title}</h3>
                <svg className="udit-project-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <p className="udit-project-date">{p.period}</p>
              <p className="udit-project-desc">{p.description}</p>
              <div className="udit-project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="udit-project-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}