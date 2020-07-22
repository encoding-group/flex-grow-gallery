const app = document.querySelector(".app");
const boxes = [];

const setBoxSize = (image, x, y) =>
  (image.style = `
    width: ${x}px;
    height: ${y}px;
    margin: ${0.04 * x}px;
    border-width: ${0.04 * x}px;
  `);

for (let i = 0; i <= 100; i++) {
  let box = document.createElement("img");
  box.className = "box";
  box.setAttribute("src", "./images/logo.jpg");
  setBoxSize(box, 200, 200);
  boxes.push(box);
  app.appendChild(box);
}

const slider = document.querySelector(".slider-input");
const sliderValue = document.querySelector(".slider-value");

const resizeBoxes = function (size) {
  sliderValue.innerText = `${size / 100}x`;
  let i = boxes.length;
  while (i--) {
    setBoxSize(boxes[i], size, size);
  }
};

slider.oninput = (event) => resizeBoxes(event.target.value);

window.onload = () => resizeBoxes(500);

const selection = document.querySelector("#layout");

const onChangeLayout = (event) => {
  console.log(event.target.value);
  app.className = `app ${event.target.value}`;
};

selection.addEventListener("change", onChangeLayout);
