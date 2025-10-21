'use client'
import 'maplibre-gl/dist/maplibre-gl.css';

import Link from "next/link";
import { SetStateAction, useState } from "react";
import { Button } from "@/components/Button";
import {Map, Source, Layer, Marker, Popup} from '@vis.gl/react-maplibre';
import type CircleLayer from '@vis.gl/react-maplibre';
import type {FeatureCollection} from 'geojson';
import { markersData } from '@/data/markers';
import styles from "./page.module.css";

export default function MapPage() {

    const [selectedMarker, setSelectedMarker] = useState<{name: string, description: string, coordinates: [number, number]} | null>(null)

    const [viewState, setViewState] = useState({
        longitude: 9.969367,
        latitude: 53.460606,
        zoom: 16,
        pitch: 40
    })

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <Button variant="outline" size="sm">
            ← Mischief managed.
          </Button>
        </Link>
      </header>
      
      <main className={styles.main}>
        <div className={styles.content}>
             <Map
                 {...viewState}
                 onMove={(evt: { viewState: SetStateAction<{ longitude: number; latitude: number; zoom: number; }>; }) => setViewState(evt.viewState)}
                 style={{width: 1000, height: 700}}
                 mapStyle="https://tiles.openfreemap.org/styles/liberty"
             >
                 {markersData.features.map((feature, index) => {
                     const [longitude, latitude] = (feature.geometry as any).coordinates;
                     return (
                         <Marker key={index} longitude={longitude} latitude={latitude}>
                             <div 
                                 style={{
                                     backgroundColor: '#0070f3',
                                     width: 20,
                                     height: 20,
                                     borderRadius: '50%',
                                     border: '3px solid white',
                                     boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                     cursor: 'pointer'
                                 }}
                                 onClick={() => setSelectedMarker({
                                     name: feature.properties?.name || 'Unknown',
                                     description: feature.properties?.description || 'No description',
                                     coordinates: [longitude, latitude]
                                 })}
                             />
                         </Marker>
                     );
                 })}
                 
                 {selectedMarker && (
                     <Popup 
                         longitude={selectedMarker.coordinates[0]} 
                         latitude={selectedMarker.coordinates[1]}
                         onClose={() => setSelectedMarker(null)}
                         closeButton={true}
                         closeOnClick={false}
                     >
                         <div style={{ padding: '10px' }}>
                             <h3>📍 {selectedMarker.name}</h3>
                             <p>{selectedMarker.description}</p>
                             <p>Coordinates: {selectedMarker.coordinates[1]}, {selectedMarker.coordinates[0]}</p>
                         </div>
                     </Popup>
                 )}
             </Map>
        </div>
      </main>
    </div>
  );
}
