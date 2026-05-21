import { Metadata } from 'next';
import ExteriorContent from './ExteriorContent';

export const metadata: Metadata = {
  title: "Performance Exterior Coatings & Painting | Coastal Weatherproofing",
  description: "Durable exterior painting and weatherproof architectural coatings. Shield your wood, stucco, or siding from coastal conditions with Canada's premium painters.",
  keywords: [
    "exterior painting bc",
    "exterior painters vancouver",
    "exterior painting delta",
    "house exterior painting canada",
    "outdoor painting services bc",
    "professional exterior painters",
    "weatherproof exterior coating canada",
    "best exterior painters near me",
    "commercial exterior painting canada",
    "painting and coating canada",
    "premium painting services canada"
  ],
  openGraph: {
    title: "Performance Exterior Coatings & Painting | Pixo Painting",
    description: "Coastal weatherproofing and high-performance exterior painting. Serving Vancouver, Richmond, Burnaby, Delta, and Surrey.",
    url: 'https://pixopainting.com/services/exterior',
  }
};

export default function ExteriorPaintingPage() {
  return <ExteriorContent />;
}
