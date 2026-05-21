import { Metadata } from 'next';
import LocalCityPage from '@/components/LocalCityPage';

export const metadata: Metadata = {
  title: "Best Painting Company in Burnaby BC | Pixo Painting",
  description: "Professional interior and exterior painting services in Burnaby BC. Trusted residential & commercial painters. Get a free quote today from Pixo Painting & Coating.",
  keywords: [
    "Best Painting Company in Burnaby BC",
    "painting and coating burnaby canada",
    "painting company burnaby bc",
    "painting services burnaby",
    "house painters burnaby bc",
    "commercial painters burnaby",
    "professional painters burnaby",
    "top rated painting company burnaby"
  ],
  openGraph: {
    title: "Best Painting Company in Burnaby BC | Pixo Painting",
    description: "Professional interior and exterior painting services in Burnaby BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/burnaby-painting',
  }
};

const burnabySchema = {
  "@context": "https://schema.org",
  "@type": "PaintingService",
  "name": "Pixo Painting & Coating Burnaby",
  "description": "Technical coatings and museum-grade finishes for Burnaby properties.",
  "areaServed": [
    { "@type": "City", "name": "Burnaby" },
    { "@type": "City", "name": "Deer Lake" },
    { "@type": "City", "name": "Metrotown" },
    { "@type": "City", "name": "Brentwood" },
    { "@type": "City", "name": "Capitol Hill" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Burnaby",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "url": "https://pixopainting.com/burnaby-painting",
  "telephone": "+12366322433",
  "priceRange": "$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "48"
  }
};

export default function BurnabyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(burnabySchema) }}
      />
      <LocalCityPage 
        city="Burnaby"
        desc="Delivering museum-grade finishes and technical coatings for Burnaby's modern developments and heritage estates. We bring precision and protection to every project."
        neighborhoods={["Deer Lake", "Metrotown", "Burnaby Mountain", "Capitol Hill", "Willingdon Heights", "Brentwood"]}
      />
    </>
  );
}
