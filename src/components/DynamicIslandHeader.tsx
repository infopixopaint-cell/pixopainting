'use client';

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DynamicIslandHeader() {
  const { scrollY } = useScroll();
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const lastScrollY = useRef(0);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const velocity = currentScrollY - lastScrollY.current;
      
      if (currentScrollY <= 15) {
        setIsExpanded(false);
      } else if (velocity > 8) {
        setIsExpanded(true);
      } else if (velocity < -8) {
        setIsExpanded(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  const isMobile = windowWidth < 1024; // Expanded laptop range
  const showFullNav = !isMobile && (isExpanded || isHeaderHovered);

  // Fluid UI Tokens (interpolated for inline styles)
  // Fluid UI Tokens (interpolated for inline styles)
  const headerHeight = isMenuOpen 
    ? 'clamp(400px, 70vh, 550px)' 
    : (isServicesOpen && !isMobile 
        ? 'clamp(320px, 40vh, 380px)' 
        : (showFullNav ? 'clamp(64px, 8vw, 84px)' : '56px'));
  
  const headerWidth = isMenuOpen ? '94%' : (showFullNav ? '94%' : (isMobile ? 'clamp(280px, 80vw, 320px)' : 'clamp(220px, 20vw, 280px)'));

  const getLinkStyle = (name: string, mobile = false) => ({
    fontSize: mobile ? '1.8rem' : 'clamp(0.85rem, 1.1vw, 1rem)',
    fontWeight: mobile ? 700 : 700,
    color: 'var(--foreground)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    opacity: (hoveredItem && hoveredItem !== name) || (isMenuOpen && hoveredItem && hoveredItem !== name) ? 0.35 : 0.85,
    filter: (hoveredItem && hoveredItem !== name) || (isMenuOpen && hoveredItem && hoveredItem !== name) ? 'blur(0.5px)' : 'blur(0px)',
    scale: hoveredItem === name ? 1.02 : 1,
    whiteSpace: 'nowrap' as const,
    display: 'block',
    padding: mobile ? '10px 0' : '0'
  });

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const servicesLinks = [
    { name: 'Interior Painting', href: '/services/interior' },
    { name: 'Exterior Painting', href: '/services/exterior' },
    { name: 'Cabinet Refinishing', href: '/services/cabinets' },
    { name: 'Wood Staining', href: '/services/staining' },
    { name: 'Repaint Services', href: '/services/repaint' }
  ];

  return (
    <motion.header
      layout
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: isMobile ? '12px' : 'clamp(15px, 2vw, 25px)',
        left: '50%',
        x: '-50%',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMenuOpen ? 'flex-start' : 'center',
        justifyContent: 'flex-start',
        width: headerWidth,
        maxWidth: '1300px',
        height: headerHeight,
        borderRadius: isMenuOpen || isServicesOpen ? '44px' : '100px',
        backgroundColor: (showFullNav || isMenuOpen || isServicesOpen) ? 'hsla(210, 25%, 98%, 0.75)' : 'hsla(210, 25%, 98%, 0.8)',
        cursor: 'default',
        padding: isMenuOpen ? '40px' : (isMobile ? '0 10px 0 20px' : (isServicesOpen ? 'clamp(20px, 3vw, 30px) clamp(20px, 3.5vw, 50px)' : '0 clamp(20px, 3.5vw, 50px)')),
        backdropFilter: 'blur(35px) saturate(210%) brightness(1.02)',
        WebkitBackdropFilter: 'blur(35px) saturate(210%) brightness(1.02)',
        border: '1px solid hsla(0, 0%, 100%, 0.4)',
        boxShadow: (showFullNav || isMenuOpen || isServicesOpen) ? '0 12px 60px rgba(0,0,0,0.12)' : '0 8px 32px rgba(0,0,0,0.06)',
        overflow: 'hidden'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      onHoverStart={() => !isMobile && setIsHeaderHovered(true)}
      onHoverEnd={() => {
        if (!isMobile) {
          setIsHeaderHovered(false);
          setHoveredItem(null);
          setIsServicesOpen(false);
        }
      }}
    >
      <nav style={{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: isMenuOpen ? 'flex-start' : 'center', 
        justifyContent: 'flex-start',
        height: '100%',
        position: 'relative'
      }}>
        {/* Top bar (Logo + Hamburger/Buttons) */}
        <div style={{ 
          display: 'flex', 
          width: '100%', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          height: isMenuOpen ? 'auto' : (isMobile ? '56px' : 'clamp(64px, 8vw, 84px)'),
          marginBottom: isMenuOpen ? '40px' : (isServicesOpen ? '30px' : 0)
        }}>
          {/* Logo */}
          <Link 
            href="/" 
            className="touch-feedback"
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              opacity: hoveredItem && hoveredItem !== 'logo' ? 0.35 : 1, 
              transition: 'all 0.4s ease' 
            }}
          >
            <div style={{ 
              position: 'relative', 
              width: 'clamp(140px, 15vw, 180px)', 
              height: 'clamp(40px, 5vw, 50px)',
              filter: 'drop-shadow(0 0 8px rgba(0, 150, 150, 0.15))' 
            }}>
              <Image 
                src="/logo.PNG" 
                alt="Pixo Painting & Coating" 
                fill 
                style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} 
              />
            </div>
          </Link>

          {/* Laptop Navigation Links */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 4vw, 50px)' }}>
              <AnimatePresence>
                {showFullNav && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    style={{ display: 'flex', gap: 'clamp(20px, 3.5vw, 45px)', alignItems: 'center' }}
                  >
                    {navItems.map((item) => (
                      <div 
                        key={item.name} 
                        style={{ position: 'relative' }}
                        onMouseEnter={() => {
                          setHoveredItem(item.name.toLowerCase());
                          if (item.hasDropdown) setIsServicesOpen(true);
                        }}
                        onMouseLeave={() => {
                          // Header-level onHoverEnd handles closing
                        }}
                      >
                        <Link 
                          href={item.href} 
                          style={getLinkStyle(item.name.toLowerCase())}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                    
                    <Link 
                      href="/contact" 
                      onMouseEnter={() => setHoveredItem('quote')}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{ 
                        background: 'var(--foreground)', 
                        color: 'var(--background)',
                        padding: 'clamp(10px, 1.25vw, 15px) clamp(22px, 2.5vw, 36px)',
                        borderRadius: '100px',
                        fontSize: 'clamp(0.85rem, 0.95vw, 1rem)',
                        fontWeight: 800,
                        opacity: hoveredItem && hoveredItem !== 'quote' ? 0.5 : 1,
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        scale: hoveredItem === 'quote' ? 1.05 : 1,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    >
                      Get Quote
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Compact Indicator (Laptop Only) */}
              {!showFullNav && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} style={{ display: 'flex', gap: '5px' }}>
                  {[1, 2, 3].map((i) => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--foreground)' }} />)}
                </motion.div>
              )}
            </div>
          )}

          {/* Mobile Navigation Toggle (Hamburger) */}
          {isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <Link 
                href="/contact" 
                style={{ 
                  background: 'var(--foreground)', 
                  color: 'var(--background)',
                  padding: '10px 18px',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  opacity: isMenuOpen ? 0 : 1,
                  pointerEvents: isMenuOpen ? 'none' : 'auto',
                  transition: 'opacity 0.3s'
                }}
              >
                Quote
              </Link>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="touch-feedback"
                style={{ 
                  width: '44px', 
                  height: '44px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '5px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <motion.div 
                  animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  style={{ width: '24px', height: '2.5px', background: 'var(--foreground)', borderRadius: '2px' }} 
                />
                <motion.div 
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  style={{ width: '24px', height: '2.5px', background: 'var(--foreground)', borderRadius: '2px' }} 
                />
                <motion.div 
                  animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  style={{ width: '24px', height: '2.5px', background: 'var(--foreground)', borderRadius: '2px' }} 
                />
              </button>
            </div>
          )}
        </div>

        {/* Services Dropdown (Laptop - Now integrated into Island) */}
        {!isMobile && isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: '0 20px 20px',
              zIndex: 10
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '15px',
              width: '100%'
            }}>
              {servicesLinks.map(s => (
                <Link
                  key={s.name}
                  href={s.href}
                  onClick={() => setIsServicesOpen(false)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '20px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    color: 'var(--foreground)',
                    background: hoveredItem === s.name ? 'rgba(0,0,0,0.05)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                  onMouseEnter={() => setHoveredItem(s.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    background: 'hsla(180, 100%, 50%, 0.8)',
                    opacity: hoveredItem === s.name ? 1 : 0.3,
                    transition: 'opacity 0.3s'
                  }} />
                  {s.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mobile Full Menu Content */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px', overflowY: 'auto' }}
              className="no-scrollbar"
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.05) }}
                  >
                    {!item.hasDropdown ? (
                      <Link 
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        onMouseEnter={() => setHoveredItem(item.name.toLowerCase())}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={getLinkStyle(item.name.toLowerCase(), true)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div style={{ padding: '10px 0' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 800, opacity: 0.5, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                          {servicesLinks.map(s => (
                            <Link 
                              key={s.name} 
                              href={s.href} 
                              onClick={() => setIsMenuOpen(false)}
                              style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--foreground)', opacity: 0.9 }}
                            >
                              • {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: 'auto', paddingTop: '30px' }}
              >
                <div style={{ padding: '30px', background: 'rgba(0,0,0,0.03)', borderRadius: '30px', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.5, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Official Presence</p>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, opacity: 0.8 }}>Surrey • Squamish • Delta • Vancouver • Burnaby • Richmond</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
