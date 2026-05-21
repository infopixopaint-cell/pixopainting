'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';

export default function RepaintPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title="Flawless Revision."
        subtitle="Repaint & Refresh"
        image="/images/generated/project_repaint.png"
        mask="mask-brush-hero"
      />

      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <ScrollReveal direction="left" scale={true}>
            <div style={{ position: 'relative', height: '600px' }}>
              <div className="mask-brush-2" style={{ position: 'absolute', inset: 0 }}>
                <Image 
                  src="/images/generated/repaint_service_detail.png" 
                  alt="Repaint Finish" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '30px' }}>Precision Revival.</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '20px' }}>
                Sometimes a space doesn't need to be changed—it just needs to be perfect. Our repaint services are for those who want to restore the pristine glow of their architectural investment without changing the soul of the home.
              </p>
              <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px', marginTop: '40px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '15px' }}>Seamless Blending</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>We pride ourselves on our ability to match existing finishes perfectly, ensuring that any refresh or repair is invisible to the eye.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

