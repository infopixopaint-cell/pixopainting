'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const CANADA_CITIES = [
  { name: "Vancouver", href: "/vancouver-painting" },
  { name: "Delta", href: "/delta-painting" },
  { name: "Surrey", href: "/surrey-painting" },
  { name: "Burnaby", href: "/burnaby-painting" },
  { name: "Richmond", href: "/richmond-painting" },
  { name: "Langley", href: "/langley-painting" },
  { name: "Coquitlam", href: "/coquitlam-painting" },
  { name: "Tsawwassen", href: "/tsawwassen-painting" },
  { name: "Ladner", href: "/ladner-painting" },
  { name: "North Delta", href: "/north-delta-painting" },
  { name: "Toronto", href: "#" },
  { name: "Calgary", href: "#" },
  { name: "Edmonton", href: "#" },
  { name: "Ottawa", href: "#" },
  { name: "Montreal", href: "#" },
  { name: "Winnipeg", href: "#" },
  { name: "Victoria", href: "#" },
  { name: "Kelowna", href: "#" },
  { name: "Abbotsford", href: "#" },
];

const SERVICES = [
  { title: "Interior Painting Canada", desc: "Premium wall painting, color consulting, and luxury interior finishes for residential and commercial properties across Canada.", href: "/services/interior" },
  { title: "Exterior Painting Canada", desc: "Weatherproof architectural coatings engineered for the Canadian climate — salt air, freeze-thaw cycles, and high-humidity environments.", href: "/services/exterior" },
  { title: "Commercial Painting Canada", desc: "Licensed and WorkSafeBC insured commercial painters for offices, retail, warehouses, and strata buildings nationwide.", href: "/services/commercial" },
  { title: "Cabinet Painting Canada", desc: "Factory-grade lacquer and spray finishing for kitchen cabinets. Serving Vancouver, Delta, Surrey, Richmond, and all of BC.", href: "/services/cabinets" },
  { title: "Epoxy Floor Coating Canada", desc: "Industrial-grade epoxy and polyaspartic floor coatings for garages, warehouses, and commercial facilities.", href: "/services/epoxy" },
  { title: "Wood Staining BC", desc: "Deep-penetrating wood stain and sealant for decks, fences, siding, and architectural timber across British Columbia.", href: "/services/staining" },
];

export default function CanadaContent() {
  return (
    <main style={{ background: 'var(--background)' }}>
      {/* National Hero */}
      <section className="canvas-texture" style={{ 
        height: '70dvh', 
        minHeight: '500px',
        margin: '20px', 
        position: 'relative', 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '40px' 
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image 
            src="/images/generated/gallery_hero.png" 
            alt="Best Painting Company in Canada - Pixo Painting & Coating" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white', padding: '0 20px', maxWidth: '1000px' }}>
          <ScrollReveal direction="down">
            <p style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '20px', fontWeight: 500 }}>
              Canada's #1 Painting & Coating Company
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '2rem' }}>
              Best Painting Company in Canada
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
              Professional interior & exterior painting, commercial coating, cabinet refinishing & epoxy flooring. Serving Vancouver, Delta, Surrey, Richmond, Burnaby, Langley, Coquitlam & all of British Columbia.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ padding: '16px 40px', background: 'white', color: 'black', borderRadius: '50px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                Free Quote Near Me
              </Link>
              <Link href="tel:+12366322433" style={{ padding: '16px 40px', border: '2px solid white', color: 'white', borderRadius: '50px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                Call Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.4, marginBottom: '15px' }}>
              Full-Service Painting Across Canada
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Canada-Wide Painting Services
            </h2>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {SERVICES.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 0.08}>
              <Link href={svc.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div className="liquid-glass" style={{ padding: '35px', borderRadius: '24px', height: '100%', transition: 'transform 0.2s', cursor: 'pointer' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>{svc.title}</h3>
                  <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6 }}>{svc.desc}</p>
                  <p style={{ marginTop: '20px', fontWeight: 700, fontSize: '0.9rem' }}>Learn More →</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
          <ScrollReveal direction="left">
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>Why Pixo is Canada&apos;s Premier Painting Company</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '2rem' }}>
                Searching for the best painting and coating in Canada leads to one conclusion: precision matters. We have engineered our processes to survive the diverse Canadian climate, from the salt-air of the Pacific to the extreme temperature fluctuations across British Columbia.
              </p>
              <div style={{ display: 'grid', gap: '20px' }}>
                {[
                  "Licensed & WorkSafeBC Insured",
                  "Free Estimates Across Canada",
                  "5-Star Rated on Google",
                  "Museum-Grade Aesthetic Finishes",
                  "Industrial Coating Durability",
                  "Same-Day Service Available"
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'black', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '40px' }}>
                <Link href="/contact" style={{ display: 'inline-block', padding: '16px 40px', background: 'black', color: 'white', borderRadius: '50px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                  Get a Free Painting Estimate
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="liquid-glass" style={{ padding: '40px', borderRadius: '30px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Service Areas — BC & Canada</h3>
              <p style={{ opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
                Our headquarters are in Delta, BC. We are local painters serving all major cities across British Columbia and Canada.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {CANADA_CITIES.map(city => (
                  city.href !== "#" ? (
                    <Link key={city.name} href={city.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <span style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(0,0,0,0.05)', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, transition: 'background 0.2s' }}>
                        {city.name}
                      </span>
                    </Link>
                  ) : (
                    <span key={city.name} style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.05)', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>
                      {city.name}
                    </span>
                  )
                ))}
                <span style={{ padding: '8px 16px', background: 'black', color: 'white', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>
                  Canada-Wide
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Excellence */}
      <section style={{ padding: '100px 20px', background: '#000', color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal scale={true}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '3rem' }}>Engineered for the Great North.</h2>
            <p style={{ fontSize: '1.3rem', opacity: 0.6, lineHeight: 1.6, marginBottom: '4rem' }}>
              Our coatings aren&apos;t just paint. They are technical membranes designed for substrate protection and aesthetic longevity in Canada&apos;s most demanding environments.
            </p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginTop: '60px' }}>
            {[
              { title: "Canadian VOC Compliance", text: "Meeting the strictest environmental standards for air quality and sustainability across all provinces." },
              { title: "All-Season Application", text: "Specialized application protocols for the diverse Canadian climate, from coastal humidity to arctic dry." },
              { title: "National Safety Standards", text: "Fully insured and compliant with national safety regulations and building codes." }
            ].map(standard => (
              <ScrollReveal key={standard.title}>
                <div style={{ textAlign: 'left', padding: '30px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px' }}>
                  <h4 style={{ fontWeight: 700, marginBottom: '15px' }}>{standard.title}</h4>
                  <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>{standard.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div style={{ marginTop: '80px' }}>
              <Link href="/contact" style={{ padding: '20px 60px', background: 'white', color: 'black', borderRadius: '50px', fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none' }}>
                Get a Free Painting Quote Near Me
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
