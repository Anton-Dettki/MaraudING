import type { FeatureCollection } from 'geojson';

export const markersData: FeatureCollection = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Location 1",
        "description": "This is the first marker",
        "type": "point of interest"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.969367, 53.460606]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Location 2",
        "description": "This is the second marker",
        "type": "landmark"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.970000, 53.461000]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Location 3",
        "description": "This is the third marker",
        "type": "restaurant"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.968000, 53.459000]
      }
    }
  ]
};
