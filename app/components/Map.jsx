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
    console.log('mapboxAccessToken: ', mapboxAccessToken);

    if (mapData) {
      const { center_lat, center_long, zoom, port } = mapData;

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

      // Add markers for ports
      port.forEach(p => {
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
    <div className="map-container" ref={mapContainerRef} style={{ height: '400px', width: '400px' }}>
      {/* Map will be rendered here */}
    </div>
  );
};

export default Map;