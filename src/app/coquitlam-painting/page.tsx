import { Metadata } from 'next';
import LocalCityPage from '@/components/LocalCityPage';

export const metadata: Metadata = {
  title: "Best Painting Company in Coquitlam BC | Pixo Painting",
  description: "Professional interior and exterior painting services in Coquitlam BC. Trusted residential & commercial painters. Get a free quote today from Pixo Painting & Coating.",
  keywords: [
    "Best Painting Company in Coquitlam BC",
    "painting and coating coquitlam canada",
    "painting company coquitlam bc",
    "painting services coquitlam",
    "coquitlam local painters",
    "best painters in coquitlam",
    "epoxy coating coquitlam",
    "professional painters coquitlam",
    "residential painters coquitlam"
  ],
  openGraph: {
    title: "Best Painting Company in Coquitlam BC | Pixo Painting",
    description: "Professional interior and exterior painting services in Coquitlam BC. Trusted residential & commercial painters.",
    url: 'https://pixopainting.com/coquitlam-painting',
  }
};

const coquitlamSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixo Painting & Coating Coquitlam BC",
    "image": "https://pixopainting.com/logo.PNG",
    "@id": "https://pixopainting.com/coquitlam-painting",
    "url": "https://pixopainting.com/coquitlam-painting",
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
      "latitude": "49.2838",
      "longitude": "-122.7932"
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
    "name": "Professional Painting & Coating Coquitlam BC",
    "description": "Premium interior and exterior painting services across Coquitlam. Expert dry-wall repairs and color transition work.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pixo Painting & Coating"
    },
    "areaServed": [
      { "@type": "City", "name": "Coquitlam" },
      { "@type": "City", "name": "Westwood Plateau" },
      { "@type": "City", "name": "Burke Mountain" },
      { "@type": "City", "name": "Maillardville" },
      { "@type": "City", "name": "Burquitlam" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "26"
    }
  }
];

export default function CoquitlamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coquitlamSchema) }}
      />
      <LocalCityPage 
        city="Coquitlam"
        customTitle="Painting & Coating Coquitlam BC"
        showAddress={false}
        neighborhoods={["Westwood Plateau", "Burke Mountain", "Maillardville", "Burquitlam", "Coquitlam East", "Central Coquitlam"]}
        desc="Discriminating Coquitlam homeowners trust Pixo Painting & Coating for flawless finishes. Specializing in high-end estates on Westwood Plateau and new architectural masterpieces in Burke Mountain, we offer premium interior color palettes, technical surface preps, and exterior weatherproofing."
      />
      
      {/* Neighborhood Authority Silos */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '40px' }}>Specialized Coquitlam Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { name: "Westwood Plateau", desc: "Elite multi-story interior and high-performance roof/exterior coatings." },
            { name: "Burke Mountain", desc: "Contemporary home painting, drywall patching, and modern color consulting." },
            { name: "Maillardville", desc: "Heritage wood restoration and premium residential painting." }
          ].map(hood => (
            <div key={hood.name} className="liquid-glass" style={{ padding: '30px', borderRadius: '20px', textAlign: 'left' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>{hood.name} Painting</h4>
              <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{hood.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section for Coquitlam SEO */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', background: 'rgba(0,0,0,0.02)', borderRadius: '40px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>Coquitlam Painting FAQ</h2>
        <div style={{ display: 'grid', gap: '30px' }}>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>Do you provide interior repaints for high-ceiling homes in Coquitlam?</h4>
            <p style={{ opacity: 0.7 }}>Yes! Our experienced painters are fully trained and equipped with safe staging setups for high-ceiling foyers, multi-story living rooms, and complex stairwells common in Coquitlam's Westwood Plateau homes.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>What paint brands do you use for Coquitlam projects?</h4>
            <p style={{ opacity: 0.7 }}>We partner with premier manufacturers such as Benjamin Moore, Sherwin-Williams, and specialized European eco-friendly brands. We ensure our materials meet strict quality and durability standards for the Pacific Northwest.</p>
          </div>
        </div>
      </section>
    </>
  );
}
