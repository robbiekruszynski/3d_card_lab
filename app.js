//movement animation

const card = document.querySelector(".card");
const container = document.querySelector(".container");

//moving animation

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//pop card back to rest state

//animate in

//animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
