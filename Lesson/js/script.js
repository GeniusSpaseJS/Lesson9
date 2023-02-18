// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const btn3 = document.querySelector("#btn3");
// const btn4 = document.querySelector("#btn4");
// const btn5 = document.querySelector("#btn5");
// const btn6 = document.querySelector("#btn6");

// btn1.addEventListener("click", () => console.log("click"));
// btn2.addEventListener("contextmenu", () => console.log("contextmenu"));
// btn3.addEventListener("mouseout", () => console.log("mouseover"));
// btn4.addEventListener("mousedown", () => console.log("mousedown"));
// btn5.addEventListener("mousemove", () => console.log("mousemove"));
// btn6.addEventListener("keydown", () => keydownTest("keydown"));

// const addBtn = document.querySelector("#add");
// const removeBtn = document.querySelector("#remove");
// const clickBtn = document.querySelector("#click");

// const handleClick = () => {
//   console.log("Hello");
// };

// addBtn.addEventListener("click", () => {
//   clickBtn.addEventListener("click", handleClick);
// });

// removeBtn.addEventListener("click", () => {
//   clickBtn.removeEventListener("click", handleClick);
// });

// const clickBtn = document.querySelector("#click");

// const infoClick = (event) => {
//   console.log("event", event.target);
// };

// clickBtn.addEventListener("click", infoClick);

// const form = document.querySelector(".form");
// const loginInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const login = loginInput.value;
//   const password = passInput.value;

//   console.log(`Логін: ${login}, пароль: ${password}`);
//   form.reset();
// }

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const item = document.querySelector("#item");

// parent.addEventListener("click", () => console.log("Click Parent!"));
// child.addEventListener("click", () => console.log("Click child!"));
// item.addEventListener("click", () => console.log("Click item!"));

// const handleClick = (event) => {
//   console.log("event: ", event.target);
// };

// parent.addEventListener("click", handleClick);

// const itemClick = (event) => {
//   console.log("itemClick stop");
//   event.stopPropagation();
// };

// const childClick = (event) => {
//   console.log("child stop");
//   event.stopPropagation();
// };

// const parentClick = (event) => {
//   console.log("parent stop");
//   event.stopPropagation();
// };

// parent.addEventListener("click", parentClick);
// child.addEventListener("click", childClick);
// item.addEventListener("click", itemClick);

// const nav = document.querySelector(".nav");

// nav.addEventListener("click", handleClick);

// function handleClick(event) {
//   const checkClass = nav.querySelector("li.active");

//   if (checkClass) {
//     event.target.classList.remove("active");
//   } else {
//     event.target.classList.add("active");
//   }
// }

// const ball = document.querySelector(".ball");

// ball.onmousedown = function (event) {
//   function move(pageX, pageY) {
//     ball.style.left = pageX - ball.offsetWidth / 2 + "px";
//     ball.style.top = pageY - ball.offsetWidth / 2 + "px";
//   }

//   move(event.pageX, event.pageY);

//   function onMouseMove(event) {
//     move(event.pageX, event.pageY);
//   }

//   document.addEventListener("mousemove", onMouseMove);

//   ball.onmouseup = function () {
//     document.removeEventListener("mousemove", onMouseMove);
//   };
// };
