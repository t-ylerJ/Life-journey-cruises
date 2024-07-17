import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const Map = ({mapData, mapboxAccessToken}) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const initialBoundsRef = useRef(null);

  useEffect(() => {
    console.log('mapData: ', mapData);
    mapboxgl.accessToken = mapboxAccessToken;

    if (mapData) {
      const { center_lat, center_long, zoom, ports } = mapData;

      console.log('center_lat: ', center_lat);
      console.log('center_long: ', center_long);
      console.log('zoom: ', zoom);
      const mapInstance = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12', // Choose a style
        center: [center_long, center_lat], // Use center coordinates from data
        zoom, // Use zoom level from data
      });

      initialBoundsRef.current = mapInstance.getBounds(); // Save initial bounds
      mapInstance.setMaxBounds(initialBoundsRef.current); // Set bounds

      mapInstance.on('load', () => {
        if (mapData && mapData.ports) { // Check if mapData and port data are available
          // Extract coordinates from ports objects
          const routeCoordinates = mapData.ports.map(p => [p.long, p.lat]);

          mapInstance.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: routeCoordinates,
              },
            },
          });

          mapInstance.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#FFED86', // Choose the color for your route line
              'line-width': 8, // Choose the width
            },
          });
        }
      });

      // Add markers for ports
      ports.forEach(p => {
        new mapboxgl.Marker()
          .setLngLat([p.long, p.lat])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(p.name))
          .addTo(mapInstance);
      });

      setMap(mapInstance); // Save the map instance

      return () => mapInstance.remove(); // Clean up on unmount
    }
  }, [mapData]); // Trigger effect when mapData changes

  return (
    <div className="map-container h-[400px] w-[600px]" ref={mapContainerRef} >
      {/* Map will be rendered here */}
    </div>
  );
};

export default Map;