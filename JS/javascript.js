// Menu
$('document').ready(function () {
	$('.header__burger, .header__link').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
	})
})




// Calculator 
 btn.addEventListener('click', function(e) {

 	//Задаем переменные
	var result 			= 0;
	var puppy 			= document.querySelector('#puppy[type=checkbox]')
	var general 		= document.querySelector('#general[type=checkbox]')
	var dog 		    = document.querySelector('#dog[type=checkbox]')
	var agility 	    = document.querySelector('#agility[type=checkbox]')
	var freestyle		= document.querySelector('#freestyle[type=checkbox]')
	var young 	        = document.querySelector('#young[type=checkbox]')

	//Check age

			if (age.value === "5") {
				result += 100;
			} else if (age.value === "10") {
				result += 200;
			} else {
				result += 50;
			}
		console.log(result);
	//Check breed
			if (breed.value === "1") {
				result += 0;
			} else if (breed.value === "2") {
				result += 150;
			} else {
				result += 100;
			}
		console.log(result);
	//Check weight
			if (weight.value === "5") {
				result += 200;
			} else if (weight.value === "10") {
				result += 150;
			} else {
				result += 50;
			}
		console.log(result);
	//Check pedigree 
			if (breed.pedigree === "1") {
				result += 200;
			} else {
				result += 0;
			}
		console.log(result);
	//Check sex
		if (breed.sex=== "1") {
				result += 100;
			} else {
				result += 50;
			}
		console.log(result);

	//Checkboxes
	function checked(name, res1, res2) {
		if (name.checked) {
			result += res1;
		} else {
			result -= res2;
		}
	};

	checked(puppy, 50, 20);
	checked(general, 30, 30);
	checked(dog, 50, 30);
	checked(agility, 70, 40);
	checked(freestyle, 45, 25);
	checked(young, 40, 30);

	res.classList.add('estimate');
	res.innerHTML = 'Training course costs: ' + result + ' USD';
	}); 

// Clear data fields
document.getElementById("form-button").onclick = function(e) {
	 document.getElementById("form-input-1").value = "";
	 document.getElementById("form-input-2").value = "";
	 document.getElementById("form-input-3").value = "";
}

// Slider
$(document).ready(function(){
	$('.testimonials__slider').slick({
	  	prevArrow: '<button class="prev"></button>',
	  	nextArrow: '<button class="next"></button>',
	  	infinite: true,
	  	arrows: true,
	  	adaptiveHeight: true
	  	});
	});

// Pop up window check
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

// Smooth scrolling
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
