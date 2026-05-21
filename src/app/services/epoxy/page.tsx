import { Metadata } from 'next';
import EpoxyContent from './EpoxyContent';

export const metadata: Metadata = {
  title: "Industrial Grade Epoxy & Polyaspartic Floor Coatings | Pixo Painting",
  description: "High-performance concrete floor coatings for residential garages, commercial facilities, and warehouses. Chemical resistant and slip-proof concrete preparation in BC.",
  keywords: [
    "epoxy coating bc",
    "garage floor coating canada",
    "epoxy floor coating vancouver",
    "industrial epoxy coating canada",
    "protective coating services",
    "concrete coating canada",
    "commercial floor coating bc",
    "polyurethane coating canada",
    "epoxy coating coquitlam"
  ],
  openGraph: {
    title: "Industrial Grade Epoxy & Polyaspartic Floor Coatings | Pixo Painting",
    description: "Flawless garage and commercial floor transformations. High-durability coatings serving Vancouver, Richmond, Burnaby, Delta, and Surrey.",
    url: 'https://pixopainting.com/services/epoxy',
  }
};

export default function EpoxyPaintingPage() {
  return <EpoxyContent />;
}
