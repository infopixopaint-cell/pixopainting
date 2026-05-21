import { Metadata } from 'next';
import LocalCityPage from '@/components/LocalCityPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Painting Company Tsawwassen Canada | Pixo Painting",
  description: "Professional painting services in Tsawwassen, BC. Expert interior and exterior finishes for luxury coastal estates. Get a free quote from Pixo Painting & Coating.",
  keywords: [
    "painting company tsawwassen canada",
    "painting services tsawwassen bc",
    "house painters tsawwassen canada",
    "painting and coating tsawwassen canada",
    "interior painting tsawwassen canada",
    "commercial painters tsawwassen bc",
    "professional painters tsawwassen",
    "painters delta canada",
    "painting and coating delta canada"
  ],
  openGraph: {
    title: "Painting Company Tsawwassen Canada | Pixo Painting",
    description: "Professional interior and exterior painting services in Tsawwassen BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/tsawwassen-painting',
  }
};

const tsawwassenSchema = {
  "@context": "https://schema.org",
  "@type": "PaintingService",
  "name": "Pixo Painting & Coating Tsawwassen",
  "description": "Tsawwassen's premier choice for luxury painting and high-performance coastal coatings.",
  "areaServed": {
    "@type": "City",
    "name": "Tsawwassen"
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

export default function TsawwassenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tsawwassenSchema) }}
      />
      <LocalCityPage 
        city="Tsawwassen"
        customTitle="Tsawwassen Painting & Coating Elite"
        desc="Delivering museum-grade finishes and technical coastal protection to Tsawwassen's most prestigious properties. We specialize in materials that thrive in seaside conditions."
        neighborhoods={["Beach Grove", "Boundary Bay", "Tsawwassen Springs", "English Bluff", "Pebble Hill"]}
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
