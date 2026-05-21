'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';

export default function InteriorContent() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title="Best Interior Painting Vancouver | Top-Rated Results."
        subtitle="Premier Residential & Commercial Excellence"
        image="/images/generated/project_commercial.png"
        mask="mask-brush-1"
      />

      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <ScrollReveal direction="left">
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '30px' }}>Vancouver's Top-Rated Interior Service.</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '20px' }}>
                For the discerning homeowners of Shaughnessy and Coal Harbour, we provide interior painting services that transcend the ordinary. Our focus is on museum-grade precision and curated color transitions that define luxury living.
              </p>
              <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px', marginTop: '40px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '15px' }}>The Pixo Finish</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>We use proprietary application techniques that eliminate brush marks and ensure a flawless, uniform matte or satin finish across all surfaces.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" scale={true}>
            <div style={{ position: 'relative', height: '600px' }}>
              <div className="mask-brush-2" style={{ position: 'absolute', inset: 0 }}>
                <Image 
                  src="/images/generated/project_living.png" 
                  alt="Interior Detail" 
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
