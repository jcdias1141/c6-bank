//TABS
const navTabs = document.querySelectorAll('.js-nav-tabs li a');
const tabPane = document.querySelectorAll('.js-tab-pane');  

navTabs.forEach((nav, index) => {
  nav.addEventListener('click', (event) => {
    event.preventDefault();

    navTabs.forEach(itemNav => {
      itemNav.classList.remove('active');
    })

    tabPane.forEach(tab => {
      tab.classList.remove('active');
    })

    nav.classList.add('active');

    tabPane[index].classList.add('active');
  });
})

//dropdown
const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDropdown(event) {
  event.preventDefault();

  dropdown.classList.toggle('active');
}

btnDropdown.addEventListener('click', openDropdown);
//remove quando tirar o mouse do dropdown
dropdown.addEventListener('mouseleave', openDropdown);




//header fixo
const header = document.getElementById('js-header');

function fixedMenu() {
  if(window.pageYOffset > 72) {
    header.classList.add('fixed-menu');
  }else {
     header.classList.remove('fixed-menu')
  }
}
document.addEventListener('scroll', fixedMenu);



//MENU HAMBURGER
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");  
  navMenu.classList.toggle("active");
})


//ANIMATION AOS
AOS.init({
    duration: 500
});

