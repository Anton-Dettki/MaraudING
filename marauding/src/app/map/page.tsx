'use client'
import 'maplibre-gl/dist/maplibre-gl.css';

import Link from "next/link";
import { useState, useMemo } from "react";
import { Button, LocationFilter } from "@/components";
import {Map, Marker, Popup} from '@vis.gl/react-maplibre';
import { markersData } from '@/data/markers';
import { LocationFilter as FilterType, LocationType } from '@/types';
import { MARKER_COLORS } from '@/constants/colors';
import styles from "./page.module.css";

export default function MapPage() {

    const [selectedMarker, setSelectedMarker] = useState<{name: string, description: string, coordinates: [number, number]} | null>(null)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    
    const [filters, setFilters] = useState<FilterType>({
        ChillSpot: true,
        StudySpot: true,
        Food: true
    })

    const [viewState, setViewState] = useState({
        longitude: 9.969367,
        latitude: 53.460606,
        zoom: 16,
        pitch: 40
    })

    const filteredMarkers = useMemo(() => {
        return markersData.features.filter(feature => {
            const markerType = feature.properties?.type as LocationType;
            return filters[markerType];
        });
    }, [filters]);

    const getMarkerColor = (type: LocationType) => {
        return MARKER_COLORS[type] || MARKER_COLORS.default;
    };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <Button variant="outline">
            ← Mischief managed.
          </Button>
        </Link>
        <button 
          className={styles.mobileFilterButton}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          🗺️ Filters
        </button>
      </header>
      
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <LocationFilter 
            filters={filters} 
            onFilterChange={setFilters} 
          />
        </div>
        
        {isFilterOpen && (
          <div className={styles.mobileFilterOverlay} onClick={() => setIsFilterOpen(false)}>
            <div className={styles.mobileFilterPopout} onClick={(e) => e.stopPropagation()}>
              <div className={styles.mobileFilterHeader}>
                <h3>Filter Locations</h3>
                <button 
                  className={styles.closeFilterButton}
                  onClick={() => setIsFilterOpen(false)}
                >
                  ×
                </button>
              </div>
              <LocationFilter 
                filters={filters} 
                onFilterChange={setFilters} 
              />
            </div>
          </div>
        )}
        
        <div className={styles.content}>
             <Map
                 {...viewState}
                 onMove={(evt: { viewState: { longitude: number; latitude: number; zoom: number; pitch: number; } }) => setViewState(evt.viewState)}
                 style={{width: '100%', height: '100%', minHeight: '500px'}}
                 mapStyle="https://api.maptiler.com/maps/019a083a-38b3-7358-8093-dd0d3c313965/style.json?key=A1331gpmPdbgWzYxhU7E"
             >
                 {filteredMarkers.map((feature, index) => {
                     const [longitude, latitude] = (feature.geometry as GeoJSON.Point).coordinates;
                     const markerType = feature.properties?.type as LocationType;
                     return (
                         <Marker key={index} longitude={longitude} latitude={latitude}>
                             <div 
                                 style={{
                                     backgroundColor: getMarkerColor(markerType),
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
                     )
                 })}
                 
                 {selectedMarker && (
                     <Popup 
                         longitude={selectedMarker.coordinates[0]} 
                         latitude={selectedMarker.coordinates[1]}
                         onClose={() => setSelectedMarker(null)}
                         closeButton={false}
                         closeOnClick={false}
                     >
                         <div className={styles.popupContent}>
                             <button 
                                 className={styles.closeButton}
                                 onClick={() => setSelectedMarker(null)}
                                 aria-label="Close popup"
                             >
                                 ×
                             </button>
                             <h3 className={styles.popupTitle}>📍 {selectedMarker.name}</h3>
                             <p className={styles.popupDescription}>{selectedMarker.description}</p>
                             <a 
                                 href={`https://www.google.com/maps?q=${selectedMarker.coordinates[1]},${selectedMarker.coordinates[0]}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className={styles.popupLink}
                             >
                                 🗺️ View on Google Maps
                             </a>
                         </div>
                     </Popup>
                 )}
             </Map>
        </div>
      </main>
    </div>
  )
}
