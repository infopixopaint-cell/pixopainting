import { Metadata } from 'next';
import LocalCityPage from '@/components/LocalCityPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Painting Company in Delta BC | Pixo Painting",
  description: "Professional interior and exterior painting services in Delta BC. Trusted residential & commercial painters. Get a free quote today from Pixo Painting & Coating.",
  keywords: [
    "Best Painting Company in Delta BC",
    "painting and coating delta canada",
    "painting company delta bc",
    "house painters delta bc",
    "commercial painters delta",
    "professional painters delta bc",
    "best painters in delta bc",
    "interior painting delta bc",
    "exterior painting delta",
    "cabinet painting delta",
    "house painters delta"
  ],
  openGraph: {
    title: "Best Painting Company in Delta BC | Pixo Painting",
    description: "Professional interior and exterior painting services in Delta BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/delta-painting',
  }
};

const deltaSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixo Painting & Coating Delta Canada",
    "image": "https://pixopainting.com/logo.PNG",
    "@id": "https://pixopainting.com/delta-painting",
    "url": "https://pixopainting.com/delta-painting",
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
      "latitude": "49.1741",
      "longitude": "-122.8997"
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
    "name": "Professional Painting & Coating Delta Canada",
    "description": "The gold standard for painting and coating in Delta, Canada. High-durability coatings for coastal and urban properties.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pixo Painting & Coating"
    },
    "areaServed": [
      { "@type": "City", "name": "Delta" },
      { "@type": "City", "name": "North Delta" },
      { "@type": "City", "name": "Ladner" },
      { "@type": "City", "name": "Tsawwassen" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "52"
    }
  }
];

export default function DeltaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deltaSchema) }}
      />
      <LocalCityPage 
        city="Delta"
        customTitle="Painting & Coating Delta Canada"
        showAddress={true}
        neighborhoods={["North Delta", "Ladner", "Tsawwassen", "Sunshine Hills", "Boundary Bay", "Tilbury"]}
        desc="As the premier choice for Painting & Coating in Delta, Canada, we specialize in high-end residential estates and industrial-strength commercial protection. Our team delivers unmatched architectural finishing across North Delta, Ladner, and Tsawwassen."
      />
      
      {/* Neighborhood Authority Silos */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '40px' }}>Specialized Neighborhood Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { name: "Ladner", href: "/ladner-painting", desc: "Heritage restoration and coastal finishing in Ladner Village." },
            { name: "Tsawwassen", href: "/tsawwassen-painting", desc: "Luxury estate painting and seaside protection in Tsawwassen." },
            { name: "North Delta", href: "/north-delta-painting", desc: "Premium interior and exterior painting in Sunshine Hills." }
          ].map(hood => (
            <Link key={hood.name} href={hood.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="liquid-glass" style={{ padding: '30px', borderRadius: '20px', textAlign: 'left', transition: 'transform 0.3s ease' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>{hood.name} Painting</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{hood.desc}</p>
                <p style={{ marginTop: '15px', fontWeight: 700, fontSize: '0.8rem' }}>EXPLORE {hood.name.toUpperCase()} →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section for Delta SEO */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', background: 'rgba(0,0,0,0.02)', borderRadius: '40px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>Delta Painting & Coating FAQ</h2>
        <div style={{ display: 'grid', gap: '30px' }}>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>Who is the best for painting & coating in Delta, Canada?</h4>
            <p style={{ opacity: 0.7 }}>Pixo Painting is recognized as the top-rated provider for professional painting & coating in Delta, Canada, offering museum-grade finishes and technical expertise for luxury homes and commercial properties.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>Do you serve all neighborhoods in Delta?</h4>
            <p style={{ opacity: 0.7 }}>Yes, we provide full coverage across North Delta, Ladner, Tsawwassen, Sunshine Hills, and Boundary Bay, ensuring every Delta resident has access to elite painting services.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>What types of coatings do you provide for Delta coastal properties?</h4>
            <p style={{ opacity: 0.7 }}>We specialize in high-durability architectural coatings specifically engineered to withstand the unique coastal environment of Delta, BC, providing long-lasting protection against salt air and humidity.</p>
          </div>
        </div>
      </section>
    </>
  );
}
