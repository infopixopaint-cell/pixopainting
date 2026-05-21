'use client';

export default function ArtisticBlobs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute', visibility: 'hidden' }}>
      <defs>
        <clipPath id="blob-1" clipPathUnits="objectBoundingBox">
          <path d="M0.9,0.5 C0.85,0.85 0.6,0.95 0.4,0.9 C0.2,0.85 0.1,0.65 0.15,0.35 C0.2,0.1 0.45,0.05 0.7,0.15 C0.95,0.25 0.95,0.15 0.9,0.5" />
        </clipPath>
        <clipPath id="blob-2" clipPathUnits="objectBoundingBox">
          <path d="M0.85,0.4 C0.95,0.7 0.7,0.9 0.45,0.95 C0.2,1.0 0.05,0.75 0.1,0.5 C0.15,0.25 0.4,0.05 0.65,0.1 C0.8,0.15 0.75,0.1 0.85,0.4" />
        </clipPath>
        <clipPath id="blob-3" clipPathUnits="objectBoundingBox">
          <path d="M0.75,0.2 C0.95,0.45 0.9,0.8 0.65,0.9 C0.4,1.0 0.15,0.85 0.1,0.55 C0.05,0.25 0.3,0.05 0.5,0.05 C0.7,0.05 0.55,0.05 0.75,0.2" />
        </clipPath>
        <clipPath id="blob-4" clipPathUnits="objectBoundingBox">
          <path d="M0.9,0.3 C1.0,0.65 0.8,0.95 0.5,0.95 C0.2,0.95 0,0.7 0,0.4 C0,0.1 0.35,0 0.65,0.05 C0.85,0.1 0.8,0.05 0.9,0.3" />
        </clipPath>
      </defs>
    </svg>
  );
}
