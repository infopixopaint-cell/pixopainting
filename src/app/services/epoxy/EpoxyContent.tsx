'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';

export default function EpoxyContent() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title="Industrial Grade Epoxy Floor Coatings | Best In BC"
        subtitle="Flawless Garage & Commercial Floor Transformations"
        image="/images/generated/gallery_hero.png"
        mask="mask-brush-3"
      />

      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <ScrollReveal direction="left">
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '30px' }}>High-Performance Concrete Flooring.</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '20px' }}>
                Transform your dusty garage or warehouse slab into an elite, chemical-resistant showroom. Our industrial concrete preparation involves thorough diamond-grinding to ensure the absolute strongest bond for your epoxy or polyaspartic system.
              </p>
              <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px', marginTop: '40px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '15px' }}>Slip & Stain Resistant</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Engineered to survive BC winters, road salts, oil drips, and hot tire pick-up. Customize your coating with full decorative flake, solid tones, or luxury metallic pigments.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" scale={true}>
            <div style={{ position: 'relative', height: '600px' }}>
              <div className="mask-brush-4" style={{ position: 'absolute', inset: 0 }}>
                <Image 
                  src="/images/generated/project_exterior.png" 
                  alt="Epoxy Detail" 
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
