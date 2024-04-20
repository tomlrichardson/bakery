// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -45.87812217800709, lng: 170.50064563932202 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  const buttons = document.getElementsByClassName('map-button');
  const button = buttons[0];
  // console.log(button);

  // The map, centered at Uluru
  map = new Map(document.getElementById('map'), {
    zoom: 15,
    center: position,
    mapId: '614bc5cb27da88d4',
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Taste Nature',
  });
  // google.maps.event.addDomListener(window, 'load', initialize);
  button.addEventListener('click', (event) => {
    // console.log('clicked', id);
    panTo(event, map);
  });

  // map.addListener('click', (e) => {
  //   placeMarkerAndPanTo(e.latLng, map);
  // });
}

// function placeMarkerAndPanTo(latLng, map) {
//   console.log('latLong Obj', latLng);
//   new google.maps.marker.AdvancedMarkerElement({
//     position: latLng,
//     map: map,
//   });
//   map.panTo(latLng);
// }

function panTo(event, map) {
  console.log('panning to', event.srcElement.id);
  let latLng = { lat: null, lng: null };

  if (event.srcElement.id === 'maggies') {
    latLng = {
      lat: -45.87478178590666,
      lng: 170.50699989699243,
    };
  }
  console.log('latLong Obj', latLng);
  map.panTo(latLng);
}

initMap();
