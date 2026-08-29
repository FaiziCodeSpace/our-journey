"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/**
 * A small circular avatar-style marker — a blue "Him" glyph or a pink
 * "Her" glyph inside a soft-glow disc, with a tiny name pill underneath.
 * Built as a Leaflet divIcon (real DOM/CSS, not an image asset) so it
 * stays crisp at any zoom and never looks like a generic map pin.
 */
function personIcon({ color, label, gender }) {
  const glyph =
    gender === "female"
      ? `<path d="M12 3a4 4 0 100 8 4 4 0 000-8z" stroke="white" stroke-width="1.8" fill="none"/><path d="M7.5 21c0-3.6 2-6.5 4.5-6.5s4.5 2.9 4.5 6.5" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/>`
      : `<circle cx="12" cy="8" r="4" stroke="white" stroke-width="1.8" fill="none"/><path d="M5 21c0-4 3.5-7 7-7s7 3 7 7" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;

  const html = `
    <div style="display:flex;flex-direction:column;align-items:center;transform:translateY(-6px);">
      <div style="
        width:36px;height:36px;border-radius:9999px;
        background:${color};
        box-shadow:0 0 0 5px ${color}2e, 0 3px 10px rgba(0,0,0,0.25);
        display:flex;align-items:center;justify-content:center;
        border:2px solid #fff;
      ">
        <svg width="19" height="19" viewBox="0 0 24 24">${glyph}</svg>
      </div>
      <span style="
        margin-top:3px;font-family:var(--font-ui, sans-serif);font-size:10px;font-weight:700;
        color:#fff;background:${color};padding:1px 7px;border-radius:9999px;
        box-shadow:0 1px 4px rgba(0,0,0,0.25);white-space:nowrap;
      ">${label}</span>
    </div>`;

  return L.divIcon({
    html,
    className: "", // suppress Leaflet's default marker box/shadow styling
    iconSize: [46, 54],
    iconAnchor: [23, 48],
  });
}

export default function LocationMap({ me, her, meMeta, herMeta }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const meMarkerRef = useRef(null);
  const herMarkerRef = useRef(null);

  // Create the map once — never recreated on data updates.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, { zoomControl: true, attributionControl: true }).setView(
      [20, 0],
      2
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      meMarkerRef.current = null;
      herMarkerRef.current = null;
    };
  }, []);

  // Move existing markers (or create/remove them) whenever locations
  // change — cheap `.setLatLng()` calls, never a map teardown/rebuild.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const points = [];

    if (me) {
      const latlng = [me.latitude, me.longitude];
      points.push(latlng);
      if (!meMarkerRef.current) {
        meMarkerRef.current = L.marker(latlng, { icon: personIcon(meMeta) }).addTo(map);
      } else {
        meMarkerRef.current.setLatLng(latlng);
      }
    } else if (meMarkerRef.current) {
      meMarkerRef.current.remove();
      meMarkerRef.current = null;
    }

    if (her) {
      const latlng = [her.latitude, her.longitude];
      points.push(latlng);
      if (!herMarkerRef.current) {
        herMarkerRef.current = L.marker(latlng, { icon: personIcon(herMeta) }).addTo(map);
      } else {
        herMarkerRef.current.setLatLng(latlng);
      }
    } else if (herMarkerRef.current) {
      herMarkerRef.current.remove();
      herMarkerRef.current = null;
    }

    if (points.length === 2) {
      map.fitBounds(points, { padding: [56, 56], maxZoom: 14 });
    } else if (points.length === 1) {
      map.setView(points[0], 13);
    }
    // Depending on the primitive lat/lng fields (not the `me`/`her`
    // objects) is intentional — a new object with the same coordinates
    // shouldn't move the map or recreate markers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me?.latitude, me?.longitude, her?.latitude, her?.longitude, meMeta, herMeta]);

  return <div ref={containerRef} className="h-full w-full" />;
}
