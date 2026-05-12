'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export type MapStop = { n: number; label: string; coords: [number, number]; rust?: boolean };

function FitBounds({ stops }: { stops: MapStop[] }) {
  const map = useMap();
  const key = stops.map(s => s.coords.join(',')).join('|');
  useEffect(() => {
    const positions = stops.map(s => s.coords);
    if (!positions.length) return;
    if (positions.length === 1) {
      map.setView(positions[0], 14, { animate: true });
    } else {
      map.fitBounds(L.latLngBounds(positions), { padding: [90, 90], animate: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, key]);
  return null;
}

function makeIcon(n: number, label: string, rust: boolean): L.DivIcon {
  const bg = rust ? '#B84A32' : '#0D7A7B';
  return L.divIcon({
    className: '',
    html: `<div style="display:inline-flex;align-items:center;gap:6px;background:#fff;padding:5px 10px 5px 5px;border-radius:12px;box-shadow:0 4px 14px rgba(11,16,15,0.22);border:1px solid rgba(14,20,19,0.08);white-space:nowrap;font-family:system-ui,sans-serif"><span style="width:22px;height:22px;border-radius:50%;background:${bg};display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;flex-shrink:0">${n}</span><span style="font-size:13px;font-weight:500;color:#0E1413;line-height:1">${label}</span></div>`,
    iconSize: [180, 34],
    iconAnchor: [16, 17],
  });
}

export default function MapView({ stops }: { stops: MapStop[] }) {
  const positions = stops.map(s => s.coords);
  const center: [number, number] = [11.9308, 79.8290];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Esri satellite base */}
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      {/* Road/label overlay */}
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}" />
      <FitBounds stops={stops} />
      {positions.length > 1 && (
        <Polyline
          positions={positions}
          pathOptions={{ color: '#0D7A7B', weight: 2.5, dashArray: '6 8', opacity: 0.85 }}
        />
      )}
      {stops.map(stop => (
        <Marker
          key={`${stop.n}-${stop.coords.join(',')}`}
          position={stop.coords}
          icon={makeIcon(stop.n, stop.label, !!stop.rust)}
        />
      ))}
    </MapContainer>
  );
}
