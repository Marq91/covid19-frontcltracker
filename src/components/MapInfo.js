import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import useSwr from 'swr';
import '../css/MapInfo.css';
import casesByRegion from '../db/casesByRegion';

const fetcher = (...args) => fetch(...args).then(response => response.json());

const icon = new Icon({
  iconUrl: '/coronavirus-icon.svg',
  iconSize: [25, 25]
})

export default function MapInfo() {
  const url = "https://corona.lmao.ninja/countries/chile";
  const { data, error } = useSwr(url, fetcher);

  const regions = casesByRegion;
  const [activeRegion, setActiveRegion ] = React.useState(null);

  console.log('data: ', data);
  
  console.log('cases by region : ', regions);
  console.log(activeRegion);

  // const countries = data && !error ? data.slice(0, 100) : [];

  // console.log('countries : ', countries[32]);
  

  return (
    <Map center={[-35.675148, -71.5429688]} zoom={4}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // https://tiles.wmflabs.org/osm-no-labels/${z}/${x}/${y}.png
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />

      {regions.map(region => (
        <Marker 
          key={region.id} 
          position={[region.lat, region.long]}
          icon={icon}
          onclick={() => {
            setActiveRegion(region)
          }}
        />
      ))}

      {activeRegion && 
        <Popup 
          position={[
            activeRegion.lat, 
            activeRegion.long
          ]}
          onClose={() => {
            setActiveRegion(null)
          }}
        >
          <div>
            <h2>{activeRegion.region}</h2>
            <p>Casos Totales {activeRegion.totalCases}</p>
          </div>
        </Popup>
      }
    </Map>
  );
}

