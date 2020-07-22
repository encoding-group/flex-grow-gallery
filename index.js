const createBoxes = () => {
  let boxes = [];
  for (let i = 0; i <= 100; i++) {
    let box = document.createElement("img");
    box.className = "box";
    box.setAttribute("src", "./images/logo.jpg");
    setBoxSize(box, 200, 200);
    boxes.push(box);
    app.appendChild(box);
  }

  return boxes;
};

const setBoxSize = (image, x, y) =>
  (image.style = `
    width: ${x}px;
    height: ${y}px;
    margin: ${0.04 * x}px;
    border-width: ${0.04 * x}px;
  `);

const resizeBoxes = function (boxes, size) {
  sliderValue.innerText = `${size / 100}x`;
  let i = boxes.length;
  while (i--) {
    setBoxSize(boxes[i], size, size);
  }
};

const onChangeLayout = (event) => {
  app.className = `app ${event.target.value}`;
};

const app = document.querySelector(".app");
const sliderInput = document.querySelector(".slider-input");
const sliderValue = document.querySelector(".slider-value");
const layoutSelect = document.querySelector(".select-layout");
const boxes = createBoxes();

sliderInput.addEventListener("input", (event) =>
  resizeBoxes(boxes, event.target.value)
);

window.addEventListener("load", () => resizeBoxes(boxes, 500));

layoutSelect.addEventListener("change", onChangeLayout);
