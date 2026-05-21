import { Metadata } from 'next';
import LocalCityPage from '@/components/LocalCityPage';

export const metadata: Metadata = {
  title: "Best Painting Company in Richmond BC | Pixo Painting",
  description: "Professional interior and exterior painting services in Richmond BC. Trusted residential & commercial painters. Get a free quote today from Pixo Painting & Coating.",
  keywords: [
    "Best Painting Company in Richmond BC",
    "painting and coating richmond canada",
    "painting company richmond bc",
    "painting services richmond bc",
    "house painters richmond bc",
    "commercial painters richmond",
    "professional painters vancouver",
    "interior house painters richmond",
    "commercial painting richmond"
  ],
  openGraph: {
    title: "Best Painting Company in Richmond BC | Pixo Painting",
    description: "Professional interior and exterior painting services in Richmond BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/richmond-painting',
  }
};

const richmondSchema = {
  "@context": "https://schema.org",
  "@type": "PaintingService",
  "name": "Pixo Painting & Coating Richmond",
  "description": "Engineered coastal coatings and luxury architectural finishing in Richmond, BC.",
  "areaServed": [
    { "@type": "City", "name": "Richmond" },
    { "@type": "City", "name": "Steveston" },
    { "@type": "City", "name": "Terra Nova" },
    { "@type": "City", "name": "Broadmoor" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Richmond",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "url": "https://pixopainting.com/richmond-painting",
  "telephone": "+12366322433",
  "priceRange": "$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "48"
  }
};

export default function RichmondPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(richmondSchema) }}
      />
      <LocalCityPage 
        city="Richmond"
        desc="Engineered coatings and architectural precision for Richmond's unique coastal environment and luxury properties. We provide the highest level of protection and aesthetic appeal."
        neighborhoods={["Steveston", "Terra Nova", "Broadmoor", "Thompson", "Ironwood", "Sea Island"]}
      />
    </>
  );
}
