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

// ========================Надя=========================

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const bodyRef = document.querySelector("body");
// const startRef = document.querySelector('[data-action="start"]');
// const finishRef = document.querySelector('[data-action="stop"]');

// let timerId;
// const switchColor = () => {
//   timerId = setInterval(() => {
//     bodyRef.style.backgroundColor =
//       colors[randomIntegerFromInterval(0, colors.length - 1)];
//     startRef.disabled = true;
//     finishRef.disabled = false;
//   }, 1000);
// };

// startRef.addEventListener("click", switchColor);
// finishRef.addEventListener("click", () => {
//   clearInterval(timerId);
//   startRef.disabled = false;
//   finishRef.disabled = true;
// });

// // ====================Надя==== перепис в ооп=========================

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// class SwitchClass {
//   constructor(arrayColors, { bodyRef, startRef, finishRef }) {
//     this.arrayColors = arrayColors;
//     this.bodyRef = bodyRef;
//     this.startRef = startRef;
//     this.finishRef = finishRef;
//     this.timerId = null;
//   }
//   switchColor() {
//     this.timerId = setInterval(() => {
//       this.bodyRef.style.backgroundColor = this.arrayColors[
//         this.randomIntegerFromInterval(0, this.arrayColors.length - 1)
//       ];
//       this.startRef.disabled = true;
//       this.finishRef.disabled = false;
//     }, 1000);
//   }
//   init() {
//     console.log(this);
//     this.startRef.addEventListener("click", this.switchColor.bind(this));
//     this.finishRef.addEventListener("click", () => {
//       clearInterval(this.timerId);
//       this.startRef.disabled = false;
//       this.finishRef.disabled = true;
//     });
//   }
//   randomIntegerFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// }
// const refs = {
//   bodyRef: document.querySelector("body"),
//   startRef: document.querySelector('[data-action="start"]'),
//   finishRef: document.querySelector('[data-action="stop"]'),
// };

// const colorSwitcher = new SwitchClass(colors, refs);
// colorSwitcher.init();
