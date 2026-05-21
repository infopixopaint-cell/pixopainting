'use client';

import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CabinetsContent() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title="Best Cabinet Refinishing Vancouver | Top-Rated Results."
        subtitle="Premier Factory-Grade Kitchen Transformations"
        image="/images/generated/project_kitchen.png"
        mask="mask-brush-3"
      />

      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '30px' }}>Vancouver's Top-Rated Kitchen Revival.</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '20px' }}>
              For the high-end kitchens of Vancouver and Richmond, replacement isn&apos;t always the answer—refinement is. Our cabinet services deliver a factory-grade lacquer finish that transforms your architectural space with absolute precision and durability.
            </p>
            <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px', marginTop: '40px' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '15px' }}>Durable Lacquer</h4>
              <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>We use specialized industrial coatings that provide superior scratch resistance and an easy-to-clean surface, ensuring your kitchen looks "new" for a decade.</p>
            </div>
          </motion.div>
          <div style={{ position: 'relative', height: '600px' }}>
            <div className="mask-brush-4" style={{ position: 'absolute', inset: 0 }}>
              <Image 
                src="/images/generated/detail_cabinet.png" 
                alt="Cabinet Detail" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
