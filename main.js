document.querySelector('.toggle').addEventListener('click', evt => {
  const switchElm = document.querySelector('.switch');
  const switchToDarkMode = !switchElm.classList.contains('move-right');
  if (switchToDarkMode) {
    switchElm.classList.add('move-right');
    document.body.style.backgroundColor = '#202124';
    document.body.style.color = '#e2e2e2';
    document.body.style.setProperty('--theme', 'dark');
  } else {
    switchElm.classList.remove('move-right');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = '#161616';
    document.body.style.setProperty('--theme', 'light');
  }
});