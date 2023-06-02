const tittle = document.querySelector("h2");
const txt = document.querySelector("p");
const btn = document.querySelector(".btn-contact");

const TL1 = new TimelineMax({ paused: true });

TL1
.from(tittle, 1, { x: -100, opacity: 0 });
TL1
.from(txt, 1, {opacity: 0 }, '-=0.4');
TL1
.from(btn, 1, {opacity: 0 }, '-=0.5');


TL1.play();
