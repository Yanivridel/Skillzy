import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        google: typeof google;
        initMap: () => void;
    }
}
interface LatLng {
    lat: number;
    lng: number;
    info?: string;
}

interface MapProps {
    center: LatLng;
    markers: LatLng[];
}

export default function CheckpointMap({center, markers}: MapProps ) {
    const mapRef = useGoogleMap({center,markers});

    return (
        <div ref={mapRef} style={{ height: '400px', width: '100%' }} />
    );
}

function useGoogleMap({center, markers} : MapProps) {
    const mapRef = useRef<HTMLDivElement | null>(null);
    let map: google.maps.Map;
    

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpaBPyLEmdlF5gShsgsG_06DmoJJcIsI&callback=initMap`;
        script.async = true;

        window.initMap = () => {
            if (mapRef.current) {
                map = new window.google.maps.Map(mapRef.current, {
                    center,
                    zoom: 13,
                });
            }

            markers.forEach((position) => {
                const marker = new window.google.maps.Marker({
                position: position,
                map: map,
                });
        
                const infoWindow = new window.google.maps.InfoWindow({
                    content: `
                    <div class="p-4 bg-white rounded-lg shadow-lg max-w-xs">
                        <h2 class="text-xl font-semibold text-gray-800">${position.info}</h2>
                    </div>
                    `,
                });
        
                marker.addListener('click', () => {
                infoWindow.open(map, marker);
                console.log(`Marker clicked: Lat: ${position.lat}, Lng: ${position.lng}`);
                });
            });
        
        };

        document.body.appendChild(script);

        return () => {
        document.body.removeChild(script);
        };
    }, [center, markers]);

    return mapRef;
}