import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  LayersControl
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import '../components/LiveTracking.scss';

const { BaseLayer } = LayersControl;

const customIcon = L.icon({
  iconUrl: '/marker-icon.png',
  iconSize: [35, 30],
  iconAnchor: [17, 45],
  popupAnchor: [0, -40]
});

const LiveLocationMarker = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position);
      console.log(position);
    }
  }, [position, map]);

  return position ? (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
};

const MapView = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error('Error getting position:', err);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
      }
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={position || [0, 0]}
        zoom={20}
        className="leaflet-container"
        attributionControl={false}
      >
        <LayersControl position="topright">
          {/* ✅ Default is satellite */}
          <BaseLayer checked name="Satellite View" attribution={false}>
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              
            />
          </BaseLayer>

          {/* Alternative: Street map */}
          <BaseLayer name="Street Map" attribution={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             
            />
          </BaseLayer>
        </LayersControl>

        <LiveLocationMarker position={position} />
      </MapContainer>
    </div>
  );
};

export default MapView;
