'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function DynamicIslandFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ paddingBottom: '40px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass"
          style={{ 
            padding: '60px', 
            borderRadius: '40px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '60px' 
          }}
        >
          {/* Brand & Mission */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ position: 'relative', width: '200px', height: '60px' }}>
               <Image 
                src="/logo.PNG" 
                alt="Pixo Painting & Coating" 
                fill 
                style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} 
              />
            </div>
            <p style={{ opacity: 0.6, lineHeight: 1.6 }}>
              Canada's premier painting & coating service. Crafting architectural legacies through precision at every stroke and editorial color theory. Serving British Columbia and nationwide.
            </p>
          </div>

          {/* Service Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '25px', color: 'var(--accent-color)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Home', 'Canada Wide', 'Vancouver', 'Delta', 'Burnaby', 'Richmond', 'Surrey', 'Langley', 'Coquitlam', 'Services', 'Gallery', 'About Us', 'Get a Quote'].map(link => (
                <li key={link}>
                  <Link href={
                    link === 'Get a Quote' ? '/contact' : 
                    link === 'About Us' ? '/about' : 
                    link === 'Home' ? '/' :
                    link === 'Services' ? '/services' :
                    link === 'Vancouver' ? '/vancouver-painting' :
                    link === 'Delta' ? '/delta-painting' :
                    link === 'Burnaby' ? '/burnaby-painting' :
                    link === 'Richmond' ? '/richmond-painting' :
                    link === 'Surrey' ? '/surrey-painting' :
                    link === 'Langley' ? '/langley-painting' :
                    link === 'Coquitlam' ? '/coquitlam-painting' :
                    link === 'Canada Wide' ? '/painting-and-coating-canada' :
                    `/${link.toLowerCase().replace(' ', '')}`
                  } style={{ opacity: 0.6, fontSize: '0.95rem', fontWeight: 500, transition: 'opacity 0.2s' }}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations - NEW from roxpainting.ca */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '25px', color: 'var(--accent-color)' }}>Our Locations</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>Main Office</p>
                <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.5 }}>9445 114st Delta,<br/>BC V4C 5K9, Canada</p>
              </li>
              <li style={{ marginTop: '10px' }}>
                <Link 
                  href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" 
                  target="_blank"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    padding: '12px 20px', 
                    background: 'var(--foreground)', 
                    color: 'var(--background)', 
                    borderRadius: '50px', 
                    fontSize: '0.9rem', 
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>o</span>
                  <span style={{ color: '#FBBC05' }}>o</span>
                  <span style={{ color: '#4285F4' }}>g</span>
                  <span style={{ color: '#34A853' }}>l</span>
                  <span style={{ color: '#EA4335' }}>e</span>
                  &nbsp;Review us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '25px', color: 'var(--accent-color)' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.05em' }}>Email</p>
                <Link href="mailto:info@pixopainting.com" style={{ fontSize: '1.1rem', fontWeight: 600 }}>info@pixopainting.com</Link>
              </li>
              <li>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.05em' }}>Phone</p>
                <Link href="tel:+12366322433" style={{ fontSize: '1.1rem', fontWeight: 600 }}>+1 (236) 632-2433</Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div style={{ 
          marginTop: '30px', 
          paddingTop: '24px',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ opacity: 0.4, fontSize: '0.85rem' }}>© {currentYear} pixo painting &amp; coating. All rights reserved.</p>

          {/* Powered By Credit */}
          <a 
            href="https://www.tejaskpaisoftware.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              opacity: 0.75,
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--foreground)', fontWeight: 500, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              Powered by
            </span>
            <div style={{ position: 'relative', width: '32px', height: '32px', flexShrink: 0 }}>
              <Image
                src="/tkp.png"
                alt="TEJASKP AI SOFTWARE"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--foreground)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
              TEJASKP AI SOFTWARE
            </span>
          </a>

          <div style={{ display: 'flex', gap: '20px', opacity: 0.4, fontSize: '0.85rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
