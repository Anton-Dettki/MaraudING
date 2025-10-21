import type { FeatureCollection } from 'geojson';

export const markersData: FeatureCollection = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "TU Teich",
        "description": "Perfekt zum chillen zwischen den Vorlesungen",
        "type": "ChillSpot",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.968997, 53.460296]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "TUB",
        "description": "Library with group rooms and solo seats to study",
        "type": "StudySpot",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.96935, 53.46097]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Café insgrüne",
        "description": "ASTA Cafe, nice seats outside",
        "type": "Food",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.97007, 53.45945]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gebäude Q",
        "description": "Dedicated study space with small group work areas",
        "type": "StudySpot",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.97089, 53.46002]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Aquarien",
        "description": "Small group rooms on the first floor of building A",
        "type": "StudySpot",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.96965, 53.46355]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Café ZessP",
        "description": "ASTA managed Cafe, warm foods",
        "type": "Food",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.97062, 53.46306]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Mensa & Pizza Store",
        "description": "MENSA Warm foods/salad bar as well as pizza slices",
        "type": "Food",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.96980, 53.46080]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "H Rooms",
        "description": "Often unused Seminar rooms",
        "type": "StudySpot",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [9.96965, 53.46355]
      }
    },
    ]
};
