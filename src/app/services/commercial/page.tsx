import { Metadata } from 'next';
import CommercialContent from './CommercialContent';

export const metadata: Metadata = {
  title: "Commercial Painting Contractors Canada | Pixo Painting",
  description: "Elite commercial painting services in Canada and BC. Professional office, retail, strata, and warehouse coating with minimal operational downtime. WorkSafeBC insured.",
  keywords: [
    "commercial painting canada",
    "commercial painting contractors canada",
    "commercial painters near me",
    "commercial painting vancouver",
    "commercial painting delta bc",
    "commercial painting richmond",
    "commercial painting surrey",
    "office painting services canada",
    "warehouse painting canada",
    "retail store painting services",
    "industrial painting company canada"
  ],
  openGraph: {
    title: "Commercial Painting Contractors Canada | Pixo Painting",
    description: "Fully licensed and WorkSafeBC insured commercial painting solutions. Serving Vancouver, Richmond, Delta, Burnaby, and Surrey.",
    url: 'https://pixopainting.com/services/commercial',
  }
};

export default function CommercialPaintingPage() {
  return <CommercialContent />;
}
