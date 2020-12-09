const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const color = {
  timerId: null,
  isActive: false,

  startChangeBodyColor() {
    let min = colors.indexOf(colors[0]);
    let max = colors.length - 1;
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timerId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(min, max)];
    }, 1000);
  },
  stopChangeBodyColor() {
    clearInterval(this.timerId);
    this.timerId = null;
    this.isActive = false;
  },
};

refs.start.addEventListener("click", color.startChangeBodyColor.bind(color));
refs.stop.addEventListener("click", color.stopChangeBodyColor.bind(color));

//==========================================2 варіант =========================

// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
// const bodyRef = document.querySelector("body");
// let timerId = null;
// let isActive = false;

// startBtn.addEventListener("click", () => {
//   if (isActive) {
//     return;
//   }
//   isActive = true;
//   timerId = setInterval(() => {
//     bodyRef.style.background =
//       colors[randomIntegerFromInterval(0, colors.length - 1)];
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   isActive = false;
// });
