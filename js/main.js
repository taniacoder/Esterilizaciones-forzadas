https://codepen.io/nikname/pen/LGrOQW

/**/
$(document).ready(function(){
	// options
	var speed = 500; //transition speed - fade
	var autoswitch = true; //auto slider options
	var autoswitch_speed = 5000; //auto slider speed
	
	// add first initial active class
	$(".slide").first().addClass("active");
	
	// hide all slides
	$(".slide").hide;
	
	// show only active class slide
	$(".active").show();
	
	// Next Event Handler
	$('#next').on('click', nextSlide);// call function nextSlide
	
	// Prev Event Handler
	$('#prev').on('click', prevSlide);// call function prevSlide
	
	// Auto Slider Handler
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);// call function and value 4000
	}
	
	// Switch to next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	
	// Switch to prev slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});


///slider2
var slideIndex = 0;
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
  var dots = document.getElementsByClassName("dot");
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

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 50000); // Change image every 2 seconds
}

////botones traductor
function cambia_shipibo(){
   var elemento = document.getElementById("capa"); 
   elemento.innerHTML = 'Dina Pangoa Vásquez kikinakin parancana amiga shipiba Gloria, rabé ainbo nahua(shipibama) bokanaiki paro pachiteani jain nocoananti. enfermerobaon ja Puesto de Salud Santa Rosa (distrito Masisea, provincia coronel portillo, región Pucallpa).westiora boten nanecanaiki bocanaiki Centro de Salud de Masisea jain huimeti kawé westiora chequeo médico. Dina,jawen amiga shipiba Gloria, rabé señora nahua(shipibama)bocanaiki paro Pachiteani jain nokoanani. <br> Tsecacanaiki ja  lista de Masisea jainxon peokanai kenai westiora westiorabo jaton janen sanlanco winoti.'; 
}
function cambia_español(){
   var elemento = document.getElementById("capa"); 
   elemento.innerHTML = "Dina Pangoa Vásquez fue vilmente engañada por los enfermeros del puesto de salud Santa Rosa (distrito Masisea, provincia Coronel Portillo, región Pucallpa). La subieron a un bote para llevarla al Centro de Salud de Masisea con la promesa de brindarle un chequeo médico. Dina, su amiga shipiba Gloria, y dos señoras mestizas (no shipibas) navegaron a través del río Pashitea con dirección al encuentro con sus verdugos. <br> Sacaron la lista de Masisea, y las empezaron a llamar una a una por su nombre para pasar a una sala."; 
}
