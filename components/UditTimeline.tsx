"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

type TimelineItem = {
  primary: string;
  secondary: string;
  period: string;
  color: string;
  initial: string;
  logo?: string;
};

type Props = {
  title: string;
  items: TimelineItem[];
};

export default function UditTimeline({ title, items }: Props) {
  return (
    <section className="udit-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="udit-section-title"
      >
        {title}
      </motion.h2>
      <div className="udit-timeline">
        {items.map((item, i) => (
          <motion.div
            key={item.primary + item.period}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="udit-timeline-item"
          >
            <div
              className="udit-timeline-icon"
              style={{
                background: item.logo ? 'transparent' : item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                width: '40px',  // Icon size
                height: '40px', // Icon size
                position: 'relative' // <-- Yeh zaroori hai Next.js fill property ke liye
              }}
            >
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={`${item.primary} Logo`}
                  fill // <-- Yeh image ko parent div (40x40) ke andar auto-fit kar dega
                  sizes="40px"
                  className="object-contain" // Image compress ya stretch nahi hogi
                  priority={i === 0} // Pehle item ke logo ko fast load karne ke liye
                />
              ) : (
                item.initial
              )}
            </div>
            <div className="udit-timeline-body">
              <p className="udit-timeline-company">{item.primary}</p>
              <p className="udit-timeline-role">{item.secondary}</p>
            </div>
            <div className="udit-timeline-date">{item.period}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}