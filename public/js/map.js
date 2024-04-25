// Initialize and add the map
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

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Taste Nature',
  });
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('click', (event) => {
      panTo(event, map);
    });
  }
}

function panTo(event, map) {
  console.log('event', event.srcElement.id);
  const companies = [
    {
      id: 'Maggies',
      location: {
        lat: -45.874729497809945,
        lng: 170.50702135478062,
      },
    },
    {
      id: 'Taste Nature',
      location: {
        lat: -45.87478178590666,
        lng: 170.50699989699243,
      },
    },
    {
      id: 'The Duck',
      location: {
        lat: -45.86893298402782,
        lng: 170.59789016827284,
      },
    },
  ];
  let latLng = { lat: null, lng: null };
  for (let i = 0; i < companies.length; i++) {
    if (event.srcElement.id === companies[i].id) {
      latLng = {
        lat: companies[i].location.lat,
        lng: companies[i].location.lng,
      };
    }
  }
  console.log('latLong Obj', latLng);
  map.panTo(latLng);
}

initMap();
