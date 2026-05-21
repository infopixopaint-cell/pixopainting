import { Metadata } from 'next';
import LocalCityPage from '@/components/LocalCityPage';

export const metadata: Metadata = {
  title: "Best Painting Company in Langley BC | Pixo Painting",
  description: "Professional interior and exterior painting services in Langley BC. Trusted residential & commercial painters. Get a free quote today from Pixo Painting & Coating.",
  keywords: [
    "Best Painting Company in Langley BC",
    "painting and coating langley canada",
    "painting company langley bc",
    "house painters langley bc",
    "painting services langley",
    "cabinet painting langley",
    "professional painters langley",
    "local painters langley",
    "langley painting contractors"
  ],
  openGraph: {
    title: "Best Painting Company in Langley BC | Pixo Painting",
    description: "Professional interior and exterior painting services in Langley BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/langley-painting',
  }
};

const langleySchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixo Painting & Coating Langley BC",
    "image": "https://pixopainting.com/logo.PNG",
    "@id": "https://pixopainting.com/langley-painting",
    "url": "https://pixopainting.com/langley-painting",
    "telephone": "+12366322433",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9445 114st",
      "addressLocality": "Delta",
      "addressRegion": "BC",
      "postalCode": "V4C 5K9",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.1044",
      "longitude": "-122.6604"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Painting & Coating Langley BC",
    "description": "High-end interior, exterior, deck, and fence staining services across Langley, BC.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pixo Painting & Coating"
    },
    "areaServed": [
      { "@type": "City", "name": "Langley" },
      { "@type": "City", "name": "Walnut Grove" },
      { "@type": "City", "name": "Willoughby" },
      { "@type": "City", "name": "Fort Langley" },
      { "@type": "City", "name": "Brookswood" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "32"
    }
  }
];

export default function LangleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(langleySchema) }}
      />
      <LocalCityPage 
        city="Langley"
        customTitle="Painting & Coating Langley BC"
        showAddress={false}
        neighborhoods={["Walnut Grove", "Willoughby", "Fort Langley", "Brookswood", "Aldergrove", "Murrayville", "Fernridge"]}
        desc="Pixo Painting & Coating delivers high-end residential and commercial painting to Langley's growing enclaves. From modern open-concept interior repaints in Willoughby to heritage restoration coatings in historic Fort Langley, our artisan craftsmen guarantee long-lasting, flawless finishes."
      />
      
      {/* Neighborhood Authority Silos */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '40px' }}>Neighborhood Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { name: "Fort Langley", desc: "Specialized historic wood staining and heritage preservation coatings." },
            { name: "Willoughby", desc: "Modern townhouse exterior repaints and high-ceiling interior painting." },
            { name: "Walnut Grove", desc: "Comprehensive home restorations, drywall repairs, and cabinet spraying." }
          ].map(hood => (
            <div key={hood.name} className="liquid-glass" style={{ padding: '30px', borderRadius: '20px', textAlign: 'left' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>{hood.name} Painting</h4>
              <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{hood.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section for Langley SEO */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', background: 'rgba(0,0,0,0.02)', borderRadius: '40px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>Langley Painting FAQ</h2>
        <div style={{ display: 'grid', gap: '30px' }}>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>What makes Pixo the premium choice for Langley home painting?</h4>
            <p style={{ opacity: 0.7 }}>We don't skip prep-work. Our meticulous process includes multiple stages of manual sanding, custom priming, and dust-free execution. We use premium, low-odor eco-friendly paints perfect for Langley families.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>Do you provide deck and timber staining in Langley BC?</h4>
            <p style={{ opacity: 0.7 }}>Yes! Our wood staining service preserves the organic soul of your architectural timber, protecting fences, decks, pergolas, and cedar shingles from the wet Lower Mainland climate.</p>
          </div>
        </div>
      </section>
    </>
  );
}
