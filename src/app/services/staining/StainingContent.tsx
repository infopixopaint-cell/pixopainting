'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';

export default function StainingContent() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title="Best Wood Staining Vancouver | Top-Rated Protection."
        subtitle="Premier Architectural Timber Preservation"
        image="/images/generated/project_deck.png"
        mask="mask-brush-4"
      />

      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <ScrollReveal direction="left">
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '30px' }}>Vancouver's Top-Rated Staining Service.</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '20px' }}>
                From West Coast Contemporary homes in Burnaby to Heritage estates in Vancouver, we preserve the organic beauty of architectural timber. Our specialized staining process provides deep-penetrating protection designed specifically for the BC climate.
              </p>
              <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px', marginTop: '40px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '15px' }}>Premium Sealants</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>We use professional-grade oil and water-based stains that offer UV protection and moisture resistance, ensuring your decks, fences, and siding remain vibrant.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" scale={true}>
            <div style={{ position: 'relative', height: '600px' }}>
              <div className="mask-brush-1" style={{ position: 'absolute', inset: 0 }}>
                <Image 
                  src="/images/generated/detail_staining.png" 
                  alt="Wood Detail" 
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
