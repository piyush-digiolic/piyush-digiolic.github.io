$('.carousel').carousel();

function openModal() {
  document.getElementById('myModalSunguard').style.display = "block";
}

function closeModal() {
  document.getElementById('myModalSunguard').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}

/* microsun model */
function openModalMicrosun() {
    document.getElementById('myModalMicrosun').style.display = "block";
  }
  
  function closeModalMicrosun() {
    document.getElementById('myModalMicrosun').style.display = "none";
  }

  var slideIndexMicrosun = 1;
showSlidesMicrosun(slideIndexMicrosun);

function plusSlidesMicrosun(n) {
  showSlidesMicrosun(slideIndexMicrosun += n);
}

function currentSlideMicrosun(n) {
  showSlidesMicrosun(slideIndexMicrosun = n);
}

  function showSlidesMicrosun(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesMicrosun");
    // var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("captionMicrosun");
    if (n > slides.length) {slideIndexMicrosun = 1}
    if (n < 1) {slideIndexMicrosun = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndexMicrosun-1].style.display = "block";
    // dots[slideIndexMicrosun-1].className += " active";
    // captionText.innerHTML = dots[slideIndexMicrosun-1].alt;
  }
/* micro sun model */

/* KSCA MODAL*/
function openModalKSCA() {
  document.getElementById('myModalKSCA').style.display = "block";
}

function closeModalKSCA() {
  document.getElementById('myModalKSCA').style.display = "none";
}

var slideIndexKSCA = 1;
showSlidesKSCA(slideIndexKSCA);

function plusSlidesKSCA(n) {
showSlidesKSCA(slideIndexKSCA += n);
}

function currentSlideKSCA(n) {
showSlidesKSCA(slideIndexKSCA = n);
}

function showSlidesKSCA(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesKSCA");
  // var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("captionKSCA");
  if (n > slides.length) {slideIndexKSCA = 1}
  if (n < 1) {slideIndexKSCA = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndexKSCA-1].style.display = "block";
  // dots[slideIndexMicrosun-1].className += " active";
  // captionText.innerHTML = dots[slideIndexKSCA-1].alt;
}
/*KSCA MODAL*/

/* KSRTC MODAL*/
function openModalKSRTC() {
  document.getElementById('myModalKSRTC').style.display = "block";
}

function closeModalKSRTC() {
  document.getElementById('myModalKSRTC').style.display = "none";
}

var slideIndexKSRTC = 1;
showSlidesKSRTC(slideIndexKSRTC);

function plusSlidesKSRTC(n) {
showSlidesKSRTC(slideIndexKSRTC += n);
}

function currentSlideKSRTC(n) {
showSlidesKSRTC(slideIndexKSRTC = n);
}

function showSlidesKSRTC(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesKSRTC");
  // var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("captionKSRTC");
  if (n > slides.length) {slideIndexKSRTC = 1}
  if (n < 1) {slideIndexKSRTC = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndexKSRTC-1].style.display = "block";
  // dots[slideIndexMicrosun-1].className += " active";
  // captionText.innerHTML = dots[slideIndexKSRTC-1].alt;
}
/*KSRTC MODAL*/

/* Teamlease MODAL*/
function openModalTeamlease() {
  document.getElementById('myModalTeamlease').style.display = "block";
}

function closeModalTeamlease() {
  document.getElementById('myModalTeamlease').style.display = "none";
}

var slideIndexTeamlease = 1;
showSlidesTeamlease(slideIndexTeamlease);

function plusSlidesTeamlease(n) {
showSlidesTeamlease(slideIndexTeamlease += n);
}

function currentSlideTeamlease(n) {
showSlidesTeamlease(slideIndexTeamlease = n);
}

function showSlidesTeamlease(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesTeamlease");
  // var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("captionTeammlease");
  if (n > slides.length) {slideIndexTeamlease = 1}
  if (n < 1) {slideIndexTeamlease = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndexTeamlease-1].style.display = "block";
  // dots[slideIndexMicrosun-1].className += " active";
  // captionText.innerHTML = dots[slideIndexKSRTC-1].alt;
}
/*Teamlease MODAL*/


/* Portolio MODAL*/
function openModalPortfolio() {
  document.getElementById('myModalPortfolio').style.display = "block";
}

function closeModalPortfolio() {
  document.getElementById('myModalPortfolio').style.display = "none";
}

var slideIndexPortfolio = 1;
showSlidesPortfolio(slideIndexPortfolio);

function plusSlidesPortfolio(n) {
showSlidesPortfolio(slideIndexPortfolio += n);
}

function currentSlidePortfolio(n) {
showSlidesPortfolio(slideIndexPortfolio = n);
}

function showSlidesPortfolio(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesPortfolio");
  // var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("captionPortfolio");
  if (n > slides.length) {slideIndexPortfolio = 1}
  if (n < 1) {slideIndexPortfolio = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndexPortfolio-1].style.display = "block";
  // dots[slideIndexMicrosun-1].className += " active";
  // captionText.innerHTML = dots[slideIndexKSRTC-1].alt;
}
/*Teamlease MODAL*/