import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const Map = ({mapData, mapboxAccessToken, highlightedPort, hoveredPort}) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const initialBoundsRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {

    console.log('mapData: ', mapData);
    mapboxgl.accessToken = mapboxAccessToken;

    if (mapData) {
      const { center_lat, center_long, zoom, ports } = mapData;

      console.log('center_lat: ', center_lat);
      console.log('center_long: ', center_long);
      console.log('zoom: ', zoom);
      mapInstance.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12', // Choose a style
        center: [center_long, center_lat], // Use center coordinates from data
        zoom, // Use zoom level from data
      });

      initialBoundsRef.current = mapInstance.current.getBounds(); // Save initial bounds
      mapInstance.current.setMaxBounds(initialBoundsRef.current); // Set bounds

      mapInstance.current.on('load', () => {
        if (mapData && mapData.ports) { // Check if mapData and port data are available
          // Extract coordinates from ports objects
          const routeCoordinates = mapData.ports.map(p => [p.long, p.lat]);
          routeCoordinates.push(routeCoordinates[0]); // Add the first point to the end to close the loop
          console.log('mapData.ports: ', mapData.ports);
          console.log('routeCoordinates: ', routeCoordinates);

          mapInstance.current.addSource('route', {
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

          mapInstance.current.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#FBD756', // Choose the color for your route line
              'line-width': 8, // Choose the width
            },
          });
        }
      });

      // // Add markers for ports
      // ports.forEach((p, index) => {
      //   new mapboxgl.Marker({
      //     color: index === 0 ? '#E93AB5' : '#056DBD', // Orange for the first marker, pink for the rest
      //   })
      //     .setLngLat([p.long, p.lat])
      //     .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(p.name))
      //     .addTo(mapInstance);
      // });
          // Add markers for ports
      const markers = [];
      ports.forEach((p, index) => {
        const marker = new mapboxgl.Marker({
        color: highlightedPort === p.name ? '#FF0000' : (index === 0 ? '#FF7233' : '#056DBD'), // Red for first, blue for rest                   // Add a base class to all markers
      })
        .setLngLat([p.long, p.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(p.name))
        .addTo(mapInstance.current);
        markers.push(marker);
    });

      markers.push(markers[0]);
      console.log('markers: ', markers);
      const animate = () => {
        //do loops stuff
        markers.forEach((marker, index) => {
          // Check if index matches the highlighted port
          if (index === hoveredPort.current) {
            marker.addClassName("markerElement");
        } else if (index !== markers.length - 1) {
            marker.removeClassName("markerElement");
        }});
        // console.log("cactus");
        // if (hoveredPort.current) {
        //   console.log('hoveredPort: ', hoveredPort.current);
        // }
        requestAnimationFrame(animate);
      }
      animate();
      setMap(mapInstance.current); // Save the map instance

      return () => mapInstance.current.remove(); // Clean up on unmount
    }
  }, [mapData, highlightedPort]); // Trigger effect when mapData changes

  return (
    <div className="map-container h-full w-full rounded-lg" ref={mapContainerRef} >
      {/* Map will be rendered here */}
    </div>
  );
};

export default Map;