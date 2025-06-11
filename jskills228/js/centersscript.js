document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Зареждаме тема от localStorage
  if(localStorage.getItem('theme') === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    if(body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  //Стартова позиция
  const map = L.map('map').setView([42.6977, 23.3219], 12); 

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const centers = [
    { name: "Пожарна Станция София", coords: [42.6977, 23.3219], contact: "+359 2 982 13 20", image: "https://sofia-fire.bg/resources/images/content/about/05rs.jpg" },
    { name: "Пожарна Станция Пловдив", coords: [42.1354, 24.7453], contact: "+359 32 932 200", image: "https://glasnews.bg/news/vfs/f/3/e/2/f3e2a021b0da9ee70e90e2cf647e5e8b25d68820.jpg" },
    { name: "Пожарна Станция Варна", coords: [43.2141, 27.9147], contact: "+359 56 856 200", image: "https://cache2.24chasa.bg/Images/Cache/526/Image_10174526_40_0.jpg" },
    { name: "Пожарна Станция Бургас", coords: [42.5048, 27.4626], contact: "+359 56 911", image: "https://namoreto.bg/wp-content/uploads/2021/03/dsc_0078-640x427.jpg" },
    { name: "Пожарна Станция Русе", coords: [43.8496, 25.9534], contact: "+359 82 882 112", image: "https://static.bnr.bg/gallery/cr/64e91846ad4d357dc439cb4ec381cd20.jpg" },
    { name: "Пожарна Станция Стара Загора", coords: [42.4258, 25.6345], contact: "+359 42 614 300", image: "https://static.bnr.bg/gallery/04/042c0f281eb0fa8c43af148c1590869a.jpg" },
    { name: "Пожарна Станция Велико Търново", coords: [43.0806, 25.6292], contact: "+359 62 620 148", image: "https://cache2.24chasa.bg/Images/Cache/338/Image_10664338_40_0.jpg" },
    { name: "Пожарна Станция Плевен", coords: [43.4167, 24.6167], contact: "+359 64 831 295", image: "https://radio.pleven.bg/wp-content/uploads/2018/02/pojarna-140-20-1210x642.jpg" },
    { name: "Пожарна Станция Шумен", coords: [43.2711, 26.9226], contact: "+359 54 800 135", image: "https://static.bnr.bg/gallery/cr/medium/f6c911c516eaf84f55220c40f6d5183e.jpg" },
    { name: "Пожарна Станция Хасково", coords: [41.9398, 25.5636], contact: "+359 38 603 300", image: "https://static.bnr.bg/gallery/cr/ee7898f91da4138e500f95aa2e958dae.jpg" },
    { name: "Пожарна Станция Перник", coords: [42.6073, 23.0373], contact: "+359 76 602 303", image: "https://static.bnr.bg/gallery/cr/9be3e084fdf851e0bd525fc4e4131b00.jpg" }
  ];
  centers.forEach(center => {
    L.marker(center.coords)
      .addTo(map)
      .bindPopup(`
        <b>${center.name}</b><br>
        Телефон: ${center.contact}<br>
        <img src="${center.image}" alt="${center.name}" style="width: 100% ; max-width: 400px; border-radius: 10px; margin-top:20px;">
      `);
  });
});



