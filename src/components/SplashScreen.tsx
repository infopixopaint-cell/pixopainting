'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Allow time for exit animation
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--background)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background Liquid Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, hsla(210, 25%, 90%, 0.8) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: -1,
            }}
          />

          <div style={{ position: 'relative', textAlign: 'center' }}>
            {/* Liquid Glass Shape */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
              }}
              transition={{ 
                duration: 2, 
                ease: "easeOut",
                borderRadius: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
              className="liquid-glass"
              style={{
                width: '320px',
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Paint Stroke Animation (SVG) */}
              <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute' }}>
                <motion.path
                  d="M40,100 C40,40 160,40 160,100 C160,160 40,160 40,100"
                  fill="none"
                  stroke="hsla(210, 10%, 20%, 0.1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M50,110 Q100,20 150,110 T50,110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>

              {/* Enhanced Image Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                style={{
                  position: 'relative',
                  width: '280px',
                  height: '140px',
                  zIndex: 10,
                }}
              >
                <Image 
                  src="/logo.PNG" 
                  alt="Pixo Painting & Coating" 
                  fill 
                  style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} 
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Subtle Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 2.5, duration: 1 }}
              style={{
                marginTop: '2rem',
                fontSize: '0.9rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Precision at every stroke
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
