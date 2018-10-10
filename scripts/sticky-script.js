//call function on scroll
window.onscroll = () => StickyFunction();

//get navBar element
const navBar = document.getElementById('nav-sticky');
//create offset top variable
const sticky = navBar.offsetTop

function StickyFunction(){
  
  if (window.pageYOffset >= sticky){
    navBar.classList.add('sticky-nav');
  }
  else {
    navBar.classList.remove('sticky-nav');
  }
}



