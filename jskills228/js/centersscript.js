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
