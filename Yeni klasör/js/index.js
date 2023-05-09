const slides = document.querySelector(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const nextSlide = () => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");

    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add("active");
    } else {
        slides.classList.add("active");
    }
};

const prevSlide = () => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");

    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active');
    } else {
        slides.classList.add("active");
    }
};

next.addEventListener("click", () => {
    nextSlide();
});

prev.addEventListener("click", () =>{
    prevSlide();
});
