'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

const SERVICES_LIST = [
  {
    title: "Interior Masterpieces",
    description: "Museum-grade wall finishes and curated color transitions for your inner sanctuary.",
    image: "/images/generated/detail_interior.png",
    href: "/services/interior"
  },
  {
    title: "Exterior Protection",
    description: "Performance coatings engineered for architectural longevity and aesthetic impact.",
    image: "/images/generated/detail_exterior.png",
    href: "/services/exterior"
  },
  {
    title: "Cabinet Refinishing",
    description: "Factory-grade lacquer finishes for a complete kitchen revival with zero-defect surface tension.",
    image: "/images/generated/detail_cabinet.png",
    href: "/services/cabinets"
  },
  {
    title: "Artisan Wood Staining",
    description: "Preserving the organic soul of natural timber with high-pigment, breathable stains.",
    image: "/images/generated/detail_staining.png",
    href: "/services/staining"
  },
  {
    title: "Heritage Repaint",
    description: "Restoring the character of historical architecture with modern durability and precision.",
    image: "/images/generated/detail_heritage_repaint_v2.png",
    href: "/services/repaint"
  }
];

export default function ServicesLandingPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title="Our Craftsmanship." 
        subtitle="Comprehensive Painting & Coating Services in Vancouver & Delta"
        image="/images/generated/about_hero.png"
        mask="mask-brush-hero"
      />

      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', maxWidth: '1400px', margin: '0 auto' }}>
        <ScrollReveal direction="down">
          <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '20px' }}>Architectural Precision across every surface.</h2>
            <p style={{ fontSize: 'var(--fluid-p)', opacity: 0.6, lineHeight: 1.6 }}>
              Whether it is a multi-million dollar residential estate or a high-traffic commercial facility, we bring the same level of technical rigour and artistic focus to every project.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(300px, 40vw, 600px), 1fr))', 
          gap: 'clamp(30px, 5vw, 60px)' 
        }}>
          {SERVICES_LIST.map((service, idx) => (
            <ScrollReveal key={service.title} delay={idx * 0.1} scale={true}>
              <Link href={service.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="liquid-glass" style={{ 
                  borderRadius: '30px', 
                  overflow: 'hidden', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ position: 'relative', height: '350px', width: '100%' }}>
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '40px' }}>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '15px' }}>{service.title}</h3>
                    <p style={{ opacity: 0.6, lineHeight: 1.6, marginBottom: '25px', fontSize: '1rem' }}>{service.description}</p>
                    <div style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      Explore Service 
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', background: 'var(--foreground)', color: 'var(--background)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
             <h2 style={{ fontSize: 'var(--fluid-h1)', fontWeight: 700, marginBottom: '30px', letterSpacing: '-0.02em' }}>Ready to redefine your environment?</h2>
             <Link href="/contact" className="liquid-glass" style={{ display: 'inline-block', padding: '20px 50px', borderRadius: '50px', background: 'white', color: 'black', fontWeight: 700, fontSize: '1.1rem' }}>
               Start Your Project
             </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
