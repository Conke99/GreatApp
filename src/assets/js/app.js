// slider start

const myslide = document.querySelectorAll(".myslider");
const sliderDots = document.querySelectorAll(".dot");

let slideCounter = 1;
sliderHandler();

let timer = setInterval(autoslide, 3000);

function autoslide() {
  slideCounter += 1;
  sliderHandler();
}

function prevSlide() {
  slideCounter--;
  if (slideCounter === 0) slideCounter = 4;
  sliderHandler();
  resetTimer();
}

function nextSlide() {
  slideCounter++;
  if (slideCounter === 5) slideCounter = 1;
  sliderHandler();
  resetTimer();
}

function currentSlide(n) {
  slideCounter = n;
  sliderHandler();
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 3000);
}

function sliderHandler() {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
    sliderDots[i].classList.remove("active");
  }

  if (slideCounter > myslide.length) {
    slideCounter = 1;
  }
  if (slideCounter < 1) {
    slideCounter = myslide.length;
  }
  myslide[slideCounter - 1].style.display = "block";
  sliderDots[slideCounter - 1].classList.add("active");
}

// slider end

// counter section start

const counters = document.querySelectorAll(".counter");
const speed = 1600;
let startedSlidersCount = 0;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    console.log(count);

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 2);
    } else {
      count.innerText = target;
    }
  };
  //start the counter animation when the user reaches the top of the section
  const targetSection = document.querySelector(".numbers").offsetTop;
  const startCount = (position, counting) => {
    window.addEventListener("scroll", () => {
      scroll_position = window.scrollY;
      const windowHeight = window.innerHeight;
      const startCounter = scroll_position + windowHeight;
      if (startCounter > position && startedSlidersCount < 4) {
        startedSlidersCount++;
        counting();
      }
    });
  };

  startCount(targetSection, updateCount);
});

// DropDown Menu //
const burgerMenu = document.querySelector(".dropdown");
const mobileNav = document.querySelector(".mobile_nav");

burgerMenu.addEventListener("click", showDropDownMenu);
let isDropdownOpen = false;
function showDropDownMenu() {
  isDropdownOpen = !isDropdownOpen;
  mobileNav.style.display = isDropdownOpen ? "block" : "none";
}
