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
    time: '10.06.2025 14:32',
    picture: "https://static.dir.bg/uploads/images/2018/03/29/461047/orig.jpg?_=1524078351"
  },
  {
    lat: 42.1354,
    lng: 24.7453,
    type: 'Катастрофа',
    team: 'Екип 2',
    vehicle: 'CX1234AB',
    time: '10.06.2025 15:12',
    picture: "https://i.id24.bg/i/2110236.jpg"
  },
  {
    lat: 43.2141,
    lng: 27.9147,
    type: 'Наводнение',
    team: 'Екип 3',
    vehicle: 'VN5678CD',
    time: '09.06.2025 09:00',
    picture: "https://static.meteobalkans.com/meteo/images/2024/09/11/5785/1280X720-459093982_8711863642180374_1242772351322039528_n.jpg"
  }
];

incidents.forEach(incident => {
  const marker = L.marker([incident.lat, incident.lng]).addTo(map);
  marker.bindPopup(`
    <strong>Тип:</strong> ${incident.type}<br>
    <strong>Екип:</strong> ${incident.team}<br>
    <strong>Автомобил:</strong> ${incident.vehicle}<br>
    <strong>Време:</strong> ${incident.time}<br>
    <img src="${incident.picture}" alt="${incident.type}" style="width: 100% ; max-width: 400px; border-radius: 10px; margin-top:20px;">
  `);
});