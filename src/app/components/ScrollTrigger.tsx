'use client';

import { ReactNode } from 'react';
import { useScrollTrigger } from '../hooks/useSmoothScroll';

interface ScrollTriggerProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade' | 'slide-left' | 'slide-right' | 'scale' | 'slide-bottom' | 'slide-top';
  threshold?: number;
  delay?: number;
}

export const ScrollTrigger = ({ 
  children, 
  className = '', 
  animationType = 'fade',
  threshold = 0.1,
  delay = 0
}: ScrollTriggerProps) => {
  const { elementRef, isVisible } = useScrollTrigger(threshold);

  const getAnimationClass = () => {
    const baseClass = isVisible ? 'animate' : '';
    
    switch (animationType) {
      case 'slide-left':
        return `scroll-trigger-left ${baseClass}`;
      case 'slide-right':
        return `scroll-trigger-right ${baseClass}`;
      case 'scale':
        return `scroll-trigger-scale ${baseClass}`;
      case 'slide-bottom':
        return `scroll-trigger ${baseClass}`;
      case 'slide-top':
        return `scroll-trigger ${baseClass}`;
      default:
        return `scroll-trigger ${baseClass}`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ 
        transitionDelay: `${delay}s`,
        transform: animationType === 'slide-top' && isVisible ? 'translateY(0)' : undefined
      }}
    >
      {children}
    </div>
  );
}; 