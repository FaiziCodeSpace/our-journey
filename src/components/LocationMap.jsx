"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Free, no-API-key raster tile styles. CartoDB tiles need attribution
// (included) but no token — switching between these is just swapping
// the tile layer URL, never touching the map instance itself.
export const MAP_STYLES = {
  voyager: {
    label: "Voyager",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
  light: {
    label: "Light",
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
  dark: {
    label: "Dark",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
  classic: {
    label: "Classic",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};

const SUN_GLYPH = {
  day: `<circle cx="12" cy="12" r="4.2" fill="#F7B733"/><g stroke="#F7B733" stroke-width="1.6" stroke-linecap="round"><path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M18.4 18.4l-1.8-1.8M7.4 7.4 5.6 5.6"/></g>`,
  twilight: `<path d="M12 6a6 6 0 016 6H6a6 6 0 016-6z" fill="#F2994A"/><line x1="2" y1="15" x2="22" y2="15" stroke="#F2994A" stroke-width="1.6" stroke-linecap="round"/><g stroke="#F2994A" stroke-width="1.6" stroke-linecap="round"><path d="M12 2.5v1.8M4.5 8.3 6 9.6M19.5 8.3 18 9.6"/></g>`,
  night: `<path d="M20 13.5a8 8 0 11-9.5-9.4 6.4 6.4 0 009.5 9.4z" fill="#CBD5F5"/>`,
};

function sunBadge(state) {
  if (!state) return "";
  return `
    <div style="
      position:absolute;top:-4px;right:-4px;width:17px;height:17px;border-radius:9999px;
      background:#2A2438;display:flex;align-items:center;justify-content:center;
      box-shadow:0 1px 4px rgba(0,0,0,0.35);
    ">
      <svg width="12" height="12" viewBox="0 0 24 24">${SUN_GLYPH[state] || ""}</svg>
    </div>`;
}

/**
 * A small circular avatar-style marker — a blue "Him" glyph or a pink
 * "Her" glyph inside a soft-glow disc, a tiny name pill underneath, and
 * an optional corner badge showing whether it's day/twilight/night for
 * that person right now. Built as a Leaflet divIcon (real DOM/CSS, not
 * an image asset) so it stays crisp at any zoom.
 */
function personIcon({ color, label, gender, sun }) {
  const glyph =
    gender === "female"
      ? `<path d="M12 3a4 4 0 100 8 4 4 0 000-8z" stroke="white" stroke-width="1.8" fill="none"/><path d="M7.5 21c0-3.6 2-6.5 4.5-6.5s4.5 2.9 4.5 6.5" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/>`
      : `<circle cx="12" cy="8" r="4" stroke="white" stroke-width="1.8" fill="none"/><path d="M5 21c0-4 3.5-7 7-7s7 3 7 7" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;

  const html = `
    <div style="display:flex;flex-direction:column;align-items:center;transform:translateY(-6px);">
      <div style="position:relative;width:36px;height:36px;">
        <div style="
          width:36px;height:36px;border-radius:9999px;
          background:${color};
          box-shadow:0 0 0 5px ${color}2e, 0 3px 10px rgba(0,0,0,0.25);
          display:flex;align-items:center;justify-content:center;
          border:2px solid #fff;
        ">
          <svg width="19" height="19" viewBox="0 0 24 24">${glyph}</svg>
        </div>
        ${sunBadge(sun)}
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
    iconSize: [46, 58],
    iconAnchor: [23, 52],
  });
}

export default function LocationMap({ me, her, meMeta, herMeta, meSun, herSun, tileStyle = "voyager" }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const tileLayerRef = useRef(null);
  const meMarkerRef = useRef(null);
  const herMarkerRef = useRef(null);

  // Create the map once — never recreated on data or style updates.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: true,
      attributionControl: true,
      worldCopyJump: true,
    }).setView([20, 0], 2);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      tileLayerRef.current = null;
      meMarkerRef.current = null;
      herMarkerRef.current = null;
    };
  }, []);

  // Swap the tile layer whenever the chosen style changes — removes the
  // old layer and adds the new one, never rebuilds the map.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const style = MAP_STYLES[tileStyle] || MAP_STYLES.voyager;

    if (tileLayerRef.current) map.removeLayer(tileLayerRef.current);
    tileLayerRef.current = L.tileLayer(style.url, { attribution: style.attribution, maxZoom: 19 }).addTo(map);
  }, [tileStyle]);

  // Move existing markers (or create/remove them) whenever locations or
  // sun state change — cheap `.setLatLng()`/icon swaps, never a map
  // teardown/rebuild.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const points = [];

    if (me) {
      const latlng = [me.latitude, me.longitude];
      points.push(latlng);
      const icon = personIcon({ ...meMeta, sun: meSun });
      if (!meMarkerRef.current) {
        meMarkerRef.current = L.marker(latlng, { icon }).addTo(map);
      } else {
        meMarkerRef.current.setLatLng(latlng);
        meMarkerRef.current.setIcon(icon);
      }
    } else if (meMarkerRef.current) {
      meMarkerRef.current.remove();
      meMarkerRef.current = null;
    }

    if (her) {
      const latlng = [her.latitude, her.longitude];
      points.push(latlng);
      const icon = personIcon({ ...herMeta, sun: herSun });
      if (!herMarkerRef.current) {
        herMarkerRef.current = L.marker(latlng, { icon }).addTo(map);
      } else {
        herMarkerRef.current.setLatLng(latlng);
        herMarkerRef.current.setIcon(icon);
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
    // Depending on primitive lat/lng/sun fields (not the `me`/`her`
    // objects) is intentional — a new object with the same values
    // shouldn't move the map or recreate markers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me?.latitude, me?.longitude, her?.latitude, her?.longitude, meMeta, herMeta, meSun, herSun]);

  return <div ref={containerRef} className="h-full w-full" />;
}
