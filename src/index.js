const darkMode = document.getElementById('buttonDarkMode');

darkMode.addEventListener('click', ()=>{
  document.body.classList.toggle('dark')
  darkMode.classList.toggle('darkModeActive')
})