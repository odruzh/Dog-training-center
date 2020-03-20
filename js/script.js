
$('document').ready(function () {
	$('.header__burger, .header__link').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
	})
})


 btn.addEventListener('click', function(event) {
	if (age.value === "5") {
				result += 100;
			} else if (age.value === "10") {
				result += 200;
			} else {
				result += 50;
			}
		console.log(result);

			if (size.value === "1") {
				result += 0;
			} else if (size.value === "2") {
				result += 150;
			} else {
				result += 100;
			}
		console.log(result);

			if (services.value === "5") {
				result += 200;
			} else if (services.value === "10") {
				result += 150;
			} else {
				result += 50;
			}
		console.log(result);



document.getElementById("form-button").onclick = function(event) {
	 document.getElementById("form-input-1").value = "";
	 document.getElementById("form-input-2").value = "";
	 document.getElementById("form-input-3").value = "";
}


$(document).ready(function(){
	$('.testimonials__slider').slick({
	  	prevArrow: '<button class="prev"></button>',
	  	nextArrow: '<button class="next"></button>',
	  	infinite: true,
	  	arrows: true,
	  	adaptiveHeight: true
	  	});
	});


$(document).ready(function(){
	$('.form__btn').on('click', function(event) {
		event.preventDefault();
		$('.form__background').fadeIn();
	});
	$('.form__close').on('click', function(event) {
		event.preventDefault();
		$('.form__background').fadeOut();
	});
	$('.form__button').on('click', function(event) {
		event.preventDefault();
		$('.form__background').fadeOut();
	});
	});


const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
	event.preventDefault();
	const blockID = anchor.getAttribute('href');
	document.querySelector('' + blockID).scrollIntoView({
		behavior: "smooth",
		block: "center"
	});
})
}
