'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ArtisticBlobs from '@/components/ArtisticBlobs';

const PILLARS = [
  {
    title: "Substrate Science",
    detail: "We don't just paint surfaces; we analyze them. From hydration levels in timber to pH balance in masonry, we ensure the perfect foundation.",
    icon: "🔬"
  },
  {
    title: "Color Choreography",
    detail: "Our editorial color theory goes beyond swatches. We study light behavior within your specific architecture to curating timeless palettes.",
    icon: "🎨"
  },
  {
    title: "Optical Perfection",
    detail: "Zero-defect finishes achieved through museum-grade lighting checks and a multi-stage artisanal finishing process.",
    icon: "✨"
  }
];

export default function AboutPage() {
  return (
    <main style={{ background: 'var(--background)', position: 'relative' }}>
      <ArtisticBlobs />
      
      {/* 1. Initial Hero */}
      <PageHero 
        title="Precision and Legacy."
        subtitle="The pixo painting & coating Story"
        image="/images/generated/about_hero.png"
        mask="mask-brush-hero"
      />

      {/* 2. Entering the Detail (Directly below hero, filling the space organically) */}
      <section style={{ padding: '80px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal distance={60}>
            <div style={{ position: 'relative', height: 'clamp(300px, 60vh, 600px)', width: '100%', borderRadius: 'clamp(20px, 4vw, 40px)', overflow: 'hidden' }}>
              <div className="mask-brush-3" style={{ position: 'absolute', inset: 0 }}>
                <Image 
                  src="/images/generated/about_portal.png" 
                  alt="The Masterpiece Brush" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
              <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'white' }}>
                <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.4em' }}>Entering the Detail...</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Central Narrative (Filling the intermediate space) */}
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal scale={true}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '30px' }}>
              We see the<br/>hidden detail.
            </h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, opacity: 0.7 }}>
              Founded on the principle that painting is not just a service, but a pursuit of architectural perfection. pixo painting & coating merges traditional craft with futurist aesthetics.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Pillars of Precision (Previously hidden in white space) */}
      <section style={{ padding: '40px 20px 150px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5em', opacity: 0.5 }}>Industrial standard</span>
                <h3 style={{ fontSize: '3rem', fontWeight: 850, marginTop: '10px', letterSpacing: '-0.02em' }}>Pillars of Precision</h3>
            </div>
          </ScrollReveal>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}>
            {PILLARS.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.1}>
                {/* Changed to Dark Theme Liquid Glass for High Aesthetics */}
                <div style={{ 
                    padding: '50px 40px', 
                    borderRadius: '40px',
                    background: 'var(--foreground)',
                    color: 'var(--background)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    height: '100%'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '25px' }}>{pillar.icon}</div>
                  <h4 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '20px' }}>{pillar.title}</h4>
                  <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: 1.7 }}>{pillar.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Static Content (Editorial Sections) */}
      <section style={{ position: 'relative', zIndex: 20, background: 'var(--background)', padding: '100px 0 150px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <ScrollReveal direction="left">
              <div>
                <h3 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '30px' }}>Our Heritage.</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '40px' }}>
                  With roots in Surrey and Squamish, we have built a reputation for excellence that spans the entire Greater Vancouver area. Our team consists of master painters who view every wall as a legacy.
                </p>
                <div style={{ display: 'flex', gap: 'clamp(20px, 5vw, 60px)', flexWrap: 'wrap' }}>
                  <div>
                    <h4 style={{ fontSize: '3rem', fontWeight: 800 }}>5+</h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years of Precision</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '3rem', fontWeight: 800 }}>300</h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Projects Completed</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" scale={true}>
              <div style={{ position: 'relative', height: 'clamp(400px, 60vh, 700px)' }}>
                <div className="mask-brush-2" style={{ position: 'absolute', inset: 0 }}>
                  <Image 
                    src="/images/generated/about_heritage.png" 
                    alt="Heritage Detail" 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Artistic Gallery Section */}
      <section style={{ position: 'relative', zIndex: 20, background: 'var(--background)', padding: '0 0 150px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <h3 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 800, letterSpacing: '-0.02em' }}>Precision in Action.</h3>
            </div>
          </ScrollReveal>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
            gap: '50px',
            alignItems: 'start'
          }}>
            <ScrollReveal scale={true}>
              <div style={{ position: 'relative', height: 'clamp(400px, 50vh, 550px)' }}>
                <div className="mask-brush-1" style={{ position: 'absolute', inset: 0 }}>
                  <Image src="/images/generated/project_living.png" alt="Interior" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'white' }}>
                    <p style={{ fontWeight: 800, fontSize: '1.4rem' }}>Museum Grade Finish</p>
                    <p style={{ opacity: 0.7 }}>Residential Architecture</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal scale={true} delay={0.2}>
              <div style={{ position: 'relative', height: 'clamp(450px, 60vh, 650px)', marginTop: 'clamp(40px, 8vw, 80px)' }}>
                <div className="mask-brush-3" style={{ position: 'absolute', inset: 0 }}>
                  <Image src="/images/generated/project_commercial.png" alt="Commercial" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '50px', right: '50px', textAlign: 'right', color: 'white' }}>
                    <p style={{ fontWeight: 800, fontSize: '1.4rem' }}>Architectural Coatings</p>
                    <p style={{ opacity: 0.7 }}>Commercial Assets</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal scale={true} delay={0.4}>
              <div style={{ position: 'relative', height: 'clamp(400px, 50vh, 550px)' }}>
                <div className="mask-brush-2" style={{ position: 'absolute', inset: 0 }}>
                  <Image src="/images/generated/detail_staining.png" alt="Timber" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'white' }}>
                    <p style={{ fontWeight: 800, fontSize: '1.4rem' }}>Heritage Staining</p>
                    <p style={{ opacity: 0.7 }}>Timber Preservation</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. Global CTA transition */}
      <section style={{ padding: '50px var(--fluid-padding-container) 200px', background: 'var(--background)' }}>
          <ScrollReveal scale={true}>
              <div className="liquid-glass" style={{ padding: '100px 60px', borderRadius: '60px', textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
                  <h2 style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: 850, marginBottom: '2.5rem', letterSpacing: '-0.03em' }}>Crafting architectural legacies.</h2>
                  <p style={{ fontSize: '1.3rem', opacity: 0.6, marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>Join the ranks of Vancouver&apos;s most distinguished properties. Extraordinary precision, engineered for you.</p>
                  <Link href="/contact" style={{ display: 'inline-block', background: 'var(--foreground)', color: 'var(--background)', padding: '22px 70px', borderRadius: '50px', fontWeight: 800, fontSize: '1.2rem', textDecoration: 'none', transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)' }} className="touch-feedback">
                    Start Your Project
                  </Link>
              </div>
          </ScrollReveal>
      </section>
    </main>
  );
}
