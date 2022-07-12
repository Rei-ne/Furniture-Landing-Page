import './style.css'

//Navigation
const navBtn = document.querySelector('#menu');
const cancelBtn = document.querySelector('#cancel')

const menubar = document.querySelector('[role="menubar"]');
navBtn.addEventListener('click', () => {


  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));

  navBtn.setAttribute('aria-expanded', !isExpanded)
  menubar.classList.toggle('hidden');

  menubar.classList.toggle('flex');


  navBtn.classList.toggle('hidden');
  cancelBtn.classList.toggle('hidden');


});

cancelBtn.addEventListener('click', () => {
  menubar.classList.toggle('hidden');

  menubar.classList.toggle('flex');
  cancelBtn.classList.toggle('hidden');
  navBtn.classList.toggle('hidden');

});



