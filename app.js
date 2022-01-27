//movement animation

const card = document.querySelector(".card");
const container = document.querySelector(".container");

//items
const title = document.querySelector(".title");
const nft = document.querySelector(".nft img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const size = document.querySelector(".size");

//moving animation

// (e) = event listener

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 5;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//pop card back to rest state

//animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  //item popout
  title.style.transform = "translateZ(150px)";
  nft.style.transform = "translateZ(200px) rotateZ(-25deg)";
  title.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(125px)";
  purchase.style.transform = "translateZ(150px)";
});

//animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  nft.style.transform = "translateZ(0px) rotateZ(0deg)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
