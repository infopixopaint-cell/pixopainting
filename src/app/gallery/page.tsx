'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Play, X, ArrowRight, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

const galleryItems = [
  {
    title: "Vancouver Estate Precision",
    category: "Exterior",
    location: "Vancouver, BC",
    image: "/images/generated/gallery_delta_ext_1.png",
    type: "video",
    description: "A complete exterior overhaul of a multi-storey estate in Shaughnessy. Detailed surface prep and premium weather-shield coating for architectural preservation."
  },
  {
    title: "Open-Plan Modernism",
    category: "Interior",
    location: "Delta, BC",
    image: "/images/generated/gallery_delta_int_1.png",
    type: "image",
    description: "Ultra-matte interior finishes for a modern open-concept living space, optimizing natural light reflection."
  },
  {
    title: "White Shaker Revival",
    category: "Cabinets",
    location: "Ladner, BC",
    image: "/images/generated/gallery_delta_cab_1.png",
    type: "image",
    description: "Factory-grade cabinet refinishing in a classic white shaker style. High-durability lacquer for a zero-defect surface."
  },
  {
    title: "Burnaby Deck Restoration",
    category: "Staining",
    location: "Burnaby, BC",
    image: "/images/generated/gallery_delta_stain_1.png",
    type: "video",
    description: "Deep-penetrating mahogany stain applied to a large cedar deck in Buckingham Heights, preserving the wood's organic texture against BC's humidity."
  },
  {
    title: "Sage Green Heritage",
    category: "Exterior",
    location: "Tsawwassen, BC",
    image: "/images/generated/gallery_delta_ext_3.png",
    type: "image",
    description: "Precision exterior painting for a two-storey heritage home, featuring a custom sage green palette with crisp white accents."
  },
  {
    title: "Master Bedroom Serenity",
    category: "Interior",
    location: "North Delta, BC",
    image: "/images/generated/gallery_delta_int_2.png",
    type: "image",
    description: "Sophisticated warm greige palette with precision trim work, creating a calm and expansive master suite."
  },
  {
    title: "Richmond Modern Contrast",
    category: "Cabinets",
    location: "Richmond, BC",
    image: "/images/generated/gallery_delta_cab_2.png",
    type: "video",
    description: "Dramatic navy blue cabinet refinishing in a Terra Nova estate, transforming a traditional kitchen into a designer showcase with factory-grade durability."
  },
  {
    title: "Rancher Transformation",
    category: "Exterior",
    location: "Delta, BC",
    image: "/images/generated/gallery_delta_ext_2.png",
    type: "image",
    description: "Total exterior repaint of a classic Delta rancher, moving from dated beige to a modern architectural charcoal."
  },
  {
    title: "Lagoon View Estate",
    category: "Exterior",
    location: "Delta, BC",
    image: "/images/generated/gallery_delta_ext_4.png",
    type: "image",
    description: "Surrey-Delta border estate featuring a multi-tone exterior scheme designed for long-term weather resistance."
  },
  {
    title: "Precision Trim Work",
    category: "Interior",
    location: "Delta, BC",
    image: "/images/generated/detail_interior.png",
    type: "image",
    description: "Macro-level focus on our brushwork: clean lines, no overspray, and perfect transitions."
  },
  {
    title: "Artisan Wood Deck",
    category: "Staining",
    location: "Delta, BC",
    image: "/images/generated/project_deck.png",
    type: "video",
    description: "Showcasing the depth of color and protection achieved with our signature staining process."
  },
  {
    title: "Architectural Detail",
    category: "Exterior",
    location: "Ladner, BC",
    image: "/images/generated/gallery_delta_ext_6.png",
    type: "image",
    description: "Highlighting the brush-applied precision on decorative dental molding and gable details."
  },
  {
    title: "Kitchen Transformation",
    category: "Cabinets",
    location: "Vancouver, BC",
    image: "/images/generated/project_kitchen.png",
    type: "image",
    description: "From dated oak to sophisticated matte navy: a complete aesthetic overhaul without the cost of replacement."
  },
  {
    title: "Matte Lacquer Finish",
    category: "Cabinets",
    location: "Delta, BC",
    image: "/images/generated/detail_cabinet.png",
    type: "image",
    description: "Close-up of our cabinet finish: zero orange peel, high chemical resistance, and incredibly smooth to the touch."
  },
  {
    title: "Exterior Texture",
    category: "Exterior",
    location: "Surrey, BC",
    image: "/images/generated/detail_exterior.png",
    type: "image",
    description: "A close look at how our coatings bond with cedar shakes, providing both color and breathable protection."
  },
  {
    title: "Surface Restoration",
    category: "Repaint",
    location: "Delta, BC",
    image: "/images/generated/gallery_delta_restoration_detail.png",
    type: "image",
    description: "Preparing ancient wood surfaces for modern paint adhesion: our secret to longevity."
  },
  {
    title: "Timber Preservation",
    category: "Staining",
    location: "Delta, BC",
    image: "/images/generated/detail_staining.png",
    type: "image",
    description: "Detailing the intricate staining of architectural timber gables and beams."
  }
];

export default function GalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<typeof galleryItems[0] | null>(null);

  return (
    <main style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <PageHero 
        title="Luxury Painting Portfolio Vancouver."
        subtitle="A Showcase of Architectural Excellence"
        image="/images/generated/gallery_hero.png"
        mask="mask-brush-3"
      />

      {/* Interactive Cinematic Preview Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1200px',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 50px 100px rgba(0,0,0,0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedVideo.image} 
                alt={selectedVideo.title} 
                fill 
                style={{ objectFit: 'cover', opacity: 0.8 }} 
              />
              
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(20px, 5vw, 60px)' }}>
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <span style={{ textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                        {selectedVideo.category}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                        <MapPin size={14} />
                        {selectedVideo.location}
                      </div>
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '20px' }}>{selectedVideo.title}</h3>
                    <p style={{ color: 'white', opacity: 0.7, maxWidth: '600px', fontSize: '1.1rem', lineHeight: 1.6 }}>{selectedVideo.description}</p>
                  </motion.div>
                </div>
                
                <div style={{ position: 'absolute', top: 'clamp(20px, 4vw, 40px)', right: 'clamp(20px, 4vw, 40px)', display: 'flex', gap: '20px' }}>
                  <button onClick={() => setSelectedVideo(null)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '12px', borderRadius: '50%', color: 'white', cursor: 'pointer' }}>
                    <X size={24} />
                  </button>
                </div>

                <div style={{ position: 'absolute', left: 'clamp(30px, 6vw, 60px)', top: 'clamp(30px, 6vw, 60px)' }}>
                    <div className="pulse-button" style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <Play fill="black" size={24} />
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 30vw, 400px), 1fr))', 
          gap: 'clamp(40px, 6vw, 80px)' 
        }}>
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={(index % 3) * 0.1} scale={true}>
              <div 
                style={{ cursor: 'pointer', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}
                onClick={() => {
                  if (item.type === 'video') setSelectedVideo(item);
                }}
              >
                <div 
                  className="mask-brush-hero" 
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    aspectRatio: '1/1', 
                    overflow: 'hidden'
                  }}
                >
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="image-masterpiece"
                  />
                  
                  {item.type === 'video' && (
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      background: 'rgba(0,0,0,0.1)'
                    }}>
                      <div className="liquid-glass" style={{ padding: '16px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}>
                        <Play size={24} fill="white" color="white" />
                      </div>
                    </div>
                  )}
                  
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
                  
                  <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '8px' }}>
                    <span style={{ background: 'rgba(255,255,255,0.9)', color: '#000', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', padding: '5px 12px', borderRadius: '20px' }}>
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div style={{ padding: '1.2rem 0' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '6px' }}>{item.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.5, fontSize: '0.85rem' }}>
                    <MapPin size={14} />
                    {item.location}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Aesthetic CTA */}
      <section style={{ padding: '0 var(--fluid-padding-container) 120px', textAlign: 'center' }}>
          <ScrollReveal scale={true}>
              <div className="liquid-glass" style={{ padding: '80px 40px', borderRadius: '50px', maxWidth: '1000px', margin: '0 auto' }}>
                  <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Your vision, our precision.</h2>
                  <p style={{ fontSize: '1.2rem', opacity: 0.6, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>Join the collection of Vancouver&apos;s most distinguished residences. Let&apos;s create your architectural legacy together.</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: '#000', color: '#fff', padding: '20px 60px', borderRadius: '40px', fontWeight: 700, fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}
                  >
                    Start Your Project
                  </motion.button>
              </div>
          </ScrollReveal>
      </section>
    </main>
  );
}
