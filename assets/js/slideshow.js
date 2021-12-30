var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}


function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var slides1 = document.getElementsByClassName("mySlides1");
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots1 = document.getElementsByClassName("dot1");
  var dots2 = document.getElementsByClassName("dot2");

  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }

  if (no == 0) {
    slides1[slideIndex[no]-1].style.display = "block";
    dots1[slideIndex[no]-1].className += " active";
  }
  if (no == 1) {
    slides2[slideIndex[no]-1].style.display = "block";
    dots2[slideIndex[no]-1].className += " active";
  }
  
  x[slideIndex[no]-1].style.display = "block";  
}


