import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');
let intervalId = null;
let initDate;
let finalDate;

button.disabled = true;

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
    return String(value).padStart(2, '0');
}

const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
    onClose(selectedDates) {
        const inputCurrentDate = new Date();
            if (selectedDates[0] <= inputCurrentDate) {
                alert("Please choose a date in the future");
                button.setAttribute('disabled', 'disabled');
                clearInterval(intervalId); 
            } else {
                button.disabled = false;
                intervalId = null;
                initDate = selectedDates[0];
                button.removeAttribute('disabled');
        }
    },
};

flatpickr(input, options);

function startCountDown(finalDate) {

    const currentDate = Date.now();
    const diff = finalDate - currentDate;

    if (diff > 0) {
        const remainingTime = convertMs(diff);
        daysField.textContent = addLeadingZero(remainingTime.days);
        hoursField.textContent = addLeadingZero(remainingTime.hours);
        minutesField.textContent = addLeadingZero(remainingTime.minutes);
        secondsField.textContent = addLeadingZero(remainingTime.seconds);
    } else {
        clearInterval(intervalId);
        daysField.textContent = '00';
        hoursField.textContent = '00';
        minutesField.textContent = '00';
        secondsField.textContent = '00';
    }
}

button.addEventListener('click', onStart);

function onStart() {
    if (initDate) {
        finalDate = initDate.getTime();
        if (intervalId === null || intervalId === undefined) {
        startCountDown(finalDate);
        intervalId = setInterval(() => startCountDown(finalDate), 1000)   
        } 
    }
}

// ==================== 2nd variant ======================= //

// function startTimer() {

//     finalDate = initDate.getTime();
//     intervalId = setInterval(() => {
//     const currentDate = new Date().getTime();
//     const remainingTime = finalDate - currentDate;

//     if (remainingTime <= 0) {
//       clearInterval(intervalId);
//       intervalId = null;
//       return;
//     }

//     const { days, hours, minutes, seconds } = convertMs(remainingTime);

//     daysField.textContent = addLeadingZero(days);
//     hoursField.textContent = addLeadingZero(hours);
//     minutesField.textContent = addLeadingZero(minutes);
//     secondsField.textContent = addLeadingZero(seconds);
//   }, 1000);
// }

// button.addEventListener('click', startTimer);

// ====================== 1st variant ========================= //








    
    