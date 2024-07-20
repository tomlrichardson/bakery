// Initialize and add the map
import { companies } from './companies.js';
let map;

async function initMap() {
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  const buttons = document.getElementsByClassName('map-button');

  const position = {
    lat: -45.87478178590666,
    lng: 170.50699989699243,
  };

  map = new Map(document.getElementById('map'), {
    zoom: 15,
    center: position,
    mapId: '614bc5cb27da88d4',
  });

  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];
    const marker = new AdvancedMarkerElement({
      map: map,
      position: company.coords,
      title: company.name,
    });
  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('click', (event) => {
      panTo(event, map);
    });
  }
}

function panTo(event, map) {
  // console.log('event', event.srcElement.id);

  let latLng = { lat: null, lng: null };
  for (let i = 0; i < companies.length; i++) {
    if (event.srcElement.id === companies[i].name) {
      latLng = {
        lat: companies[i].coords.lat,
        lng: companies[i].coords.lng,
      };
    }
  }
  map.panTo(latLng);
}

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

initMap();
