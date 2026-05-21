import { Metadata } from 'next';
import CanadaContent from './CanadaContent';

export const metadata: Metadata = {
  title: "Best Painting Company in Canada | Pixo Painting & Coating",
  description: "Canada's top-rated painting company. Professional interior & exterior painting, commercial coating, cabinet refinishing & epoxy flooring across Vancouver, Delta, Surrey, Richmond, Burnaby, Langley, Coquitlam & all of BC. Free estimates.",
  keywords: [
    // Canada-wide master
    "best painting company in canada",
    "canada painting company",
    "canada painting services",
    "canada house painters",
    "canada commercial painters",
    "canada residential painters",
    "canada painting contractors",
    "canada wall painting services",
    "canada interior painting company",
    "canada exterior painting services",
    "canada coating specialists",
    "top painters in canada",
    "trusted painters canada",
    "professional painting contractors canada",
    "premium painting services canada",
    "affordable painters canada",
    "licensed painters canada",
    "painting experts canada",
    "local painters canada",
    "commercial coating services canada",
    "industrial painting contractors canada",
    "epoxy flooring canada",
    "protective coatings canada",
    "custom painting services canada",
    // BC-wide
    "painting company british columbia",
    "painters british columbia",
    "commercial painters british columbia",
    "interior painting british columbia",
    "exterior painting british columbia",
    "house painters british columbia",
    "professional painters british columbia",
    "painting contractors british columbia",
    "best painters in british columbia",
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
    "free painting estimate near me",
    "painting experts near me",
    // Luxury / Premium
    "luxury painting company canada",
    "premium painting services canada",
    "high end painters canada",
    "modern home painting canada",
    "luxury interior painting vancouver",
    // Long tail
    "best interior painting company in vancouver canada",
    "top rated commercial painters in delta bc",
    "professional house painters in surrey canada",
    "affordable painting contractors in richmond bc",
    "trusted painting and coating company canada",
    "premium residential painting services british columbia",
    "licensed commercial painting contractors canada"
  ],
  openGraph: {
    title: "Best Painting Company in Canada | Pixo Painting & Coating",
    description: "Professional interior & exterior painting, commercial coating & epoxy flooring across Vancouver, Delta, Surrey, Richmond, Burnaby, Langley & all of BC.",
    url: 'https://pixopainting.com/painting-and-coating-canada',
  }
};

export default function CanadaPaintingPage() {
  return <CanadaContent />;
}
