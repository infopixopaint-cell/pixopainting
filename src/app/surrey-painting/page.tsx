import { Metadata } from 'next';
import LocalCityPage from '@/components/LocalCityPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Painting Company in Surrey BC | Pixo Painting",
  description: "Professional interior and exterior painting services in Surrey BC. Trusted residential & commercial painters. Get a free quote today from Pixo Painting & Coating.",
  keywords: [
    "Best Painting Company in Surrey BC",
    "painting and coating surrey canada",
    "painting company surrey bc",
    "house painters surrey bc",
    "commercial painters surrey",
    "best painting company in surrey",
    "professional painters surrey",
    "interior painters surrey",
    "exterior painting surrey",
    "painting and coating Surrey BC"
  ],
  openGraph: {
    title: "Best Painting Company in Surrey BC | Pixo Painting",
    description: "Professional interior and exterior painting services in Surrey BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/surrey-painting',
  }
};

const surreySchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixo Painting & Coating Surrey BC",
    "image": "https://pixopainting.com/logo.PNG",
    "@id": "https://pixopainting.com/surrey-painting",
    "url": "https://pixopainting.com/surrey-painting",
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
      "latitude": "49.1913",
      "longitude": "-122.8490"
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
    "name": "Professional Painting & Coating Surrey BC",
    "description": "High-end residential and commercial painting services across Surrey. Expert interior and weather-resistant exterior coatings.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pixo Painting & Coating"
    },
    "areaServed": [
      { "@type": "City", "name": "Surrey" },
      { "@type": "City", "name": "South Surrey" },
      { "@type": "City", "name": "Guildford" },
      { "@type": "City", "name": "Cloverdale" },
      { "@type": "City", "name": "Fleetwood" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "48"
    }
  }
];

export default function SurreyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(surreySchema) }}
      />
      <LocalCityPage 
        city="Surrey"
        customTitle="Painting & Coating Surrey BC"
        showAddress={false}
        neighborhoods={["South Surrey", "Guildford", "Cloverdale", "Fleetwood", "Newton", "Whalley", "Morgan Creek", "Fraser Heights"]}
        desc="As Surrey's trusted professional painters, we specialize in high-end residential estates, modern townhouse coatings, and commercial transformations. Our skilled crews deliver architectural finishing and museum-grade prep-work across South Surrey, Fleetwood, Guildford, and Cloverdale."
      />
      
      {/* Neighborhood Authority Silos */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '40px' }}>Specialized Neighborhood Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { name: "South Surrey", desc: "Premium coastal weatherproofing and luxury estate painting." },
            { name: "Cloverdale", desc: "Heritage restorations and modern residential finishing." },
            { name: "Guildford", desc: "Reliable townhome interior and exterior painting services." }
          ].map(hood => (
            <div key={hood.name} className="liquid-glass" style={{ padding: '30px', borderRadius: '20px', textAlign: 'left' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>{hood.name} Painting</h4>
              <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{hood.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section for Surrey SEO */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', background: 'rgba(0,0,0,0.02)', borderRadius: '40px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>Surrey Painting & Coating FAQ</h2>
        <div style={{ display: 'grid', gap: '30px' }}>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>How do I choose the best painting company in Surrey BC?</h4>
            <p style={{ opacity: 0.7 }}>Look for a company that is licensed, WorkSafeBC insured, and has a strong rating for detail. Pixo Painting & Coating provides fully insured, expert residential and commercial services with museum-grade quality across Surrey.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>What types of homes do you paint in South Surrey?</h4>
            <p style={{ opacity: 0.7 }}>We specialize in luxury detached homes, coastal-facing estates, modern townhouses, and new strata developments. Our team applies high-performance weatherproof coatings engineered for BC winters.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>Do you provide commercial painting in Surrey?</h4>
            <p style={{ opacity: 0.7 }}>Yes, we provide full commercial and retail painting services. Our commercial crew accommodates off-hours and weekend schedules to ensure zero downtime for your Surrey business.</p>
          </div>
        </div>
      </section>
    </>
  );
}
