import { Metadata } from 'next';
import LocalCityPage from '@/components/LocalCityPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Painting Company North Delta Canada | Pixo Painting",
  description: "Professional painting services in North Delta, BC. Interior, exterior & commercial painting for Sunshine Hills, Scottsdale & surrounding areas. Get a free quote today.",
  keywords: [
    "painting company north delta canada",
    "painting services north delta bc",
    "house painters north delta canada",
    "painting and coating north delta canada",
    "interior painting north delta",
    "commercial painters north delta",
    "professional painters north delta bc",
    "painters delta canada",
    "painting and coating delta canada",
    "painting company delta canada"
  ],
  openGraph: {
    title: "Painting Company North Delta Canada | Pixo Painting",
    description: "Professional interior and exterior painting services in North Delta BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/north-delta-painting',
  }
};

const northDeltaSchema = {
  "@context": "https://schema.org",
  "@type": "PaintingService",
  "name": "Pixo Painting & Coating North Delta",
  "description": "North Delta's authority in professional painting and architectural finishing.",
  "areaServed": {
    "@type": "City",
    "name": "North Delta"
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

export default function NorthDeltaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(northDeltaSchema) }}
      />
      <LocalCityPage 
        city="North Delta"
        customTitle="North Delta Painting & Coating Authority"
        desc="Bringing elite architectural finishing to North Delta. From Sunshine Hills estates to modern urban residences, we deliver quality that defines the neighborhood."
        neighborhoods={["Sunshine Hills", "Scottsdale", "Nordel", "Annieville", "Kennedy"]}
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
