// Графика 1: Произшествия по месеци
const ctx1 = document.getElementById('monthlyChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Яну', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек'],
    datasets: [{
      label: 'Произшествия',
      data: [12, 9, 15, 20, 18, 25, 22, 30, 27, 24, 19, 14],
      backgroundColor: 'rgba(179, 0, 0, 0.2)',
      borderColor: '#b30000',
      borderWidth: 2,
      fill: true,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Графика 2: Разпределение по тип на инцидента
const ctx2 = document.getElementById('typeChart').getContext('2d');
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Пожари', 'Катастрофи', 'Наводнения', 'Други'],
    datasets: [{
      label: 'Тип на инцидента',
      data: [45, 30, 10, 15],
      backgroundColor: ['#ff6b6b', '#ffa94d', '#ffd43b', '#f06595']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff' // Бял текст, подходящ за тъмен фон
        }
      }
    }
  }
});

// Скрипт за бутон смяна тема (тъмна/светла)
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if(body.classList.contains('light-mode')){
    toggleBtn.textContent = '🌞';
  } else {
    toggleBtn.textContent = '🌙';
  }
});