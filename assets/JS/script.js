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
