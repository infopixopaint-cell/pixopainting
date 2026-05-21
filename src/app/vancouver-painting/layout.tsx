import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Painting & Coating in Vancouver Canada | #1 Rated Pixo Painting",
  description: "Experience the best painting & coating in Vancouver, Canada with Pixo Painting. Professional interior and exterior finishing for luxury homes and estates across Vancouver BC.",
  keywords: ["painting and coating in vancouver canada", "best painters vancouver", "luxury painting vancouver", "exterior coating vancouver"],
  alternates: {
    canonical: 'https://www.pixopainting.com/vancouver-painting',
  },
  openGraph: {
    title: "Painting & Coating in Vancouver Canada | #1 Rated Pixo Painting",
    description: "Professional architectural finishing for Vancouver's most prestigious properties. Top-rated painting and coating in Vancouver BC.",
    url: 'https://www.pixopainting.com/vancouver-painting',
    siteName: 'Pixo Painting & Coating',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function VancouverPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
