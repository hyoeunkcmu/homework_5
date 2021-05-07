//gsap animation
// layer one animation
gsap.set(".cloud-right", {x: -100, y: 20});
var tl = gsap.timeline({repeat: -1});
tl.to(".cloud-right", {duration: 5.5, x: -300, ease: "none"});
tl.to(".cloud-right", {duration: 5.5, x: -100, ease: "none"});

gsap.set(".cloud-left", {x: 100, y: -20});
var tl2 = gsap.timeline({repeat: -1});
tl2.to(".cloud-left", {duration: 4, x: 200});
tl2.to(".cloud-left", {duration: 4, x: 100});

document.querySelector(".btn").onclick = () => layerTimeline.play();

// layer transition animation
const layerTimeline = gsap.timeline({onStart: addShow, onStartParams:[2]});
layerTimeline.to(".one", {opacity: 0, duration: 0.5})
layerTimeline.from(".two", {opacity: 0, duration: 0.5}, "-=0.2")
layerTimeline.pause();
layerTimeline.eventCallback("onComplete", deleteShow, [1]);

// add or delete show flag
var layerArray = document.querySelectorAll(".layer");
function addShow(el){
    layerArray[el].classList.add('show');
}
function deleteShow(el){
    layerArray[el].classList.remove('show');
}

// layer two animation
gsap.set("#Polygon-1", {
    skewX: "180deg",
    y: 183,
    transformOrigin: "100% 50%"
});

gsap.set(".ticket", {
    autoAlpha: 0
})

const letterTl = gsap.timeline({repeat: -1, repeatDelay: 1});
letterTl.to(".letter", {rotation: 3, duration: 0.1, ease:Power2.easeOut})
letterTl.to(".letter", {rotation: -3, duration: 0.1, ease:Power2.easeOut})
letterTl.to(".letter", {rotation: 3, duration: 0.1, ease:Power2.easeOut})
letterTl.to(".letter", {rotation: -3, duration: 0.1, ease:Power2.easeOut})
letterTl.to(".letter", {rotation: 3, duration: 0.1, ease:Power2.easeOut})
letterTl.to(".letter", {rotation: -3, duration: 0.1, ease:Power2.easeOut})
letterTl.to(".letter", {rotation: 0, duration: 0.1, ease:Power2.easeOut})

document.querySelector("#Polygon-1").onclick = () => letterFunction();
document.querySelector("#Subtract").onclick = () => letterFunction();

function letterFunction(){
    letterTl.pause();
    letterOpenTl.play();
}

const letterOpenTl = gsap.timeline();
letterOpenTl.to("#Polygon-1", {duration:0.1, skewX: "360deg", y: 0, transformOrigin: "100% 50%"});
letterOpenTl.to("#flight-ticket", {duration:1, y: -10});
letterOpenTl.to("#flight-ticket", {duration:1, y: 0});
letterOpenTl.to("#flight-ticket", {duration:1, y: -10});
letterOpenTl.to("#flight-ticket", {duration:1, y: 0});
letterOpenTl.to("#flight-ticket", {duration:1, y: -10});
letterOpenTl.to("#flight-ticket", {duration:1, y: 0});
letterOpenTl.to("#flight-ticket", {duration:1, y: -10});
letterOpenTl.to("#flight-ticket", {duration:1, y: 0});
letterOpenTl.pause();

document.querySelector("#flight-ticket").onclick = () => ticketFunction();

gsap.set(".next", {autoAlpha: 0});
const ticketTl = gsap.timeline();
ticketTl.set("#flight-ticket", {autoAlpha: 0});
ticketTl.set(".ticket", {autoAlpha: 1});
ticketTl.to(".ticket", {scale:1.2});
ticketTl.to(".next", {duration:0.5, autoAlpha: 1})
ticketTl.pause();

function ticketFunction() {
    letterOpenTl.pause();
    ticketTl.play();
}

document.querySelector(".next").onclick = () => layer2Transition();

function layer2Transition() {
    gsap.set(".four", {scale:0.8})
    addShow(3)
    deleteShow(2)
    gsap.to(".four", {duration:0.3, scale:1})
}

// layer four animation
gsap.set("#bag", {y:0})
var bagTl = gsap.timeline({repeat: -1, repeatDelay: 1});
bagTl.to("#bag", {y: -50, duration: 0.5, ease:Power2.easeOut});
bagTl.to("#bag", {y: 0, duration: 0.5, ease:Bounce.easeOut});

document.querySelector("#bag").onclick = () => layer3Transition();
function layer3Transition() {
    gsap.set(".five", {scale:0.8})
    addShow(4)
    deleteShow(3)
    gsap.to(".five", {duration:0.3, scale:1})
}

// layer five animation - draggable
// cite: https://interactjs.io/
// id: position value
var dict = {
    "sheep": { x: 0, y: 0 },
    "crayon": { x: 0, y: 0 },
    "bear": { x: 0, y: 0 },
    "monkey": { x: 0, y: 0 },
    "excavator-toy": { x: 0, y: 0 },
    "sunglasses": { x: 0, y: 0 }
}

var position = {x:0, y:0}
var counter = 0
gsap.set(".next-low", {autoAlpha: 0})
interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
      counter += 1;
      if(counter >= 4){
      gsap.to(".next-low", {duration:0.5, autoAlpha: 1})
      }
      for (var key in dict) {
          if(key === event.target.id){
              position = dict[key];
              console.log("position", position);
          }
      }
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy
      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

document.querySelector(".next-low").onclick = () => layer4Transition();
function layer4Transition() {
    gsap.set(".six", {scale:0.8})
    addShow(5)
    deleteShow(4)
    gsap.to(".six", {duration:0.3, scale:1})
}

// layer six animation
// gsap.set("#road", {x:0})
const roadTl = gsap.timeline({repeat:-1});
roadTl.set("#road", {x: window.innerWidth})
roadTl.to("#road", {duration: 2, x: -window.innerWidth, ease: "none"})

const carTl = gsap.timeline();
carTl.to("#car-container", {duration: 0.6, y:30, ease:"circ.in", repeat:-1, yoyo:true})
gsap.set("#circle-1", {scale: 0.8, x: -5, y: 7})
gsap.set("#circle-2", {scale: 0.8, y: 7})
gsap.set("#circle-3", {scale: 0.8, x: 5, y: 7})
const circleTl = gsap.timeline({repeat: -1, repeatDelay: 0.8});
circleTl.to("#circle-1", {duration: 0.1, y:0, ease: " slow( 0.7 0.7, 0.7 0.7, false)"})
circleTl.to("#circle-2", {duration: 0.1, y:0, ease: " slow( 0.7 0.7, 0.7 0.7, false)"})
circleTl.to("#circle-1", {duration: 0.1, y:7, ease: " slow( 0.7 0.7, 0.7 0.7, false)"})
circleTl.to("#circle-3", {duration: 0.1, y:0, ease: " slow( 0.7 0.7, 0.7 0.7, false)"})
circleTl.to("#circle-2", {duration: 0.1, y:7, ease: " slow( 0.7 0.7, 0.7 0.7, false)"})
circleTl.to("#circle-3", {duration: 0.1, y:7, ease: " slow( 0.7 0.7, 0.7 0.7, false)"})

document.querySelector("#car-container").onclick = () => carFunction();

function carFunction(){
    carTl.pause();
    carDriveTl.play();
}

const carDriveTl = gsap.timeline({onComplete: layer5Transition});
carDriveTl.to("#car-container", {duration:3, x:window.innerWidth});
carDriveTl.pause();

function layer5Transition(){
    gsap.to(".six", {duration:2, autoAlpha: 0, onComplete: addShow(6)});
    deleteShow(5)
}

// layer seven animation
gsap.set("#seattle", {autoAlpha:1});
const boardTl = gsap.timeline({repeat:-1, repeatDelay: 0.5});
boardTl.to("#seattle", {duration:0.3, autoAlpha:0, ease: "none"});
boardTl.to("#seattle", {duration:1, autoAlpha:1, ease: "none"});
document.querySelector("#board").onclick = () => layer6Transition();
function layer6Transition() {
    gsap.set(".eight", {scale:0.8})
    addShow(7)
    deleteShow(6)
    gsap.to(".eight", {duration:0.3, scale:1})
}

// layer eight animation
document.querySelector("#circle").addEventListener("click", layer7Transition);

const airplaneTl = gsap.timeline({onStart: layer7Transition});
airplaneTl.set(".nine", {autoAlpha:0})
airplaneTl.set(".eight", {duration:5, autoAlpha:1});
airplaneTl.to(".eight", {duration:1, autoAlpha:0});
airplaneTl.to(".nine", {duration:1, autoAlpha:1}, "-=0.5");
airplaneTl.pause();

function layer7Transition() {
    console.log("test")
    addShow(8)
    deleteShow(7)
}

// layer nine animation
gsap.registerPlugin(MotionPathPlugin);
const planeDelayTl = gsap.timeline();
planeDelayTl.to(".plane-container", {
    duration: 5, 
    repeat: 12,
    repeatDelay: 1,
    yoyo: false,
    ease: "power1.inOut",
    motionPath:{
      path: "#route",
      align: "#route",
      alignOrigin: [0.5, 0.5]
    }
});

const screenTl = gsap.timeline();
screenTl.set(".next-plane", {autoAlpha:0});
screenTl.to(".next-plane", {duration:5, autoAlpha:0});
screenTl.to(".next-plane", {duration:1, autoAlpha:1});

document.querySelector(".next-plane").onclick = () => layer8Transition();
function layer8Transition() {
    gsap.set(".ten", {scale:0.8})
    addShow(9)
    deleteShow(8)
    gsap.to(".ten", {duration:0.3, scale:1})
}

// layer ten animation
gsap.to("#plane-cloud1", {duration:2, repeat: -1, y:"random(-30, 10)", yoyo: true})
gsap.to("#plane-cloud2", {duration:1.8, repeat: -1, y:"random(-10, 5)", yoyo: true})

const planeTl = gsap.timeline({repeat:-1, yoyo: true});
planeTl.to("#plane", {duration:1, x: 30})

const planeMoveTl = gsap.timeline({onComplete:layer9Transition});
planeMoveTl.to("#plane", {duration:3, x: 2000})
planeMoveTl.pause();

document.getElementById("plane").onclick = () => planeFunction();

function planeFunction() {
    planeTl.pause();
    planeMoveTl.play();   
}

function layer9Transition() {
    gsap.set(".eleven", {autoAlpha:0})
    gsap.to(".ten", {duration:0.5, autoAlpha:1})
    addShow(10)
    deleteShow(9)
    gsap.to(".eleven", {duration:0.5, autoAlpha:1})
}

// layer eleven animation
const cityPlaneTl = gsap.timeline({onComplete:layer10Transition});
cityPlaneTl.to("#plane-sm", {
    duration: 5, 
    // repeat: 12,
    repeatDelay: 3,
    yoyo: false,
    ease: "power1.inOut",
    motionPath:{
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5]
    }
});
cityPlaneTl.pause();

const cityPlaneTl2 = gsap.timeline();
cityPlaneTl2.to("#plane-sm", {duration: 0.5, repeat:-1, x: 20, yoyo:true});

document.querySelector("#plane-sm").onclick = () => planeAnimation();

function planeAnimation() {
    cityPlaneTl.play();
    cityPlaneTl2.pause();
}

function layer10Transition() {
    gsap.set(".twelve", {autoAlpha:0})
    gsap.to(".eleven", {duration:0.5, autoAlpha:0})
    addShow(11)
    deleteShow(10)
    gsap.to(".twelve", {duration:0.5, autoAlpha:1})
}

//layer twelve animation
function doorAnimation(){
    gsap.set(".twelve", {autoAlpha:0})
    gsap.set(".hello", {autoAlpha:0})
    gsap.set(".next-door", {autoAlpha:0})
    const doorTl = gsap.timeline();
    addShow(12)
    deleteShow(11)
    doorTl.to("#ppl", {
        duration: 3, 
        scale:1.2,
        // repeatDelay: 3,
        yoyo: false,
        ease: "power1.inOut",
        motionPath:{
          path: "#moving",
          align: "#moving",
          alignOrigin: [0.5, 0.5]
        }
    });
    doorTl.to(".hello", {duration:1, autoAlpha:1})
    doorTl.to(".next-door", {duration:1, autoAlpha:1})
}

document.querySelector("#door").onclick = () => doorAnimation();

//layer thirteen transition
document.querySelector(".next-door").onclick = () => doorTransition();

function doorTransition() {
    gsap.set(".fourteen", {autoAlpha:0})
    gsap.to(".thirteen", {duration:0.5, autoAlpha:0})
    addShow(13)
    deleteShow(12)
    gsap.to(".fourteen", {duration:0.5, autoAlpha:1})
}

// layer fourteen animation
gsap.set("#jh-1", {scale:0})
gsap.set("#jh-2", {scale:0})
gsap.set("#jh-3", {scale:0})
const lastTl = gsap.timeline();
lastTl.to("#jh-1", {duration:0.6, scale:1});
lastTl.to("#jh-2", {duration:0.6, scale:1}, "-=0.3");
lastTl.to("#jh-3", {duration:0.6, scale:1}, "-=0.3");
lastTl.to("#jh-1", {duration:1, rotation:-10, repeat:-1, yoyo: true});
lastTl.to("#jh-2", {duration:1, rotation:10, repeat:-1, yoyo: true}, "-=1");
lastTl.to("#jh-3", {duration:1, rotation:-10, repeat:-1, yoyo: true}, "-=2");

