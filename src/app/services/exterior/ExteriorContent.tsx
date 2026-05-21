'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

const GALLERY_IMAGES = [
  {
    src: '/images/generated/exterior_canada_1.png',
    alt: 'Craftsman Home Exterior Painting - Surrey BC',
    label: 'Craftsman Precision',
    sub: 'Surrey, BC',
    mask: 'mask-brush-1',
  },
  {
    src: '/images/generated/exterior_canada_2.png',
    alt: 'Navy Blue Craftsman Home - Vancouver BC',
    label: 'Heritage Repaint',
    sub: 'Vancouver, BC',
    mask: 'mask-brush-2',
  },
  {
    src: '/images/generated/exterior_canada_3.png',
    alt: 'Victorian Heritage Home - Delta BC',
    label: 'Victorian Revival',
    sub: 'Delta, BC',
    mask: 'mask-brush-3',
  },
  {
    src: '/images/generated/exterior_canada_4.png',
    alt: 'Professional Painter at Work - BC',
    label: 'Artisan Touch',
    sub: 'Greater Vancouver',
    mask: 'mask-brush-4',
  },
  {
    src: '/images/generated/exterior_canada_5.png',
    alt: 'West Coast Luxury Home - Squamish BC',
    label: 'West Coast Luxury',
    sub: 'Squamish, BC',
    mask: 'mask-brush-hero',
  },
];

export default function ExteriorContent() {
  return (
    <main style={{ background: 'var(--background)' }}>
      {/* Hero */}
      <PageHero
        title="Best Exterior Painting Vancouver | Top-Rated Protection."
        subtitle="Premier Durable Protection & Aesthetic Excellence"
        image="/images/generated/exterior_canada_1.png"
        mask="mask-brush-2"
      />

      {/* Intro Section */}
      <section style={{ padding: '100px var(--fluid-padding-container)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <ScrollReveal direction="left" scale={true}>
            <div style={{ position: 'relative', height: '600px' }}>
              <div className="mask-brush-2" style={{ position: 'absolute', inset: 0 }}>
                <Image
                  src="/images/generated/exterior_canada_5.png"
                  alt="West Coast Luxury Exterior in Vancouver"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: '30px', left: '30px', color: 'white' }}>
                <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>West Coast Architecture</p>
                <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Vancouver, BC</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: '1.5rem', display: 'block' }}>
                Exterior Excellence
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '30px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Best Rated Service in Vancouver,<br />Burnaby & Richmond.
              </h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '20px' }}>
                From the salt air of Richmond to the lush heights of Burnaby, our exterior finishes are engineered to survive the BC coast. We provide high-performance coatings that shield your architectural investment against the elements while maintaining a pristine, luxury aesthetic.
              </p>
              <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px', marginTop: '40px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '15px' }}>Weather-Seal Technology</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Our multi-stage preparation process ensures maximum adhesion and a finish that resists peeling, fading, and mildew for years — even in BC's toughest coastal conditions.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
                {[
                  { label: 'Surface Prep', detail: 'Power washing, scraping & sanding to bare wood.' },
                  { label: 'Premium Primers', detail: 'Bonding primers tailored to your siding material.' },
                  { label: 'Colour Consult', detail: 'Expert palette matching for lasting curb appeal.' },
                  { label: '2-Year Warranty', detail: 'We stand behind every stroke we make.' },
                ].map((item) => (
                  <div key={item.label} style={{ borderLeft: '2px solid var(--foreground)', paddingLeft: '15px' }}>
                    <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '5px' }}>{item.label}</p>
                    <p style={{ opacity: 0.5, fontSize: '0.8rem', lineHeight: 1.5 }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-Width Feature Image */}
      <section style={{ padding: '0 var(--fluid-padding-container) 100px' }}>
        <ScrollReveal scale={true}>
          <div style={{ position: 'relative', width: '100%', height: 'clamp(400px, 55vw, 700px)', borderRadius: 'clamp(20px, 3vw, 40px)', overflow: 'hidden' }}>
            <Image
              src="/images/generated/exterior_canada_4.png"
              alt="Professional Exterior Painting at Work"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55), transparent)' }} />
            <div style={{ position: 'absolute', top: '50%', left: 'clamp(30px, 6vw, 80px)', transform: 'translateY(-50%)', color: 'white', maxWidth: '500px' }}>
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.7, marginBottom: '15px' }}>The Artisan Process</p>
              <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '20px' }}>
                Every brushstroke<br />is deliberate.
              </h3>
              <p style={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Our painters bring master-level craft to every project. No shortcuts. No spray-and-pray.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery Grid — 5 Images */}
      <section style={{ padding: '0 var(--fluid-padding-container) 120px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.4, display: 'block', marginBottom: '15px' }}>
              Our Work Across BC
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
              Real Homes. Real Results.
            </h2>
          </div>
        </ScrollReveal>

        {/* Top Row: 3 images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          {GALLERY_IMAGES.slice(0, 3).map((img, i) => (
            <ScrollReveal key={img.src} scale={true} delay={i * 0.1}>
              <div style={{ position: 'relative', height: 'clamp(280px, 35vw, 480px)', borderRadius: '24px', overflow: 'hidden' }}>
                <div className={img.mask} style={{ position: 'absolute', inset: 0 }}>
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: '25px', left: '25px', color: 'white' }}>
                  <p style={{ fontWeight: 700, fontSize: '1rem' }}>{img.label}</p>
                  <p style={{ opacity: 0.7, fontSize: '0.8rem' }}>{img.sub}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Row: 2 images wider */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px' }}>
          {GALLERY_IMAGES.slice(3, 5).map((img, i) => (
            <ScrollReveal key={img.src} scale={true} delay={i * 0.15}>
              <div style={{ position: 'relative', height: 'clamp(320px, 40vw, 520px)', borderRadius: '24px', overflow: 'hidden' }}>
                <div className={img.mask} style={{ position: 'absolute', inset: 0 }}>
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: '30px', left: '30px', color: 'white' }}>
                  <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>{img.label}</p>
                  <p style={{ opacity: 0.7, fontSize: '0.85rem' }}>{img.sub}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '0 var(--fluid-padding-container) 120px', textAlign: 'center' }}>
        <ScrollReveal scale={true}>
          <div className="liquid-glass" style={{ padding: 'clamp(50px, 8vw, 100px)', borderRadius: '60px', maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Ready to transform<br />your exterior?
            </h2>
            <p style={{ opacity: 0.6, fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Book a free consultation and get a precise quote tailored to your home's architecture and your vision.
            </p>
            <Link
              href="/contact"
              className="liquid-glass"
              style={{ display: 'inline-block', padding: '20px 55px', borderRadius: '50px', background: 'var(--foreground)', color: 'var(--background)', fontWeight: 700, fontSize: '1.1rem' }}
            >
              Get a Free Quote
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
