'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedBrushReveal from '@/components/AnimatedBrushReveal';

const SERVICES = [
  {
    title: "Interior Painting",
    description: "Museum-grade wall finishes and curated color transitions.",
    image: "/images/generated/project_living.png",
    href: "/services/interior",
    mask: "mask-brush-1"
  },
  {
    title: "Exterior Protection",
    description: "Performance coatings engineered for coastal survival.",
    image: "/images/generated/project_exterior.png",
    href: "/services/exterior",
    mask: "mask-brush-2"
  },
  {
    title: "Wood Staining",
    description: "Preserving the organic soul of your architectural timber.",
    image: "/images/generated/project_deck.png",
    href: "/services/staining",
    mask: "mask-brush-4"
  },
  {
    title: "Cabinet Refinishing",
    description: "Factory-grade lacquer finishes for a complete kitchen revival.",
    image: "/images/generated/project_kitchen.png",
    href: "/services/cabinets",
    mask: "mask-brush-3"
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);

  return (
    <main ref={containerRef} style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <section className="canvas-texture" style={{ 
        height: 'var(--hero-height, 100dvh)', 
        minHeight: '550px',
        margin: 'clamp(10px, 2vw, 20px)', 
        position: 'relative', 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 'clamp(20px, 4vw, 40px)' 
      }}>
        <style jsx>{`
          section { --hero-height: calc(100dvh - clamp(20px, 4vw, 40px)); }
          @media (max-width: 768px) {
            section { --hero-height: 85dvh; }
          }
        `}</style>
        <motion.div className="mask-brush-hero" style={{ scale: heroScale, opacity: heroOpacity, position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image 
            src="/images/generated/gallery_hero.png" 
            alt="Luxury Home Painting Vancouver - Premium Exterior Finish" 
            fill 
            className="image-masterpiece"
            priority
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white', padding: '0 var(--fluid-padding-container)' }}>
          <ScrollReveal direction="down" duration={1.2}>
            <p style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '20px', fontWeight: 500 }}>
              Premium Painting & Coating in Canada, BC & Lower Mainland
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} duration={1.2}>
            <h1 style={{ fontSize: 'var(--fluid-h1)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.9, marginBottom: '2.5rem' }}>
              Pixo Painting: Best Painting & Coating in Canada & BC
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="liquid-glass" style={{ padding: '18px 40px', borderRadius: '40px', color: 'var(--foreground)', fontWeight: 600, fontSize: '1.1rem' }}>
                Secure Elite Consultation
              </Link>
              <Link href="/gallery" style={{ padding: '18px 40px', borderRadius: '40px', border: '1px solid white', color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>
                View Masterpieces
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', maxWidth: '1400px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ marginBottom: 'clamp(40px, 8vw, 80px)', maxWidth: '900px' }}>
            <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '2rem' }}>
              Quality is the only currency.
            </h2>
            <p style={{ fontSize: 'var(--fluid-p)', opacity: 0.7, lineHeight: 1.6 }}>
              Serving Vancouver and Delta&apos;s most prestigious residential enclaves, from West Point Grey to Sunshine Hills. We specialize in museum-grade painting & coating for those who demand perfection over price.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 40vw, 450px), 1fr))', 
          gap: 'clamp(40px, 6vw, 80px)' 
        }}>
          {SERVICES.map((service, index) => (
            <ScrollReveal 
              key={service.title}
              delay={index % 2 * 0.15}
              scale={true}
            >
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <div className={service.mask} style={{ position: 'relative', width: '100%', aspectRatio: 'clamp(4/5, 1/1, 16/10)', overflow: 'hidden' }}>
                  <Image 
                    src={service.image} 
                    alt={`${service.title} Vancouver - Pixo Painting Precision`} 
                    fill 
                    className="image-masterpiece" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                </div>
                <div style={{ padding: '2rem 0', width: '100%' }}>
                  <h3 style={{ fontSize: 'var(--fluid-h3)', fontWeight: 600, marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ opacity: 0.7, fontSize: '1rem', marginBottom: '2rem', maxWidth: '400px' }}>{service.description}</p>
                  <Link href={service.href} style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--foreground)', borderBottom: '2px solid black', paddingBottom: '4px' }}>
                    EXPLORE SERVICE
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Technical Excellence */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', background: 'var(--foreground)', color: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <ScrollReveal direction="left" className="order-2 md:order-1">
              <div>
                 <span style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', display: 'block' }}>Precision Repainting</span>
                 <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Revitalise With Technical Rigour.</h2>
                 <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, marginBottom: '2.5rem' }}>
                   Our repaint process isn&apos;t just about a new coat – it&apos;s a full surface restoration. We focus on the structural integrity of the finish.
                 </p>
                 <div style={{ display: 'grid', gap: '2rem' }}>
                    {[
                      { label: "01. Surface Preparation", detail: "Deep cleaning and removal of existing contaminants." },
                      { label: "02. Manual Sanding", detail: "Hand-sanding for superior adhesion and smooth texture." },
                      { label: "03. Premium Priming", detail: "Specialised primers tailored to the material substrate." }
                    ].map((step, idx) => (
                      <ScrollReveal key={step.label} delay={idx * 0.1}>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
                          <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>{step.label}</p>
                          <p style={{ opacity: 0.6, fontSize: '0.95rem' }}>{step.detail}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                 </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" scale={true} className="order-1 md:order-2">
              <div style={{ position: 'relative', aspectRatio: '4/5' }}>
                <div className="mask-brush-hero" style={{ position: 'absolute', inset: 0 }}>
                  <Image 
                    src="/images/generated/about_heritage.png" 
                    alt="Artisan Craftsmanship - Heritage Home Painting Vancouver" 
                    fill 
                    className="image-masterpiece" 
                    style={{ filter: 'contrast(1.1)' }} 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: 'clamp(30px, 6vw, 100px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <ScrollReveal className="flex-1 min-w-[280px]" style={{ paddingTop: 'clamp(0px, 4vw, 60px)' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'black', opacity: 0.4, marginBottom: '1.5rem', display: 'block' }}>Residential Excellence</span>
              <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Your Home, Reimagined.</h2>
              <p style={{ fontSize: 'var(--fluid-p)', lineHeight: 1.8, opacity: 0.7, marginBottom: '2rem' }}>
                We understand that your home is your sanctuary. Our residential services go beyond just a coat of paint.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {[
                  { title: "Colour Theory", text: "Professional palette curation for architectural harmony." },
                  { title: "Project Flow", text: "Minimal disruption with strict timeline management." }
                ].map((item, idx) => (
                  <ScrollReveal key={item.title} delay={idx * 0.2}>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>{item.title}</p>
                      <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{item.text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <div style={{ flex: '1 1 300px', minWidth: '280px', height: 'clamp(380px, 50vw, 700px)' }}>
            <AnimatedBrushReveal imageSrc="/images/generated/project_living.png" />
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
          <ScrollReveal direction="left" scale={true} className="flex-1 min-w-[300px]">
            <div style={{ position: 'relative' }}>
              <div className="mask-brush-2" style={{ width: '100%', aspectRatio: '1/1', position: 'relative', boxShadow: '0 40px 100px rgba(0,0,0,0.05)' }}>
                <Image 
                  src="/images/generated/project_commercial.png" 
                  alt="Premium Commercial Painting Vancouver & Richmond" 
                  fill 
                  className="image-masterpiece" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex-1 min-w-[300px]">
            <div>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'black', opacity: 0.4, marginBottom: '1.5rem', display: 'block' }}>Commercial Operations</span>
              <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Professional Presence.</h2>
              <p style={{ fontSize: 'var(--fluid-p)', lineHeight: 1.8, opacity: 0.7, marginBottom: '2.5rem' }}>
                We specialize in commercial projects that demand efficiency.
              </p>
              <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
                {[
                  { title: "Retail & Hospitality", text: "High-traffic durability with premium aesthetic appeal." },
                  { title: "Corporate Offices", text: "Efficient delivery to minimize operational downtime." },
                  { title: "Industrial Coating", text: "Specialized finishes for high-durability environments." }
                ].map((item, idx) => (
                  <ScrollReveal key={item.title} delay={idx * 0.1}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                      <div style={{ marginTop: '5px', width: '12px', height: '12px', borderRadius: '3px', background: 'var(--foreground)', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>{item.title}</p>
                        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{item.text}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section - NEW for Authority */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', background: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: '1rem', display: 'block' }}>Validated Excellence</span>
              <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '20px' }}>Masterpiece Testimonials.</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '10px' }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#FBBC05', fontSize: '1.5rem' }}>★</span>)}
              </div>
              <p style={{ fontWeight: 600, fontSize: '1rem' }}>4.9/5 Based on 48+ Google Reviews</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { 
                name: "Alexander M.", 
                loc: "Vancouver, BC", 
                text: "The precision Pixo brought to our West Point Grey estate was museum-grade. They didn't just paint; they restored the architectural soul of the home.",
                project: "Interior Restoration"
              },
              { 
                name: "Sarah L.", 
                loc: "Delta, BC", 
                text: "Pixo's exterior coating survived two harsh coastal winters and still looks brand new. Best investment we've made for our home's longevity.",
                project: "Coastal Protection"
              },
              { 
                name: "Marcus K.", 
                loc: "Richmond, BC", 
                text: "Professional, efficient, and clean. The color theory consultation was a game-changer for our commercial office space.",
                project: "Commercial Finish"
              }
            ].map((review, idx) => (
              <ScrollReveal key={review.name} delay={idx * 0.15}>
                <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                   <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '30px', flex: 1 }}>&ldquo;{review.text}&rdquo;</p>
                   <div>
                     <p style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '4px' }}>{review.name}</p>
                     <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>{review.loc} • {review.project}</p>
                   </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK" target="_blank" style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--foreground)', borderBottom: '2px solid black', paddingBottom: '4px' }}>
              READ MORE ON GOOGLE →
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal scale={true}>
          <div className="liquid-glass" style={{ padding: 'clamp(40px, 8vw, 100px)', borderRadius: '60px' }}>
            <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '3rem' }}>The pixo painting & coating Standard.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', textAlign: 'left' }}>
              {[
                { title: "Sustainable Care", text: "We only use premium, eco-friendly paints that provide long-lasting protection for Vancouver's unique coastal environment." },
                { title: "Editorial Detail", text: "Our team works with architectural precision, ensuring the crispest lines and perfect gradients for BC's most prestigious homes." },
                { title: "Heritage Finish", text: "We treat every Canadian home as a legacy project, delivering results that stand the test of time and weather." }
              ].map((item, idx) => (
                <ScrollReveal key={item.title} delay={idx * 0.2}>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem' }}>{item.title}</h4>
                    <p style={{ opacity: 0.6, fontSize: '1rem', lineHeight: 1.5 }}>{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
      {/* Service Areas Section */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', background: 'rgba(0,0,0,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, textAlign: 'center', marginBottom: '4rem' }}>Premier Service Areas.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
              {[
                { city: "Vancouver", href: "/vancouver-painting", desc: "Specializing in high-end residential estates and architectural coatings in West Point Grey, Kitsilano, and Shaughnessy." },
                { city: "Delta", href: "/delta-painting", desc: "Top-rated professional painting & coating in Delta, Canada with durable coastal protection for North Delta, Ladner, and Tsawwassen." },
                { city: "Surrey", href: "/surrey-painting", desc: "Premium house painting services for modern townhomes, luxury estates, and commercial structures across South Surrey." },
                { city: "Burnaby", href: "/burnaby-painting", desc: "Expert interior and exterior finishing for modern developments and heritage homes in Deer Lake and Metrotown." },
                { city: "Richmond", href: "/richmond-painting", desc: "Performance coatings engineered to withstand salt air and coastal conditions for Richmond's luxury properties." }
              ].map((area) => (
                <Link key={area.city} href={area.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                  <div className="liquid-glass" style={{ padding: '30px', borderRadius: '24px', background: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', height: '100%', transition: 'transform 0.3s ease' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>{area.city}</h4>
                    <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.5 }}>{area.desc}</p>
                    <p style={{ marginTop: '15px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--foreground)' }}>VIEW {area.city.toUpperCase()} SERVICES →</p>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: '60px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: '2rem' }}>Vancouver Neighborhoods We Serve</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                {["Kitsilano", "Shaughnessy", "West Point Grey", "Coal Harbour", "Kerrisdale", "Mount Pleasant", "South Granville", "Downtown Vancouver"].map((hood) => (
                  <span key={hood} style={{ padding: '10px 20px', borderRadius: '50px', background: 'rgba(0,0,0,0.05)', fontSize: '0.85rem', fontWeight: 600 }}>
                    {hood}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', maxWidth: '1000px', margin: '0 auto' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, textAlign: 'center', marginBottom: '4rem' }}>Expert Insights: Best Painting Practices.</h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {[
              { 
                q: "What makes Pixo Painting the best painting service in Canada?", 
                a: "We combine architectural precision with museum-grade finishes. As Canada's premier service, we focus on technical substrate preparation and use performance coatings specifically engineered for the Canadian climate, serving British Columbia with elite quality." 
              },
              { 
                q: "Where can I find top-rated painters near me in Canada or BC?", 
                a: "Pixo Painting serves all of Canada with a primary focus on British Columbia, including Vancouver, Burnaby, and Richmond. We are known as the premier choice for high-end residential and commercial projects nationwide." 
              },
              { 
                q: "Why should I choose a premier service over a cheap painting contractor?", 
                a: "Quality is an investment. Our 'Quality over Price' philosophy ensures a finish that lasts 3x longer, uses eco-friendly materials, and increases your property's value significantly." 
              }
            ].map((faq, idx) => (
              <div key={idx} style={{ padding: '2rem', borderRadius: '24px', background: 'white', border: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>{faq.q}</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', background: 'white', position: 'relative', overflow: 'hidden' }}>
        <style jsx>{`
          .heritage-bg {
            position: absolute;
            inset: 0;
            opacity: 0.15;
            pointer-events: none;
            z-index: 0;
          }
        `}</style>
        <div className="heritage-bg">
            <Image src="/images/generated/about_hero.png" alt="Heritage" fill style={{ objectFit: 'cover' }} />
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up">
            <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '2.5rem' }}>
              Ready to redefine<br/>your legacy?
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, opacity: 0.7, marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
              Experience the intersection of architectural precision and museum-grade finishes. Consultation is the first step toward perfection.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="liquid-glass" style={{ padding: '20px 50px', borderRadius: '50px', background: 'black', color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>
                Secure Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
