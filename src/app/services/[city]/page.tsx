'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function CityPaintingPage({ params }: { params: { city: string } }) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title={`Premier Painting & Coating in ${city}.`} 
        subtitle={`Museum-Grade Architectural Finishing and Protection in ${city}`}
        image="/images/generated/gallery_hero.png"
        mask="mask-brush-hero"
      />

      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '20px' }}>
            Elevating {city}&apos;s Architectural Landscape.
          </h2>
          <p style={{ fontSize: 'var(--fluid-p)', opacity: 0.7, lineHeight: 1.8, maxWidth: '800px', margin: '0 auto 40px' }}>
            Pixo Painting & Coating brings its national standard of excellence to {city}. We specialize in high-end residential and commercial projects that demand technical precision and editorial-grade finishes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginTop: '60px', textAlign: 'left' }}>
            {[
              { title: "Technical Precision", text: `Substrate preparation engineered for ${city}&apos;s specific environmental conditions.` },
              { title: "Luxury Finishes", text: "Museum-grade results for the most prestigious properties in the region." },
              { title: "National Standards", text: "Part of Canada&apos;s premier painting network, ensuring consistent elite quality." }
            ].map(item => (
              <div key={item.title} className="liquid-glass" style={{ padding: '30px', borderRadius: '24px' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div style={{ marginTop: '80px' }}>
          <Link href="/contact" className="liquid-glass" style={{ padding: '20px 60px', borderRadius: '50px', background: 'black', color: 'white', fontWeight: 700, fontSize: '1.2rem' }}>
            Book {city} Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
