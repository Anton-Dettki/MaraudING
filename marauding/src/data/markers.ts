import type { FeatureCollection } from 'geojson';

export const markersData: FeatureCollection = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Central Park",
        "description": "A peaceful park perfect for relaxing and enjoying nature",
        "type": "ChillSpot"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.969367, 53.460606]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "University Library",
        "description": "Quiet study environment with excellent resources",
        "type": "StudySpot"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.970000, 53.461000]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Café Central",
        "description": "Cozy café with great coffee and light meals",
        "type": "Food"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.968000, 53.459000]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Riverside Walk",
        "description": "Scenic walking path along the river, perfect for unwinding",
        "type": "ChillSpot"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.971000, 53.462000]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Study Hall",
        "description": "Dedicated study space with group work areas",
        "type": "StudySpot"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.967000, 53.458000]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pizza Corner",
        "description": "Authentic Italian pizza and pasta dishes",
        "type": "Food"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.972000, 53.463000]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Zen Garden",
        "description": "Meditation space with beautiful landscaping",
        "type": "ChillSpot"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.966000, 53.457000]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Computer Lab",
        "description": "High-tech study environment with modern equipment",
        "type": "StudySpot"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.973000, 53.464000]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Street Food Market",
        "description": "Diverse food vendors with local and international cuisine",
        "type": "Food"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.965000, 53.456000]
      }
    }
  ]
};
