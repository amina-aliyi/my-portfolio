
		

// .......................................
    //  document.addEventListener("DOMContentLoaded", function () {
	// 			var scrollLinks = document.querySelectorAll(".scroll-link");

	// 			scrollLinks.forEach(function (link) {
	// 				link.addEventListener("click", function (e) {
	// 					e.preventDefault();

	// 					var targetId = this.getAttribute("href").substring(1);
	// 					var targetElement = document.getElementById(targetId);

	// 					if (targetElement) {
	// 						targetElement.scrollIntoView({ behavior: "smooth" });
	// 					}
	// 				});
	// 			});
	//  });
			


	      document.addEventListener("DOMContentLoaded", function () {
					document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
						anchor.addEventListener("click", function (e) {
							e.preventDefault();

							var targetId = this.getAttribute("href").substring(1);
							var targetElement = document.getElementById(targetId);

							if (targetElement) {
								targetElement.scrollIntoView({ behavior: "smooth" });
							}
						});
					});
				});





 document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".theHeader");
			var scrollPosition = window.scrollY;

			// Check if the scroll position is greater than or equal to 100px

			if (scrollPosition >= 100) {
				header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
			} else {
				header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
			}
		});
 });
//to show the Amazon banner slide dynamically

const images = [
	{
		imageSrc: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
		text: "Kitchen favorites Under $50",
	},
	{
		imageSrc: "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
		text: "Shop Books",
	},
	{
		imageSrc: "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
		text: "Shop Gaming essentials",
	},
	
	{
		imageSrc: "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
		text: "Beauty products",
	},
];

const slider = document.querySelector(".slider");
const textElement = document.getElementById("slider-text");
let currentIndex = 0;

function createSlide(image, text) {
	const slide = document.createElement("div");
	slide.classList.add("slide");
	slide.style.backgroundImage = `url('${image}')`; 
	slider.appendChild(slide);

	// textElement.textContent = text;
}

function updateSlider() {
	slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Create slides
images.forEach(({ imageSrc, text }) => createSlide(imageSrc, text));

// Function to move to the next slide
function nextSlide() {
	currentIndex = (currentIndex + 1) % images.length;
	updateSlider();
}

// Auto slide change every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);




// animating the text on portifolio

//   document.addEventListener("DOMContentLoaded", function () {
// 		var textElement = document.getElementById("text");

// 		textElement.classList.add("animated-text");
// 	});

// document.addEventListener("DOMContentLoaded", function () {
// 	var textElement = document.getElementById("text");
// 	var words = ["Hello", "there,", "I'm", "a", "front", "end", "developer"];
// 	var currentIndex = 0;

// 	function typeWord() {
// 		var currentWord = words[currentIndex];
// 		var wordElement = document.createElement("span");
// 		wordElement.textContent = currentWord;
// 		wordElement.classList.add("word");
// 		textElement.appendChild(wordElement);

// 		// Move to the next word or loop back to the first word
// 		currentIndex = (currentIndex + 1) % words.length;
// 	}

// 	function clearText() {
// 		while (textElement.firstChild) {
// 			textElement.removeChild(textElement.firstChild);
// 		}
// 	}

// 	function startAnimation() {
// 		clearText();
// 		typeWord();
// 		setTimeout(startAnimation, 3000); // Adjust the delay between words
// 	}

// 	startAnimation();
// });