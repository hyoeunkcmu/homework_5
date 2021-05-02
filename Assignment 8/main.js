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
const layerTimeline = gsap.timeline({onStart: addShow});
layerTimeline.to(".one", {opacity: 0, duration: 0.5})
layerTimeline.from(".two", {opacity: 0, duration: 0.5})
layerTimeline.pause();
// show next layer
var layerArray = document.querySelectorAll(".layer");
function addShow(){
    layerArray[2].classList.add('show');
}

// layer two animation
gsap.set("#Polygon-1", {x: -100, y: 20});




// document.querySelector(".btn").onclick = () => layerArray[2].classList.add('show');

// container.classList.add( 'capable' );
//   document.querySelector("#pause").onclick = () => tween.pause();
//   document.querySelector("#resume").onclick = () => tween.resume();
//   document.querySelector("#reverse").onclick = () => tween.reverse();
//   document.querySelector("#restart").onclick = () => tween.restart();