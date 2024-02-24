document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeButton = document.getElementById("toggleTheme");

  let currentTheme = localStorage.getItem('theme') || 'light';
  updateTheme();

  toggleThemeButton.addEventListener('click', () => {
    currentTheme = (currentTheme === 'light' ? 'dark' : 'light');
    updateTheme();
  });

  function updateTheme() {
    const bodyElement = document.body;
    const containerElement = document.querySelector('.container-fluid');

    if (currentTheme === 'dark') {
      bodyElement.classList.add('dark-mode');
      containerElement.classList.add('dark-mode');
      toggleThemeButton.classList.remove('btn-secondary');
      toggleThemeButton.classList.add('btn-dark');
    } else {
      bodyElement.classList.remove('dark-mode');
      containerElement.classList.remove('dark-mode');
      toggleThemeButton.classList.remove('btn-dark');
      toggleThemeButton.classList.add('btn-secondary');
    }
    localStorage.setItem('theme', currentTheme);
  }
});
