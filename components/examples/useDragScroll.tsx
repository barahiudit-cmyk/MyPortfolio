'use client';
import { useDragScroll } from '@/hooks/useDragScroll';

export default function LogoStrip() {
  const { scrollRef, isDragging, handlers } = useDragScroll({ autoScroll: true, speed: 0.5 });

  return (
    <div
      ref={scrollRef}
      className={`my-logo-strip ${isDragging ? 'dragging' : ''}`}
      {...handlers}
    >
      {/* logos here */}
    </div>
  );
}