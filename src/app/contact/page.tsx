'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

import CinematicDeviceForm from '@/components/CinematicDeviceForm';

export default function ContactPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      {/* Extraordinary Fluid Cover */}
      <PageHero 
        title="Connect with Precision."
        subtitle="Consult with our Curators"
        image="/images/generated/gallery_hero.png"
        mask="mask-brush-hero"
      />

      {/* Fluid Form Section */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '60px', alignItems: 'center' }}>
          {/* Contact Details Column */}
          <ScrollReveal direction="left">
            <div style={{ padding: '40px 0' }}>
              <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Contact Details.</h2>
              <div style={{ display: 'grid', gap: '2.5rem' }}>
                <div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: '10px' }}>Our Presence</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.5 }}>
                    Serving Vancouver & Delta<br/>
                    <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>Headquarters: 9445 114st Delta</span>
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: '10px' }}>Direct Line</p>
                  <Link href="tel:+12366322433" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)' }}>+1 (236) 632-2433</Link>
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: '10px' }}>Electronic Mail</p>
                  <Link href="mailto:info@pixopainting.com" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--foreground)' }}>info@pixopainting.com</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Column - Cinematic Device */}
          <ScrollReveal direction="right" scale={true}>
            <div style={{ position: 'relative' }}>
              <CinematicDeviceForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Aesthetic Map Section - Liquid Glass Theme */}
      <section style={{ padding: '0 var(--fluid-padding-container) var(--fluid-section-gap)', maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal scale={true} distance={50}>
          <div
            className="liquid-glass"
            style={{ 
              width: '100%', 
              height: 'clamp(350px, 40vw, 550px)', 
              borderRadius: '40px', 
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(255,255,255,0.4)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.08)'
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.5283526154316!2d-122.9090638!3d49.1232815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485df191285223b%3A0x633fc605f1590e8!2s9445%20114%20St%2C%20Delta%2C%20BC%20V4C%205K9%2C%20Canada!5e0!3m2!1sen!2sus!4v1713437000000!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
                filter: 'grayscale(0.8) contrast(1.1) brightness(1.05)',
                opacity: 0.9
              }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{ 
              position: 'absolute', 
              bottom: '30px', 
              left: '30px', 
              padding: '20px 30px', 
              background: 'rgba(255,255,255,0.7)', 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '25px',
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '5px' }}>Headquarters</p>
              <p style={{ fontWeight: 600, color: 'black' }}>9445 114st Delta, BC V4C 5K9</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Finishing CTA */}
      <section style={{ padding: '0 var(--fluid-padding-container) 100px', textAlign: 'center' }}>
        <ScrollReveal scale={true}>
          <div className="liquid-glass" style={{ padding: '60px', borderRadius: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Your vision, our expertise.</h2>
            <p style={{ opacity: 0.6, marginBottom: '2rem' }}>We respond to all inquiries within 24 architectural hours. Let's begin the transformation.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <Link href="/" style={{ padding: '15px 30px', borderRadius: '30px', background: 'black', color: 'white', fontWeight: 600 }}>Return Home</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
