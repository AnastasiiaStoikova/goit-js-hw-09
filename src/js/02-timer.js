import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      alert("Please choose a date in the future");
      document.getElementById("datetime-picker").value = "";
      document.querySelector("button[data-start]").disabled = true;
    } else {
      document.querySelector("button[data-start]").disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

let countdownInterval;

document.querySelector("button[data-start]").addEventListener("click", startCountdown);

function startCountdown() {
  const selectedDate = new Date(document.getElementById("datetime-picker").value).getTime();
  const currentDate = new Date().getTime();
  const timeDifference = selectedDate - currentDate;

  if (timeDifference <= 0) {
    alert("Please choose a date in the future");
    document.getElementById("datetime-picker").value = "";
    document.querySelector("button[data-start]").disabled = true;
    return;
  }

  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const selectedDate = new Date(document.getElementById("datetime-picker").value).getTime();
  const currentDate = new Date().getTime();
  const timeDifference = selectedDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
  } else {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    updateTimerUI(days, hours, minutes, seconds);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateTimerUI(days, hours, minutes, seconds) {
  document.querySelector("[data-days]").textContent = addLeadingZero(days);
  document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
  document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
  document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
}
