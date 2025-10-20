'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export interface ArtLocation {
  id: string;
  title: string;
  type: string;
  lat: number;
  lng: number;
  credit: string;
  url: string;
}

interface LeafletMapProps {
  locations: ArtLocation[];
}

export function LeafletMap({ locations }: LeafletMapProps) {
  return (
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
      {locations.map((location) => (
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
  );
}

