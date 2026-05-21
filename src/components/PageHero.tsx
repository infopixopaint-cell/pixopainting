'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  mask?: 'mask-brush-1' | 'mask-brush-2' | 'mask-brush-3' | 'mask-brush-4' | 'mask-brush-hero';
}

export default function PageHero({ 
  title, 
  subtitle = "PixoPainting Precision", 
  image, 
  mask = "mask-brush-hero" 
}: PageHeroProps) {
  return (
    <section className="canvas-texture" style={{ 
      height: 'var(--hero-height, 100dvh)',
      minHeight: '500px',
      margin: 'clamp(10px, 2vw, 20px)', 
      position: 'relative', 
      overflow: 'hidden', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 'clamp(20px, 4vw, 40px)' 
    }}>
      {/* Dynamic Fluid Height via CSS Variable */}
      <style jsx>{`
        section { --hero-height: calc(100dvh - clamp(20px, 4vw, 40px)); }
        @media (max-width: 768px) {
          section { --hero-height: 80dvh; }
        }
      `}</style>
      
      {/* Extraordinary Reveal Mask */}
      <motion.div 
        className={mask}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="image-masterpiece"
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))' }} />
      </motion.div>

      {/* Extraordinary Text Reveal with Fluid Typography */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white', padding: '0 var(--fluid-padding-container)' }}>
        <motion.p 
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ 
            fontSize: 'clamp(0.7rem, 1.5vw, 1rem)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.4em', 
            marginBottom: '1.5rem', 
            fontWeight: 500,
            opacity: 0.8 
          }}
        >
          {subtitle}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 50 }}
          style={{ 
            fontSize: 'var(--fluid-h1)', 
            fontWeight: 700, 
            letterSpacing: '-0.04em', 
            lineHeight: 0.9,
            textShadow: '0 10px 30px rgba(0,0,0,0.2)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
