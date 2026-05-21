import { Metadata } from 'next';
import LocalCityPage from '@/components/LocalCityPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Painting Company Ladner Canada | Pixo Painting",
  description: "Professional painting services in Ladner, BC. Heritage home restoration and luxury interior/exterior finishes. Get a free quote from Pixo Painting & Coating.",
  keywords: [
    "painting company ladner canada",
    "painting services ladner bc",
    "painting and coating ladner canada",
    "house painters ladner canada",
    "commercial painting ladner canada",
    "professional painters ladner bc",
    "painters delta canada",
    "painting and coating delta canada",
    "interior painting delta canada"
  ],
  openGraph: {
    title: "Painting Company Ladner Canada | Pixo Painting",
    description: "Professional interior and exterior painting services in Ladner BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/ladner-painting',
  }
};

const ladnerSchema = {
  "@context": "https://schema.org",
  "@type": "PaintingService",
  "name": "Pixo Painting & Coating Ladner",
  "description": "Premier painting and architectural coating services in Ladner, Delta. Specialized in heritage restoration and coastal durability.",
  "areaServed": {
    "@type": "City",
    "name": "Ladner"
  },
  "provider": {
    "@type": "LocalBusiness",
    "name": "Pixo Painting & Coating",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9445 114st",
      "addressLocality": "Delta",
      "addressRegion": "BC",
      "postalCode": "V4C 5K9",
      "addressCountry": "CA"
    }
  }
};

export default function LadnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ladnerSchema) }}
      />
      <LocalCityPage 
        city="Ladner"
        customTitle="Ladner Painting & Coating Authority"
        desc="As Ladner's premier painting specialists, we bring technical precision to heritage restorations and modern estates alike. Our coatings are engineered for Ladner's unique coastal environment."
        neighborhoods={["Ladner Village", "Westham Island", "Marina District", "Holly", "Port Guichon"]}
        showAddress={true}
      />
      
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ opacity: 0.6, marginBottom: '20px' }}>Part of our comprehensive Delta coverage.</p>
        <Link href="/delta-painting" style={{ fontWeight: 700, color: 'var(--foreground)', borderBottom: '2px solid black', paddingBottom: '4px' }}>
          VIEW ALL DELTA PAINTING SERVICES →
        </Link>
      </section>
    </>
  );
}
