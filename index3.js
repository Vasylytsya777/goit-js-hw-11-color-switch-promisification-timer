// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2021"),
// });
//===========================

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerId = document.querySelector(this.selector);
    this.days = this.timerId.querySelector('span[data-value="days"]');
    this.hours = this.timerId.querySelector('span[data-value="hours"]');
    this.minutes = this.timerId.querySelector('span[data-value="mins"]');
    this.seconds = this.timerId.querySelector('span[data-value="secs"]');
    this.happyNewYear();
  }

  happyNewYear() {
    setInterval(() => {
      let now = new Date().getTime();
      let time = this.targetDate - now;

      let days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      let hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      let minutes = this.pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      );
      let seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      this.days.textContent = days;
      this.hours.textContent = hours;
      this.minutes.textContent = minutes;
      this.seconds.textContent = seconds;
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const countDown = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("dec 31, 2020"),
});

const countDown2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("dec 19, 2020"),
});
