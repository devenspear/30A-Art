'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import type { ArtLocation } from './leaflet-map';

const LeafletMap = dynamic(
  () => import('./leaflet-map').then((mod) => mod.LeafletMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-muted/40 animate-pulse" aria-hidden />
    ),
  }
);

export function PublicArtMap() {
  const [artLocations, setArtLocations] = useState<ArtLocation[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    fetch('/data/public_art.json')
      .then((res) => res.json())
      .then((data) => setArtLocations(data))
      .catch((err) => console.error('Error loading art locations:', err));
  }, []);

  return (
    <section id="map" className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Public Art Along 30A
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore sculptures, murals, and installations from Rosemary Beach to Seaside
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border border-border">
          <div className="h-96 sm:h-[500px]">
            {isMounted ? (
              <LeafletMap locations={artLocations} />
            ) : (
              <div className="h-full bg-muted rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground">Loading map...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
