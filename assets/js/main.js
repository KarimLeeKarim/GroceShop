//==================== SLICK==================
$('.slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
    
// ==========NAVBAR SCROLLING AFTER============

window.addEventListener("scroll", yuxari)

function yuxari(){
  if(scrollY > 600){
    document.querySelector("header .nav-bar").classList.add("addNavBar")
    document.querySelector("header .nav-bar .center").classList.add("add")
    document.querySelector("header .nav-bar .center .add").style.display="flex"
    document.querySelector("header .btn-demos").style.display="flex"
    document.querySelector("header .btn-demos").classList.add("btn_Demos")
    
  }
  else if(scrollY < 600){
    document.querySelector("header .nav-bar").classList.remove("addNavBar")
    document.querySelector("header .nav-bar .center .add").style.display="none"
    document.querySelector("header .btn-demos").style.display="none"
    document.querySelector("header .btn-demos").classList.remove("btn_Demos")

  }
}

// window.addEventListener("scroll", sidebar)

// function sidebar(){
//   if(scrollY > 930){
//   document.querySelector("main .salam").classList.add("fixed")
//   }
//   else if(scrollY < 930){
//     document.querySelector("main .salam").classList.remove("fixed")
//   }
// }







