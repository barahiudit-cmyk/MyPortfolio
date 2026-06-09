"use client";

import { motion } from 'framer-motion';

export default function ContactContactCTA() {
  return (
    <section id="contact" className="cs-section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="cs-cta-card"
      >
        {/* Dynamic Glowing Background Circles */}
        <div className="cs-cta-glow-1" />
        <div className="cs-cta-glow-2" />

        <div className="cs-cta-content">
          {/* Left Content Side */}
          <div className="cs-cta-text-side">
            <div className="cs-cta-badge">
              <span className="cs-cta-dot" />
              Available for Opportunities
            </div>
            <h2 className="cs-cta-heading">Let's build something meaningful together.</h2>
            <p className="cs-cta-subheading">
              Open to exciting frontend projects, full-time opportunities, and impactful engineering collaborations.
            </p>
          </div>

          {/* Right Action Side */}
          <div className="cs-cta-actions">
            {/* Aap yahan apna Calendly ya custom link laga sakte hain */}
            <a
              href="/resume/UditResume1.pdf"
              target="_blank"
              rel="noreferrer"
              className="cs-btn cs-btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: "8px" }}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Resume
            </a>
            <a href="mailto:thakurudit04@gmail.com" className="cs-btn cs-btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}