// accordion 1
const accord = document.getElementById("accord1");
const question1 = document.getElementById("q1");
const expand = document.getElementById("expand");
const reply = document.querySelector(".res");
const contract = document.getElementById("contract");

// accordion 2
const accord2 = document.getElementById("accord2");
const question2 = document.getElementById("q2");
const plus = document.getElementById("expand2");
const reply2 = document.querySelector(".res2");
const cancel = document.getElementById("contract2");

// event1
expand.addEventListener("click", () => {
  contract.style.display = "block";
  expand.style.display = "none";
  reply.style.display = "block";
  reply.style.padding = "10px";
  reply.style.color = "#1e1e1e";
  reply.style.marginTop = "10px";
});
contract.addEventListener("click", () => {
  expand.style.display = "block";
  contract.style.display = "none";
  reply.style.display = "none";
});
// event2

plus.addEventListener("click", () => {
  cancel.style.display = "block";
  plus.style.display = "none";
  reply2.style.display = "block";
  reply.style.display = "none";
  expand.style.display = "block";
  contract.style.display = "none";
});
cancel.addEventListener("click", () => {
  cancel.style.display = "none";
  plus.style.display = "block";
  reply2.style.display = "none";
});
