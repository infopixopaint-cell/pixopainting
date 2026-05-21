import { Metadata } from 'next';
import InteriorContent from './InteriorContent';

export const metadata: Metadata = {
  title: "Premium Interior Painting Services | Museum-Grade Wall Finishes",
  description: "Transform your spaces with museum-grade interior painting. Expert color theory curation, manual prep-work, and dust-free execution by Canada's best painters.",
  keywords: [
    "interior house painters",
    "wall painting experts",
    "premium painting services",
    "home painting services",
    "interior wall painting canada",
    "luxury interior painting services",
    "professional interior painters",
    "interior painting company near me",
    "interior painting delta bc",
    "interior painting vancouver",
    "interior painters surrey",
    "interior house painters richmond",
    "interior painting contractors bc"
  ],
  openGraph: {
    title: "Premium Interior Painting Services | Pixo Painting",
    description: "Museum-grade interior painting and flawless wall finishes. Serving Vancouver, Delta, Surrey, Burnaby, and Richmond.",
    url: 'https://pixopainting.com/services/interior',
  }
};

export default function InteriorPaintingPage() {
  return <InteriorContent />;
}
