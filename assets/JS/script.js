//parallax rellax
let rellax = new Rellax(".rellax", {
    // speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
  rellax.refresh();
  
// navigation background scroll
const navFixed = document.getElementById('navFixed');
window.addEventListener('scroll', e => {
    if (window.scrollY > 0) {
        navFixed.style.background = 'rgba(76,36,177,.8)';
        } else {
            navFixed.style.background = 'none';
        }
});

// hidden part
const buttonToKnowMore = document.getElementById('moreServices');
const hiddenPart = document.getElementById('hidden');
buttonToKnowMore.addEventListener('click', e => {
    hiddenPart.style.transform = "translate(0%)";
});

const buttonBack = document.getElementById('back');
buttonBack.addEventListener('click', e => {
    hiddenPart.style.transform = "translate(100%)";

});

//animation secodScene
const secondscene = document.getElementById("secondScene");
const woman = document.getElementById("woman");
const man = document.getElementById("man");
const heightWindow = window.innerHeight / 2;

window.addEventListener('scroll', e => {
    if(secondscene.getBoundingClientRect().top <= heightWindow) {
        woman.style = "transform: translateX(30%)";
        man.style = "transform: translateX(20%)";
    } else if (secondscene.getBoundingClientRect().top >= heightWindow && secondscene.getBoundingClientRect().top <= heightWindow*3) {
        woman.style = "transform: translateX(-30%)";
        man.style = "transform: translateX(-20%)";
    }
});

//animation fourthScene
const fourthScene = document.getElementById("fourthScene");
const rocket4 = document.getElementById("rocket-4");
const rocketSmoke = document.getElementById("rocketSmoke");

window.addEventListener('scroll', e => {
    if(fourthScene.getBoundingClientRect().top <= heightWindow) {
        rocket4.style = "transform: translateY(-30%)";
        rocketSmoke.style = "transform: scale(1.2)";
    } else if (fourthScene.getBoundingClientRect().top >= heightWindow && fourthScene.getBoundingClientRect().top <= heightWindow*3) {
        rocket4.style = "transform: translateY(30%)";
        rocketSmoke.style = "transform: scale(0)";
    }
});

// Soft scroll for all browsers
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
