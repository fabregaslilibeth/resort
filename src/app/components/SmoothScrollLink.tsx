'use client';

import { ReactNode } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  offset?: number;
  onClick?: () => void;
}

export const SmoothScrollLink = ({ 
  href, 
  children, 
  className = '', 
  offset = 80,
  onClick 
}: SmoothScrollLinkProps) => {
  const { smoothScrollTo } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }
    
    const targetId = href.replace('#', '');
    smoothScrollTo(targetId, offset);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`smooth-scroll-link ${className}`}
    >
      {children}
    </a>
  );
}; 