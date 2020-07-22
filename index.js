const createBox = () => {
  const box = document.createElement("img");
  box.className = "box";
  box.setAttribute("src", "./images/logo.jpg");
  return box;
};

const createBoxes = (size) => {
  const boxes = [];
  for (let i = 0; i <= 100; i++) {
    const box = createBox();
    setBoxSize(box, size, size);
    boxes.push(box);
    app.appendChild(box);
  }

  return boxes;
};

const setBoxSize = (box, width, height) =>
  (box.style = `
    width: ${width}px;
    height: ${height}px;
    margin: ${width * 0.04}px;
    border-width: ${width * 0.04}px;
  `);

const updateBoxes = (boxes, size) => {
  let i = boxes.length;
  while (i--) {
    setBoxSize(boxes[i], size, size);
  }
};

const updateSliderLabel = (sliderLabel, value) => {
  sliderLabel.innerText = `${value / 100}x`;
};

const changeLayout = (app, value) => {
  app.className = `app ${value}`;
};

const app = document.querySelector(".app");
const initialZoom = app.getAttribute("data-initial-zoom") * 100;
const sliderInput = document.querySelector(".slider-input");
const sliderLabel = document.querySelector(".slider-value");
const layoutSelect = document.querySelector(".select-layout");
const boxes = createBoxes(initialZoom);

layoutSelect.addEventListener("change", (event) =>
  changeLayout(app, event.target.value)
);

sliderInput.addEventListener("input", (event) => {
  updateSliderLabel(sliderLabel, event.target.value);
  updateBoxes(boxes, event.target.value);
});

window.addEventListener("load", function () {
  sliderInput.value = initialZoom;
  updateSliderLabel(sliderLabel, initialZoom);
  updateBoxes(boxes, initialZoom);
});
