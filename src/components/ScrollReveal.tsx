'use client';

import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: number;
  scale?: boolean;
  blur?: boolean;
  className?: string;
  style?: CSSProperties;
  staggerChildren?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  distance = 30,
  scale = false,
  blur = true,
  className = '',
  style,
  staggerChildren = 0,
  once = false,
}: ScrollRevealProps) {
  const getInitialProps = () => {
    const initial: any = { opacity: 0 };
    
    if (direction === 'up') initial.y = distance;
    if (direction === 'down') initial.y = -distance;
    if (direction === 'left') initial.x = distance;
    if (direction === 'right') initial.x = -distance;
    
    if (scale) initial.scale = 0.95;
    if (blur) initial.filter = 'blur(10px)';
    
    return initial;
  };

  const getAnimateProps = () => {
    const animate: any = { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' };
    return animate;
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={getInitialProps()}
      whileInView={getAnimateProps()}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren
      }}
    >
      {children}
    </motion.div>
  );
}
