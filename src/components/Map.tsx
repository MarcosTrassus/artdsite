
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, AlertCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showMap, setShowMap] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      // Clean up previous map instance if it exists
      if (map.current) {
        map.current.remove();
        map.current = null;
      }

      mapboxgl.accessToken = mapboxToken;
      
      const coordinates: [number, number] = [-43.3367, -22.8067]; // Coordinates for Rua Carolina Machado, 560

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: coordinates,
        zoom: 15
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker
      marker.current = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map.current);
      
      setShowMap(true);
      setError('');
    } catch (err) {
      console.error("Map initialization error:", err);
      setError('Erro ao carregar o mapa. Verifique o token do Mapbox.');
      setShowMap(false);
    }
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className={`relative h-[400px] rounded-lg overflow-hidden ${className}`}>
      {!showMap && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-4">
          <div className="mb-4 flex items-center">
            <AlertCircle className="text-amber-500 mr-2" />
            <p className="text-sm text-gray-600">
              {error || 'Para visualizar o mapa, insira seu token público do Mapbox'}
            </p>
          </div>
          
          <div className="w-full max-w-md space-y-2">
            <Input 
              type="text" 
              placeholder="Cole seu token do Mapbox aqui" 
              value={mapboxToken} 
              onChange={(e) => setMapboxToken(e.target.value)} 
              className="w-full"
            />
            <Button 
              onClick={initializeMap} 
              disabled={!mapboxToken} 
              className="w-full"
            >
              Carregar Mapa
            </Button>
          </div>
          
          <p className="mt-4 text-xs text-gray-500 max-w-md text-center">
            Para obter um token do Mapbox, acesse <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a>, crie uma conta e encontre seu token público no painel.
          </p>
        </div>
      )}
      
      <div ref={mapContainer} className={`absolute inset-0 ${!showMap ? 'hidden' : ''}`} />
    </div>
  );
};

export default Map;
