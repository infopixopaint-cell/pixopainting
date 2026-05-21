import { Metadata } from 'next';
import CabinetsContent from './CabinetsContent';

export const metadata: Metadata = {
  title: "Factory-Grade Cabinet Refinishing & Lacquering | Kitchen Restoration",
  description: "Give your kitchen cabinets a flawless, factory-grade lacquer finish. Professional cabinet spray painting and refinishing services in Canada.",
  keywords: [
    "cabinet painting delta",
    "cabinet refinishing vancouver",
    "kitchen cabinet painting canada",
    "cabinet spray painting bc",
    "modern cabinet refinishing",
    "cabinet painters near me",
    "kitchen cabinet painters vancouver",
    "cabinet painting canada",
    "cabinet painting langley"
  ],
  openGraph: {
    title: "Factory-Grade Cabinet Refinishing & Lacquering | Pixo Painting",
    description: "Premium cabinet refinishing and factory lacquer finishes. Serving Vancouver, Richmond, Delta, and Surrey.",
    url: 'https://pixopainting.com/services/cabinets',
  }
};

export default function CabinetsPage() {
  return <CabinetsContent />;
}
