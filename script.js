const map = L.map('map', {
  zoomControl: false
}).setView([48.5, 31], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// тимчасово просто карта України
fetch('https://raw.githubusercontent.com/wmgeolab/geoBoundaries/main/releaseData/gbOpen/UKR/ADM1/geoBoundaries-UKR-ADM1.geojson')
  .then(r => r.json())
  .then(data => {
    L.geoJSON(data, {
      style: {
        fillColor: '#2ecc71',
        weight: 1,
        color: '#333',
        fillOpacity: 0.7
      }
    }).addTo(map);
  });
