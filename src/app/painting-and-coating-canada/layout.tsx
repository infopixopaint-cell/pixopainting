import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Painting & Coating in Canada | Pixo Painting National Authority",
  description: "Pixo Painting is the leading provider of professional painting and coating in Canada. Serving Vancouver, BC, and major hubs nationwide with museum-grade finishes.",
  keywords: ["painting and coating in canada", "best painters in canada", "national painting services canada", "industrial coating canada"],
  alternates: {
    canonical: 'https://www.pixopainting.com/painting-and-coating-canada',
  },
  openGraph: {
    title: "Painting & Coating in Canada | Pixo Painting National Authority",
    description: "National leaders in architectural protection and museum-grade finishes. Serving all major Canadian hubs.",
    url: 'https://www.pixopainting.com/painting-and-coating-canada',
    siteName: 'Pixo Painting & Coating',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function CanadaPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
