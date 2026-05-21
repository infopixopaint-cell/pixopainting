'use client';

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface AnimatedBrushRevealProps {
  imageSrc: string;
}

// Helper to compute the clip-path from scroll progress
function useClipPath(progress: MotionValue<number>): MotionValue<string> {
  return useTransform(progress, [0.1, 0.85], [
    'circle(0% at 75% 15%)',
    'circle(160% at 50% 50%)'
  ]);
}

export default function AnimatedBrushReveal({ imageSrc }: AnimatedBrushRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'end 20%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // --- Brush Movement Path (more central on mobile) ---
  const brushX = useTransform(
    smoothProgress,
    [0, 0.15, 0.45, 0.75, 1],
    isMobile
      ? ['70%', '55%', '40%', '30%', '25%']
      : ['78%', '65%', '40%', '20%', '15%']
  );
  const brushY = useTransform(
    smoothProgress,
    [0, 0.15, 0.45, 0.75, 1],
    ['-5%', '15%', '45%', '72%', '95%']
  );

  // --- 3D Tilt and Rotation (simplified on mobile for perf) ---
  const brushRotateZ = useTransform(smoothProgress, [0, 0.5, 1], [-42, -38, -35]);
  const brushRotateX = useTransform(smoothProgress, [0, 0.5, 1], isMobile ? [0, 0, 0] : [25, 10, -5]);
  const brushScale = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.8]);

  // --- Image Clip-Path (brush-tip centred reveal) ---
  // Reveal expands as a spreading circle from the brush tip origin
  const clipPath = useClipPath(smoothProgress);

  // --- Paint trail glow opacity ---
  const glowOpacity = useTransform(smoothProgress, [0.1, 0.3, 0.8, 1], [0, 1, 0.6, 0]);

  // --- Background canvas opacity ---
  const canvasBgOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);

  // --- Museum badge fade in ---
  const badgeOpacity = useTransform(smoothProgress, [0.7, 0.9], [0, 1]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: isMobile ? '420px' : '600px',
        perspective: isMobile ? 'none' : '1200px',
        overflow: 'hidden',
        borderRadius: isMobile ? '20px' : '40px',
        background: '#f0ede8',
        boxShadow: '0 40px 120px rgba(0,0,0,0.12), inset 0 0 80px rgba(0,0,0,0.04)'
      }}
    >
      {/* Unpainted Canvas Texture Background */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          opacity: canvasBgOpacity,
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 40px, rgba(0,0,0,0.015) 40px, rgba(0,0,0,0.015) 41px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 40px, rgba(0,0,0,0.015) 40px, rgba(0,0,0,0.015) 41px
          )`,
          zIndex: 0
        }}
      />
      <motion.div
        style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: canvasBgOpacity, zIndex: 1 }}
      >
        <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5em', color: 'rgba(0,0,0,0.15)' }}>
          Canvas Awaits
        </p>
      </motion.div>

      {/* ── Revealed Image (expands under brush tip) ── */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          clipPath,
          zIndex: 2
        }}
      >
        <Image
          src={imageSrc}
          alt="Residential Interior"
          fill
          style={{ objectFit: 'cover' }}
          className="image-masterpiece"
        />
        {/* Wet-paint sheen overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
          mixBlendMode: 'overlay',
          zIndex: 1
        }} />
      </motion.div>

      {/* ── The Premium 3D Paintbrush ── */}
      <motion.div
        style={{
          position: 'absolute',
          left: brushX,
          top: brushY,
          width: isMobile ? '70px' : '100px',
          height: isMobile ? '180px' : '260px',
          zIndex: 20,
          pointerEvents: 'none',
          x: '-50%',
          y: '-85%',
          rotateZ: brushRotateZ,
          rotateX: brushRotateX,
          scale: brushScale,
          transformStyle: isMobile ? 'flat' : 'preserve-3d',
          transformOrigin: '50% 95%',
          filter: 'drop-shadow(6px 12px 18px rgba(0,0,0,0.3))'
        }}
      >
        <svg
          viewBox="0 0 100 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="handleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5D3A1A" />
              <stop offset="30%" stopColor="#8B5E3C" />
              <stop offset="60%" stopColor="#3E2209" />
              <stop offset="100%" stopColor="#2C1505" />
            </linearGradient>
            <linearGradient id="ferruleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9E9E9E" />
              <stop offset="40%" stopColor="#E8E8E8" />
              <stop offset="70%" stopColor="#BDBDBD" />
              <stop offset="100%" stopColor="#757575" />
            </linearGradient>
            <linearGradient id="bristleGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4A017" />
              <stop offset="60%" stopColor="#E8C547" />
              <stop offset="100%" stopColor="#A07810" />
            </linearGradient>
            <radialGradient id="tipGlow" cx="50%" cy="100%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.9" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Handle Body */}
          <path
            d="M38 4C38 2 44 0 50 0C56 0 62 2 62 4L64 160H36L38 4Z"
            fill="url(#handleGrad)"
          />
          {/* Handle Wood Highlight */}
          <path d="M46 4L48 155H52L54 4C54 4 52 2 50 2C48 2 46 4 46 4Z" fill="rgba(255,255,255,0.12)" />
          {/* Handle Rings */}
          <rect x="37" y="50" width="26" height="3" rx="1.5" fill="rgba(0,0,0,0.15)" />
          <rect x="37" y="100" width="26" height="3" rx="1.5" fill="rgba(0,0,0,0.15)" />
          <rect x="37" y="140" width="26" height="3" rx="1.5" fill="rgba(0,0,0,0.1)" />

          {/* Ferrule */}
          <rect x="32" y="160" width="36" height="34" rx="3" fill="url(#ferruleGrad)" />
          {/* Ferrule shine */}
          <rect x="33" y="162" width="14" height="30" rx="2" fill="rgba(255,255,255,0.25)" />
          {/* Ferrule bands */}
          <rect x="32" y="168" width="36" height="2" fill="rgba(0,0,0,0.1)" />
          <rect x="32" y="180" width="36" height="2" fill="rgba(0,0,0,0.1)" />
          <rect x="32" y="190" width="36" height="2" fill="rgba(0,0,0,0.1)" />

          {/* Bristles */}
          <path d="M28 194C28 194 22 260 50 260C78 260 72 194 72 194H28Z" fill="url(#bristleGrad)" />
          {/* Bristle individual strands */}
          <path d="M32 198V242M38 197V250M44 196V254M50 196V258M56 196V254M62 197V250M68 198V242" stroke="#8B6914" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
          {/* Bristle highlight */}
          <path d="M32 200C36 200 48 198 50 196" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />

          {/* Paint tip glow */}
          <ellipse cx="50" cy="258" rx="22" ry="4" fill="url(#tipGlow)" opacity="0.8" />
        </svg>

        {/* Animated glowing paint drip at tip */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '2px',
            left: '50%',
            x: '-50%',
            width: '36px',
            height: '14px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.9), transparent)',
            filter: 'blur(5px)',
            opacity: glowOpacity
          }}
        />
      </motion.div>

      {/* Museum Grade badge — reappears after reveal */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          opacity: badgeOpacity,
          zIndex: 15
        }}
      >
        <motion.div
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '110px',
            height: '110px',
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            fontSize: '0.7rem',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '16px'
          }}
        >
          Museum Grade Finish
        </motion.div>
      </motion.div>
    </div>
  );
}
