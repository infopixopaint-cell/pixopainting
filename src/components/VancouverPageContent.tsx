'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

const VANCOUVER_SPECIFIC_SERVICES = [
  {
    title: "Vancouver Interior Painting",
    description: "Premium interior finishing for Vancouver's luxury condos and heritage estates.",
    image: "/images/generated/project_living.png",
    href: "/services/interior"
  },
  {
    title: "Vancouver Exterior Coating",
    description: "Architectural coatings engineered for the specific humidity and salt air of the Vancouver coast.",
    image: "/images/generated/project_exterior.png",
    href: "/services/exterior"
  }
];

export default function VancouverPageContent() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <PageHero 
        title="Best Painting & Coating in Vancouver." 
        subtitle="Top-Rated Professional Painters Serving All Vancouver Neighborhoods"
        image="/images/generated/gallery_hero.png"
        mask="mask-brush-hero"
      />

      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 style={{ fontSize: 'var(--fluid-h1)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-0.04em' }}>
              #1 Ranked Painting & Coating in Vancouver
            </h1>
            <p style={{ fontSize: 'var(--fluid-p)', opacity: 0.7, lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
              Experience the best painting & coating in Vancouver with Pixo Painting. Our team delivers museum-grade results for the city&apos;s most prestigious properties, ensuring 5-star quality and unmatched architectural protection.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {VANCOUVER_SPECIFIC_SERVICES.map((service, idx) => (
            <ScrollReveal key={service.title} delay={idx * 0.1}>
              <div className="liquid-glass" style={{ borderRadius: '30px', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '10px' }}>{service.title}</h3>
                  <p style={{ opacity: 0.6, marginBottom: '20px' }}>{service.description}</p>
                  <Link href={service.href} style={{ fontWeight: 700, color: 'var(--foreground)' }}>Explore Details →</Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Vancouver Success Stories */}
        <div style={{ marginTop: '80px' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '40px' }}>Vancouver Success Stories</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {[
                { name: "Julian R.", loc: "West Point Grey", text: "Pixo's interior work in our heritage home was flawless. They understood the architectural nuances of Vancouver estates perfectly." },
                { name: "Emily W.", loc: "Kitsilano", text: "Best exterior coating in Vancouver. Our home looks brand new even after the rainy season. Highly recommended!" }
              ].map((r, i) => (
                <div key={r.name} className="liquid-glass" style={{ padding: '30px', borderRadius: '24px' }}>
                  <p style={{ fontStyle: 'italic', marginBottom: '15px', opacity: 0.7 }}>&ldquo;{r.text}&rdquo;</p>
                  <p style={{ fontWeight: 700 }}>{r.name} — {r.loc}, Vancouver</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', background: 'var(--foreground)', color: 'var(--background)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '30px' }}>Why Vancouver Homeowners Choose Pixo.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'left' }}>
              <div>
                <h4 style={{ marginBottom: '10px' }}>Local Expertise</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>We understand Vancouver&apos;s unique climate and architectural styles, providing coatings that last.</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px' }}>Premium Quality</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>We use only the highest grade materials for a finish that is both beautiful and durable.</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px' }}>Trusted Service</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Top-rated by your neighbors for our attention to detail and professional conduct.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ padding: 'var(--fluid-section-gap) var(--fluid-padding-container)', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 'var(--fluid-h2)', fontWeight: 700, marginBottom: '40px' }}>Ready for a Vancouver Painting Transformation?</h2>
          <Link href="/contact" className="liquid-glass" style={{ padding: '20px 60px', borderRadius: '50px', background: 'black', color: 'white', fontWeight: 700, fontSize: '1.2rem' }}>
            Get a Free Quote in Vancouver
          </Link>
        </ScrollReveal>

        <div style={{ marginTop: '80px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '60px' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: '2rem' }}>Vancouver Neighborhoods Served by Pixo</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', textAlign: 'left' }}>
            {[
              "West Point Grey", "Kitsilano", "Shaughnessy", "Kerrisdale", "Coal Harbour", 
              "Mount Pleasant", "South Granville", "Downtown Vancouver", "Grandview-Woodland", 
              "Dunbar-Southlands", "Arbutus Ridge", "Fairview", "Olympic Village"
            ].map(hood => (
              <div key={hood} style={{ fontSize: '0.95rem', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--foreground)', opacity: 0.3 }} />
                {hood}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
