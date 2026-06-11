'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    if (!autoScroll || !scrollRef.current) return;
    const el = scrollRef.current;
    let raf: number;

    const scroll = () => {
      if (!isDragging && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(scroll);
    };
    raf = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(raf);
  }, [autoScroll, isDragging, speed]);

  // Drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Wheel: vertical scroll → horizontal
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="udit-tilted-carousel-wrapper">
      <div
        ref={scrollRef}
        className={`udit-tilted-carousel-track ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
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