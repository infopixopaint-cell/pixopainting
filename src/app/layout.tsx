import type { Metadata, Viewport } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://pixopainting.com'),
  title: "Pixo Painting & Coating | Best Painting Company in Canada | Top-Rated Painters BC",
  description: "Best painting company in Canada. Professional interior & exterior painting, commercial coating, cabinet refinishing & epoxy flooring across Vancouver, Delta, Surrey, Richmond, Burnaby, Langley & all of BC.",
  keywords: [
    // Canada-wide
    "best painting company in canada",
    "canada painting company",
    "canada painting services",
    "canada house painters",
    "canada commercial painters",
    "canada residential painters",
    "canada painting contractors",
    "professional painting contractors canada",
    "premium painting services canada",
    "licensed painters canada",
    "painting experts canada",
    "local painters canada",
    "painting company near me canada",
    "commercial coating services canada",
    "industrial painting contractors canada",
    "epoxy flooring canada",
    "protective coatings canada",
    // BC
    "painting company british columbia",
    "painters british columbia",
    "painting and coating british columbia",
    "residential painting bc",
    "commercial painting bc",
    "epoxy coating bc",
    "licensed painters bc",
    // Near Me (high traffic)
    "painters near me",
    "painting company near me",
    "commercial painters near me",
    "interior painters near me",
    "exterior painters near me",
    "house painting near me",
    "painting contractors near me",
    "best painting services near me",
    // Vancouver Area
    "painting company vancouver canada",
    "best painters vancouver canada",
    "house painting vancouver canada",
    "painting and coating vancouver canada",
    // Delta
    "painting company delta canada",
    "painting and coating delta canada",
    "best painters delta bc",
    // Surrey
    "painting company surrey canada",
    "painting and coating surrey canada",
    "house painters surrey canada",
    // Richmond
    "painting company richmond canada",
    "painting and coating richmond canada",
    // Burnaby
    "painting company burnaby canada",
    "painting and coating burnaby canada",
    // Langley
    "painting company langley canada",
    "painting and coating langley canada",
    // Coquitlam
    "painting company coquitlam canada",
    "painting and coating coquitlam canada"
  ],
  openGraph: {
    title: "Pixo Painting & Coating | Best Painting Services Vancouver",
    description: "The premier choice for architectural finishing. Top-rated painting in Vancouver, Burnaby, and Richmond with elite precision.",
    url: 'https://pixopainting.com',
    siteName: 'Pixo Painting',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixo Painting - Luxury Vancouver Painters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixo Painting & Coating | Luxury Painters BC',
    description: 'Museum-grade painting services in Vancouver, Burnaby, and Richmond. Quality over everything.',
    images: ['/twitter-image.png'],
  },
  appleWebApp: {
    capable: true,
    title: "Pixo Painting",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.PNG', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/logo.PNG', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Pixo Painting & Coating",
  "image": "https://pixopainting.com/logo.PNG",
  "description": "Canada's premier luxury painting & coating services. Specialized in architectural protection and museum-grade finishes across Vancouver, Delta, and British Columbia.",
  "brand": {
    "@type": "Brand",
    "name": "Pixo Painting & Coating",
    "alternateName": "Pixo Painting Canada"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.1741",
    "longitude": "-122.8997"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9445 114st",
    "addressLocality": "Delta",
    "addressRegion": "BC",
    "postalCode": "V4C 5K9",
    "addressCountry": "CA"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "url": "https://pixopainting.com",
  "telephone": "+12366322433",
  "priceRange": "$$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Painting & Coating Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interior Painting Vancouver",
          "description": "Luxury interior painting for Vancouver residential properties."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exterior Coating Delta",
          "description": "High-durability exterior coatings for Delta coastal homes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cabinet Refinishing Vancouver",
          "description": "Factory-grade cabinet lacquering in Vancouver & Burnaby."
        }
      }
    ]
  },
  "areaServed": [
    { "@type": "Country", "name": "Canada" },
    { "@type": "State", "name": "British Columbia" },
    { "@type": "City", "name": "Vancouver" },
    { "@type": "City", "name": "Toronto" },
    { "@type": "City", "name": "Calgary" },
    { "@type": "City", "name": "Edmonton" },
    { "@type": "City", "name": "Ottawa" },
    { "@type": "City", "name": "Montreal" },
    { "@type": "City", "name": "Winnipeg" },
    { "@type": "City", "name": "Delta" },
    { "@type": "City", "name": "Burnaby" },
    { "@type": "City", "name": "Richmond" },
    { "@type": "City", "name": "Surrey" },
    { "@type": "City", "name": "Langley" },
    { "@type": "City", "name": "Coquitlam" },
    { "@type": "City", "name": "North Delta" },
    { "@type": "City", "name": "Tsawwassen" },
    { "@type": "City", "name": "Ladner" }
  ],
  "sameAs": [
    "https://www.facebook.com/pixopainting",
    "https://www.instagram.com/pixopainting",
    "https://www.houzz.com/pro/pixopainting",
    "https://homestars.com/companies/pixo-painting-coating",
    "https://www.yelp.ca/biz/pixo-painting-coating-vancouver"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Pixo Painting the best painting company in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We combine architectural precision with museum-grade finishes, technical substrate preparation, and performance coatings specifically engineered for the Canadian climate, serving all of British Columbia and nationwide across Vancouver, Delta, Surrey, Burnaby, Richmond, Langley, and Coquitlam."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find top-rated painters near me in BC or Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pixo Painting serves the entire Canadian market with a focus on British Columbia, including Vancouver, Delta, Surrey, Burnaby, Richmond, Langley, and Coquitlam, as the premier choice for luxury residential and commercial painting projects."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer commercial painting services in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pixo Painting & Coating is a fully licensed and WorkSafeBC insured commercial painting contractor serving offices, retail stores, warehouses, and strata buildings across British Columbia and Canada."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide free painting estimates near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer free painting estimates for all residential and commercial projects. Contact us at +1 (236) 632-2433 or visit our website to book a free quote in Vancouver, Delta, Surrey, Richmond, Burnaby, Langley, or Coquitlam."
      }
    }
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#008080",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pixo Painting & Coating",
  "url": "https://pixopainting.com",
  "logo": "https://pixopainting.com/logo.PNG",
  "sameAs": [
    "https://www.facebook.com/pixopainting",
    "https://www.instagram.com/pixopainting",
    "https://www.houzz.com/pro/pixopainting",
    "https://homestars.com/companies/pixo-painting-coating",
    "https://www.yelp.ca/biz/pixo-painting-coating-vancouver"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+12366322433",
    "contactType": "customer service",
    "areaServed": "CA",
    "availableLanguage": "en"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="PIkABg98z8QvnXFWX9X-E-t_u_vxwj5a_0d3shmwh5_nmn" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
