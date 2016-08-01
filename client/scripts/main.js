const activePanel = document.querySelector('#intro');
const startButton = document.querySelector('#start');

function goToNext() {
  activePanel.classList.toggle('show');
}

startButton.onclick = goToNext;

document.dispatchEvent(new CustomEvent('ig.Loaded'));
