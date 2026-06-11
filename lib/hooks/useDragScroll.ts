'use client';

import { useRef, useState, useEffect, RefObject } from 'react';

export interface UseDragScrollOptions {
  autoScroll?: boolean;
  speed?: number;
  dragMultiplier?: number;
}

export interface UseDragScrollReturn {
  scrollRef: RefObject<HTMLDivElement | null>;
  isDragging: boolean;
  handlers: {
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseLeave: () => void;
    onMouseUp: () => void;
    onMouseMove: (e: React.MouseEvent) => void;
    onWheel: (e: React.WheelEvent) => void;
  };
}

/**
 * Global reusable hook for horizontal drag/wheel/auto-scroll carousels.
 *
 * Features:
 * - Click & drag to scroll (desktop)
 * - Mouse wheel → horizontal scroll
 * - Optional auto-scroll loop
 * - Native touch/momentum scroll on mobile (handled via CSS)
 */
export function useDragScroll({
  autoScroll = false,
  speed = 1,
  dragMultiplier = 1.5,
}: UseDragScrollOptions = {}): UseDragScrollReturn {
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

  // Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * dragMultiplier;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Wheel: vertical → horizontal
  const onWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return {
    scrollRef,
    isDragging,
    handlers: {
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onMouseMove,
      onWheel,
    },
  };
}