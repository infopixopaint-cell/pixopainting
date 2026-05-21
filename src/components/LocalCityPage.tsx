'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function LocalCityPage({ 
  city, 
  desc, 
  neighborhoods, 
  customTitle,
  showAddress 
}: { 
  city: string, 
  desc: string, 
  neighborhoods: string[], 
  customTitle?: string,
  showAddress?: boolean
}) {
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title={customTitle || `#1 Best Painting & Coating in ${city}`} 
        subtitle={`Top-Rated Professional Painters Serving All ${city} Neighborhoods`}
        image="/images/generated/gallery_hero.png"
        mask="mask-brush-hero"
      />

      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'var(--fluid-h1)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-0.04em' }}>
              The Gold Standard for Painting in {city}
            </h2>
            <p style={{ fontSize: 'var(--fluid-p)', opacity: 0.7, lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
              {desc} Pixo Painting brings museum-grade architectural finishing and industrial-strength protection to every corner of {city}.
            </p>
          </div>
        </ScrollReveal>

        {showAddress && (
          <ScrollReveal>
            <div className="liquid-glass" style={{ textAlign: 'center', padding: '40px', borderRadius: '30px', marginBottom: '80px', border: '1px solid rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5, marginBottom: '10px' }}>Headquarters & Service Hub</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>9445 114st, Delta, BC V4C 5K9, Canada</h3>
              <p style={{ opacity: 0.6, marginTop: '10px' }}>Serving North Delta, Ladner, Tsawwassen, and Greater Vancouver</p>
            </div>
          </ScrollReveal>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {[
            { title: `${city} Interior Painting`, text: `Premium interior finishing tailored to ${city}&apos;s architectural diversity.` },
            { title: `${city} Exterior Coating`, text: `High-durability coatings engineered to survive ${city}&apos;s specific coastal and urban conditions.` }
          ].map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px' }}>{s.title}</h3>
                <p style={{ opacity: 0.6, marginBottom: '20px' }}>{s.text}</p>
                <Link href="/services" style={{ fontWeight: 700, color: 'var(--foreground)' }}>Explore Services →</Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div style={{ marginTop: '80px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '60px' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: '2rem' }}>{city} Neighborhoods We Serve</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', textAlign: 'left' }}>
            {neighborhoods.map(hood => (
              <div key={hood} style={{ fontSize: '0.95rem', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--foreground)', opacity: 0.3 }} />
                {hood}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <Link href="/contact" className="liquid-glass" style={{ padding: '20px 60px', borderRadius: '50px', background: 'black', color: 'white', fontWeight: 700, fontSize: '1.2rem' }}>
            Get a Free Quote in {city}
          </Link>
        </div>
      </section>
    </main>
  );
}
