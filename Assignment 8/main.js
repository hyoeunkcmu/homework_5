//gsap animation
// layer one animation

// gsap.set(".cloud-right", {x: -100, y: 20});
// var tl = gsap.timeline({repeat: -1});
// tl.to(".cloud-right", {duration: 5.5, x: -300, ease: "none"});
// tl.to(".cloud-right", {duration: 5.5, x: -100, ease: "none"});

// gsap.set(".cloud-left", {x: 100, y: -20});
// var tl2 = gsap.timeline({repeat: -1});
// tl2.to(".cloud-left", {duration: 4, x: 200});
// tl2.to(".cloud-left", {duration: 4, x: 100});

// document.querySelector(".btn").onclick = () => layerTimeline.play();

// layer transition animation

// const layerTimeline = gsap.timeline({onStart: addShow});
// layerTimeline.to(".one", {opacity: 0, duration: 0.5})
// layerTimeline.from(".two", {opacity: 0, duration: 0.5})
// layerTimeline.pause();

// show next layer

// var layerArray = document.querySelectorAll(".layer");
// function addShow(){
//     layerArray[2].classList.add('show');
// }

// layer two animation

// gsap.to("#flight-ticket", {duration:4, y: -200});

// gsap.to("#Polygon-1", {
//     rotationY: 180, repeat: -1, transformOrigin: '50% 100%'
// });

// layer four animation
gsap.set("#bag", {y:0})
var bagTl = gsap.timeline({repeat: -1, repeatDelay: 2});
bagTl.to("#bag", {y: -50, duration: 0.5, ease:Power2.easeOut});
bagTl.to("#bag", {y: 0, duration: 0.5, ease:Bounce.easeOut});

// layer six animation
gsap.set("#road", {x:1200})
const roadTl = gsap.timeline({repeat:-1});
roadTl.to("#road", {duration: 2, x: -1400, ease: "none"})

// layer seven animation
const boardTl = gsap.timeline({repeat:-1, repeatDelay: 0.5});
boardTl.from("#seattle", {duration:0.2, autoAlpha:0, ease: "none"});


// tl.set(bounce_obj, {y: 0})
// .to(bounce_obj, duration / 4, {y:+20, ease:Power2.easeOut}, "bounceme")
// .to(bounce_obj, duration / 2, { y:0, ease:Bounce.easeOut, delay:duration / 4 }, "bounceme");

// document.querySelector(".btn").onclick = () => layerArray[2].classList.add('show');

// container.classList.add( 'capable' );
//   document.querySelector("#pause").onclick = () => tween.pause();
//   document.querySelector("#resume").onclick = () => tween.resume();
//   document.querySelector("#reverse").onclick = () => tween.reverse();
//   document.querySelector("#restart").onclick = () => tween.restart();