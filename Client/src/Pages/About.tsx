import CheckpointMap from '@/components/Map/CheckpointMap';
import React from 'react';

interface LatLng {
    lat: number;
    lng: number;
    info?: string;
}

function About() {
    const center: LatLng = { lat: 31.9686, lng: 34.7887};
    const markers: LatLng[] = [
        { lat: 32.109333, lng: 34.855499, info: 'Marker 1' }, // Tel Aviv
        { lat: 31.768319, lng: 35.21371, info: 'Marker 2' },  // Jerusalem
        { lat: 32.0736, lng: 34.7778, info: 'Marker 3' },      // Herzliya
        { lat: 31.9760, lng: 34.7730, info: 'Marker 4' },      // Ashkelon
        { lat: 32.7940, lng: 34.9896, info: 'Marker 5' },      // Haifa
        { lat: 32.0853, lng: 34.7818, info: 'Marker 6' },      // Tel Aviv (Central)
        { lat: 29.5581, lng: 34.9482, info: 'Marker 7' },      // Eilat (Southern Israel)
        { lat: 31.2683, lng: 34.7987, info: 'Marker 8' },      // Be'er Sheva
        { lat: 32.3285, lng: 35.0632, info: 'Marker 9' },      // Nazareth
        { lat: 32.5461, lng: 35.0301, info: 'Marker 10' },
    ];
    
    return (
        <div className='w-full flex flex-col justify-center items-center'>
        <h1>Draggable Map with Checkpoints</h1>
        <CheckpointMap center={center} markers={markers} />
        </div>
    );
}

export default About;