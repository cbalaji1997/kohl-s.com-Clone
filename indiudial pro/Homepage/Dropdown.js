// function for account drop down.

var btn1 = document.querySelector(".menu2");

var list2 = document.querySelector(".acc_menu");

list2.style.display = "none";

btn1.addEventListener("click", function () {
    if (list2.style.display == "none") {
        list2.style.display = "block";
    } else {
        list2.style.display = "none";
    }
});

// moble search dropdown function

var btn5 = document.querySelector(".srch");

var list5 = document.querySelector("#mob_srch");

list5.style.display = "none";

btn5.addEventListener("click", function () {
    if (list5.style.display == "none") {
        list5.style.display = "block";
    } else {
        list5.style.display = "none";
    }
});

//  Ham Burger Menu

var btn6 = document.querySelector(".open");

var list6 = document.querySelector(".mob_menu");

var close = document.querySelector(".close");
close.addEventListener("click", function () {
    list6.style.display = "none";
});

// var body = document.querySelector("body").addEventListener("click", function(){
//   list6.style.display = "none";
// })

list6.style.display = "none";

btn6.addEventListener("click", function () {
    if (list6.style.display == "none") {
        list6.style.display = "block";
    } else {
        list6.style.display = "none";
    }
});

// ham sub menu

var btn7 = document.querySelector(".sub_menu");

var list7 = document.querySelector(".cata_list");

list7.style.display = "none";

btn7.addEventListener("click", function () {
    if (list7.style.display == "none") {
        list7.style.display = "block";
    } else {
        list7.style.display = "none";
    }
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
  
  