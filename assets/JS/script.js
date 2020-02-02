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

//hidden part
const buttonToKnowMore = document.getElementById('moreServices');
const hiddenPart = document.getElementById('hidden');
const servicesVisiblePart = document.getElementById('servicesVisiblePart');
const body = Array.from(document.getElementsByTagName('body'));
console.log(body[0]);
buttonToKnowMore.addEventListener('click', e => {
    servicesVisiblePart.style.opacity = "0";
    servicesVisiblePart.style.zIndex = "-2"
    hiddenPart.style.opacity = "1";
    hiddenPart.style.zIndex = "2";
    hiddenPart.style.transform = "translate(25%)";
    body[0].style.overflow = "hidden";
});

const buttonBack = document.getElementById('back');
buttonBack.addEventListener('click', e => {
    servicesVisiblePart.style.opacity = "1";
    servicesVisiblePart.style.zIndex = "2"
    hiddenPart.style.opacity = "0";
    hiddenPart.style.zIndex = "-2";
    hiddenPart.style.transform = "translate(-50%)";
    hiddenPart.style.top = "10%";
    body[0].style.overflow = "visible";
    body[0].style.overflowX = "hidden";

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
