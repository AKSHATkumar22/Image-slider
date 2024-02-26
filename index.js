// I will set flag as 0

let flag = 0;

// why I have kept is that
// my Image becomes Images[0,1,2,3];

// checking my num with x variable and value
function controller(x) {
  flag = flag + x;

  slideshow(flag);

  //adding my number with controller like /**[{(x + 1) = (2 + 1) == (3)}]**/
}

// my 2nd function
function slideshow(num) {
  let slides = document.getElementsByClassName("slide");

  // for my number sets to zero
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  // if my number is less than 0 then set to array size
  if (num < 0) {
    flag = slides.length - 1;

    num = slides.length - 1;
  }

  // if y is equal to slides then keep it none
  for (let y of slides) {
    y.style.display = "none";
  }

  // my num should be blocked means that my image should not be over repeated
  slides[num].style.display = "block";
}
