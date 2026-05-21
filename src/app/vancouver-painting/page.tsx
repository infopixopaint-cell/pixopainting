import { Metadata } from 'next';
import VancouverPageContent from '@/components/VancouverPageContent';

export const metadata: Metadata = {
  title: "Best Painting Company in Vancouver BC | Pixo Painting",
  description: "Professional interior and exterior painting services in Vancouver BC. Trusted residential & commercial painters. Get a free quote today from Pixo Painting & Coating.",
  keywords: [
    "Best Painting Company in Vancouver BC",
    "painting and coating vancouver canada",
    "painting company vancouver",
    "house painters vancouver",
    "commercial painters vancouver",
    "professional painters vancouver",
    "best painters in vancouver",
    "local painting contractors vancouver",
    "interior painting vancouver",
    "exterior painters vancouver",
    "cabinet refinishing vancouver",
    "top rated painters vancouver",
    "kitchen cabinet painters vancouver"
  ],
  openGraph: {
    title: "Best Painting Company in Vancouver BC | Pixo Painting",
    description: "Professional interior and exterior painting services in Vancouver BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/vancouver-painting',
  }
};

const vancouverSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Pixo Painting & Coating Vancouver",
  "description": "Professional interior and exterior painting services in Vancouver BC. Trusted residential & commercial painters.",
  "image": "https://pixopainting.com/logo.PNG",
  "@id": "https://pixopainting.com/vancouver-painting",
  "url": "https://pixopainting.com/vancouver-painting",
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
    "latitude": "49.2827",
    "longitude": "-123.1207"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "20:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "52"
  }
};

export default function VancouverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vancouverSchema) }}
      />
      <VancouverPageContent />
    </>
  );
}
