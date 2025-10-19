'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface ArtLocation {
  id: string;
  title: string;
  type: string;
  lat: number;
  lng: number;
  credit: string;
  url: string;
}

export function PublicArtMap() {
  const [artLocations, setArtLocations] = useState<ArtLocation[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load public art data
    fetch('/data/public_art.json')
      .then((res) => res.json())
      .then((data) => setArtLocations(data))
      .catch((err) => console.error('Error loading art locations:', err));
  }, []);

  if (!isClient) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-primary mb-4 text-center">
            Public Art Along 30A
          </h2>
          <div className="h-96 bg-muted rounded-xl flex items-center justify-center">
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-light text-primary mb-4">
            Public Art Along 30A
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore sculptures, murals, and installations from Rosemary Beach to Seaside
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border border-border">
          <div className="h-96 sm:h-[500px]">
            {typeof window !== 'undefined' && (
              <MapContainer
                center={[30.2844, -86.0034]}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {artLocations.map((location) => (
                  <Marker key={location.id} position={[location.lat, location.lng]}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-semibold text-primary mb-1">{location.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{location.type}</p>
                        <p className="text-xs text-muted-foreground mb-2">
                          Credit: {location.credit}
                        </p>
                        <a
                          href={location.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-secondary hover:underline"
                        >
                          Learn more →
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Data provided by{' '}
            <a
              href="https://www.culturalartsalliance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Cultural Arts Alliance of Walton County
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
