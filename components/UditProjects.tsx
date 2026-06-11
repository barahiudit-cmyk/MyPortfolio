"use client";
import { motion } from 'framer-motion';
import { useState } from "react";
import Image from 'next/image';

import { webProjects, creativeProjects } from "../data/udit-portfolio-data";
import UditProjectTabs from '@/components/ui/tabs';
import TiltedCarousel from '@/components/ui/TiltedCard';

export default function UditProjects() {
  const [active, setActive] = useState("web");

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
          I have worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </motion.p>
      </div>

      {/* tabs */}
      <UditProjectTabs active={active} setActive={setActive} />

      {/* WEB PROJECTS */}
      {active === "web" && (
        <div className="udit-project-grid">
          {webProjects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="udit-project-card"
            >
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
      )}

      {/* CREATIVE PROJECTS — TILTED CAROUSEL */}
      {active === "creative" && (
        <TiltedCarousel items={creativeProjects} autoScroll={false} />
      )}
    </section>
  );
}