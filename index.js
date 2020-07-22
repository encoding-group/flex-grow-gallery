const app = document.getElementById("app");
const boxes = [];

const setBoxSize = (image, x, y) =>
  (image.style = `width: ${x}px; height: ${y}px;`);

for (let i = 0; i <= 100; i++) {
  let box = document.createElement("img");
  box.className = "box";
  box.setAttribute("src", "./images/logo.jpg");
  setBoxSize(box, 200, 200);
  boxes.push(box);
  app.appendChild(box);
}

const slider = document.querySelector(".slider");

slider.oninput = function (event) {
  let i = boxes.length;
  while (i--) {
    setBoxSize(boxes[i], event.target.value, event.target.value);
  }
};
