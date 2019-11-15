const boton = document.getElementById('btn');
boton.addEventListener('click', presionar)

const menu = document.querySelector('.Header_menu')

function presionar(){
  if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
  } else {
      menu.classList.add('is-active');
  }
}
