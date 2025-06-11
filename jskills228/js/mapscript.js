const map = L.map('map').setView([42.6975, 23.3242], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const incidents = [
  {
    lat: 42.6975,
    lng: 23.3242,
    type: 'Пожар',
    team: 'Екип 1',
    vehicle: 'PB9876BC',
    time: '10.06.2025 14:32'
  },
  {
    lat: 42.1354,
    lng: 24.7453,
    type: 'Катастрофа',
    team: 'Екип 2',
    vehicle: 'CX1234AB',
    time: '10.06.2025 15:12'
  },
  {
    lat: 43.2141,
    lng: 27.9147,
    type: 'Наводнение',
    team: 'Екип 3',
    vehicle: 'VN5678CD',
    time: '09.06.2025 09:00'
  }
];

incidents.forEach(incident => {
  const marker = L.marker([incident.lat, incident.lng]).addTo(map);
  marker.bindPopup(`
    <strong>Тип:</strong> ${incident.type}<br>
    <strong>Екип:</strong> ${incident.team}<br>
    <strong>Автомобил:</strong> ${incident.vehicle}<br>
    <strong>Време:</strong> ${incident.time}
  `);
});