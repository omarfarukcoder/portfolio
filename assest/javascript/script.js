let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in"
    }, 340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

};
changeText();
setInterval(changeText, 3000);

// =================== circls skill =====================

const circle = document.querySelectorAll('.circle');
circle.forEach(elem => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute('data-percent');
  var percent = Math.floor(dots * marked / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll('.points');
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add('marked')
  }
})


// -------------------------------project st---------------------------------------

var mixer = mixitup('.portfolio-gallery');

// sticky navbar for tab and pc ------------------------------------------------------------------------------

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar'); // Replace 'navbar' with the ID of your navbar element
  var aboutSection = document.getElementById('about'); // Replace 'about' with the ID of the section you want to scroll past

  var navbarHeight = navbar.offsetHeight;
  var aboutSectionOffset = aboutSection.offsetTop;

  if (window.pageYOffset > aboutSectionOffset) {
    navbar.classList.add('sticky');

    // Adjust the padding of the content below the navbar to prevent it from jumping

    document.body.style.paddingTop = navbarHeight + 'px';
  } else {
    navbar.classList.remove('sticky');
    document.body.style.paddingTop = 0;
  }
});

// sticky navbar for Mobile ------------------------------------------------------------------------------

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar'); // Replace 'navbar' with the ID of your navbar element
  var aboutSection = document.getElementById('about'); // Replace 'about' with the ID of the section you want to scroll past

  var navbarHeight = navbar.offsetHeight;
  var aboutSectionOffset = aboutSection.offsetTop;

  if (window.pageYOffset > aboutSectionOffset) {
    navbar.classList.add('sticky-mobile');
    // Adjust the padding of the content below the navbar to prevent it from jumping
    document.body.style.paddingTop = navbarHeight + 'px';
  } else {
    navbar.classList.remove('sticky-mobile');
    document.body.style.paddingTop = 0;
  }
});

// toggle icon navbar -----------------------------------------------------------------------------------

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll = ()=>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}

// parallax ------------------------------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const scrollscale =document.querySelectorAll('.scrollscale');
scrollscale.forEach((el)=> observer.observe(el));

const scrollTop =document.querySelectorAll('.scrollTop');
scrollTop.forEach((el)=> observer.observe(el));

const scrollBottom =document.querySelectorAll('.scrollBottom');
scrollBottom.forEach((el)=> observer.observe(el));

const scrollLeft =document.querySelectorAll('.scrollLeft');
scrollLeft.forEach((el)=> observer.observe(el));

const scrollRight =document.querySelectorAll('.scrollRight');
scrollRight.forEach((el)=> observer.observe(el));

// code protect ---------------------------------------------


    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    // frome code -----------------------------------------------------------------
    










    