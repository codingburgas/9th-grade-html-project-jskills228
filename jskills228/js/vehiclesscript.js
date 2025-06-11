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