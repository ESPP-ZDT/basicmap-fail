import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const key = 'EnuHDiXm0w18g5QQ2K9m';
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/tiles/v3/${key}/{z}/{x}/{y}.png?key=${key}`
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
