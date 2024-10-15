let slideIndex = 0;
let autoSlideInterval;

showSlides(slideIndex);
autoSlides(); // Start the automatic slideshow

// Function to show the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Function for next/previous controls
function plusSlides(n) {
    clearInterval(autoSlideInterval); // Stop auto sliding when button is clicked
    slideIndex += n;
    showSlides(slideIndex);
    autoSlides(); // Restart auto sliding
}

// Function to go to a specific slide when clicking on a dot
function currentSlide(n) {
    clearInterval(autoSlideInterval); // Stop auto sliding
    slideIndex = n - 1;
    showSlides(slideIndex);
    autoSlides(); // Restart auto sliding
}

// Function for automatic slide change
function autoSlides() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000); // Change slide every 4 seconds
}


