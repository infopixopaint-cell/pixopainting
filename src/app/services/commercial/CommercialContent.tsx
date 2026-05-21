'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';

export default function CommercialContent() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title="Commercial Painting Contractors Canada | Top-Rated Results."
        subtitle="Premier Retail, Office & Strata Coating Excellence"
        image="/images/generated/project_commercial.png"
        mask="mask-brush-1"
      />

      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <ScrollReveal direction="left">
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '30px' }}>Canada's Choice for Commercial Coating.</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '20px' }}>
                For modern offices, high-traffic retail spaces, and prestigious strata developments across British Columbia, we deliver professional painting services that combine speed with museum-grade precision. Our crews coordinate seamlessly to minimize operational downtime.
              </p>
              <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px', marginTop: '40px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '15px' }}>Technical & Safety Rigour</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>We are a fully licensed and WorkSafeBC insured painting contractor. Our materials include durable, low-VOC architectural coatings engineered for maximum life cycles.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" scale={true}>
            <div style={{ position: 'relative', height: '600px' }}>
              <div className="mask-brush-2" style={{ position: 'absolute', inset: 0 }}>
                <Image 
                  src="/images/generated/about_hero.png" 
                  alt="Commercial Detail" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
