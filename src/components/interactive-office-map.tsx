"use client";

import { useEffect, useRef, useState } from "react";
import { mapLinkAttributes, officeLocation } from "@/lib/location";

export function InteractiveOfficeMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let cleanup = () => {};

    async function initialize(mapContainer: HTMLDivElement) {
      const {
        Map,
        Marker,
        NavigationControl,
        AttributionControl,
        setWorkerUrl,
      } = await import("maplibre-gl");
      if (disposed) return;
      setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");

      const map = new Map({
        container: mapContainer,
        style: "/maps/office-style.json",
        center: [officeLocation.longitude, officeLocation.latitude],
        // Keep the same regional extent at each responsive width.
        zoom: Math.log2((mapContainer.clientWidth * 360) / (512 * 0.6)),
        minZoom: 8,
        maxZoom: 18,
        maxBounds: [
          [-98.2, 30.2],
          [-97.3, 30.95],
        ],
        attributionControl: false,
        cooperativeGestures: true,
        dragRotate: false,
        touchPitch: false,
        renderWorldCopies: false,
      });

      cleanup = () => map.remove();
      map.touchZoomRotate.disableRotation();
      map.keyboard.disableRotation();
      map.addControl(
        new NavigationControl({ showCompass: false }),
        "top-right",
      );
      map.addControl(
        new AttributionControl({ compact: true }),
        "bottom-right",
      );

      const canvas = map.getCanvas();
      canvas.setAttribute(
        "aria-label",
        `Interactive map of ${officeLocation.address}. Use arrow keys to move and plus or minus to zoom.`,
      );

      const marker = document.createElement("a");
      marker.className = "office-map-pin";
      marker.href = officeLocation.directionsUrl;
      marker.target = mapLinkAttributes.target;
      marker.rel = mapLinkAttributes.rel;
      marker.setAttribute(
        "aria-label",
        `Get directions to ${officeLocation.address}`,
      );
      marker.innerHTML = '<svg viewBox="0 0 24 32" aria-hidden="true"><path d="M12 1C5.9 1 1 5.9 1 12c0 8 11 19 11 19s11-11 11-19C23 5.9 18.1 1 12 1Z" fill="currentColor"/><circle cx="12" cy="12" r="4" fill="var(--background)"/></svg>';
      new Marker({ element: marker, anchor: "bottom" })
        .setLngLat([officeLocation.longitude, officeLocation.latitude])
        .addTo(map);

      // Retain the local map until the live tiles and labels have loaded.
      let failedToLoad = false;
      map.once("load", () => {
        if (!disposed && !failedToLoad) setReady(true);
      });
      map.on("error", () => {
        failedToLoad = true;
      });
    }

    initialize(container).catch(() => {
      cleanup();
      cleanup = () => {};
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div className="office-map" data-interactive={ready}>
      <div
        ref={containerRef}
        className="office-map-live"
        aria-hidden={!ready}
        inert={!ready}
      />
      {!ready && (
        <div className="office-map-fallback">
          <div
            className="office-map-streets"
            role="img"
            aria-label={`Map centered on ${officeLocation.address}`}
          />
          <a
            className="office-map-marker"
            href={officeLocation.directionsUrl}
            aria-label={`Get directions to ${officeLocation.address}`}
            {...mapLinkAttributes}
          >
            <svg viewBox="0 0 24 32" aria-hidden="true">
              <path
                d="M12 1C5.9 1 1 5.9 1 12c0 8 11 19 11 19s11-11 11-19C23 5.9 18.1 1 12 1Z"
                fill="currentColor"
              />
              <circle cx="12" cy="12" r="4" fill="var(--background)" />
            </svg>
          </a>
          <a
            className="office-map-attribution"
            href="https://www.openstreetmap.org/copyright"
            {...mapLinkAttributes}
          >
            © OpenStreetMap contributors
          </a>
        </div>
      )}
    </div>
  );
}
