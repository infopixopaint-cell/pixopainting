import { Metadata } from 'next';
import StainingContent from './StainingContent';

export const metadata: Metadata = {
  title: "Premium Wood Staining & Restoration | Cedar & Deck Preservation",
  description: "Preserve the organic beauty of your architectural timber. Expert wood staining, siding preservation, and deck sealing services across British Columbia.",
  keywords: [
    "wood staining bc",
    "cedar siding preservation",
    "deck staining vancouver",
    "heritage timber restoration",
    "Fort Langley wood staining",
    "painting and coating canada",
    "protective wood coating",
    "professional wood painters canada"
  ],
  openGraph: {
    title: "Premium Wood Staining & Restoration | Pixo Painting",
    description: "Architectural wood staining and cedar restoration services. Serving Vancouver, Richmond, Delta, Surrey, and Langley.",
    url: 'https://pixopainting.com/services/staining',
  }
};

export default function StainingPage() {
  return <StainingContent />;
}
