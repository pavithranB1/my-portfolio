const menu = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menu.onclick = () => {
  navList.classList.toggle('open');
};
