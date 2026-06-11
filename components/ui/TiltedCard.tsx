'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useDragScroll } from '@/lib/hooks/useDragScroll';

export interface TiltedCarouselItem {
  title: string;
  image: string;
  badges: { label: string; icon?: string }[];
}

interface TiltedCarouselProps {
  items: TiltedCarouselItem[];
  autoScroll?: boolean;
  speed?: number;
}

export default function TiltedCarousel({
  items,
  autoScroll = false,
  speed = 1,
}: TiltedCarouselProps) {
  const { scrollRef, isDragging, handlers } = useDragScroll({
    autoScroll,
    speed,
  });

  return (
    <div className="udit-tilted-carousel-wrapper">
      <div
        ref={scrollRef}
        className={`udit-tilted-carousel-track ${isDragging ? 'dragging' : ''}`}
        {...handlers}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`udit-tilted-card ${
              i % 2 === 0 ? 'tilt-left' : 'tilt-right'
            }`}
          >
            <div className="udit-tilted-card-inner">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 220px, 280px"
                draggable={false}
                className="udit-tilted-card-image"
              />

              {item.badges.length > 0 && (
                <div className="udit-creative-badges">
                  {item.badges.map((badge) => (
                    <span key={badge.label} className="udit-creative-badge">
                      {badge.icon && <span>{badge.icon}</span>}
                      {badge.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}