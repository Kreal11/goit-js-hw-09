import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
const field = document.querySelector('.field');


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
            } else {
                button.removeAttribute('disabled');
                const storageDate = localStorage.setItem('Selected date', JSON.stringify(selectedDates[0]))
        }
    },
};

flatpickr(input, options);

function startCountDown() {
    const acquiredStorageDate = JSON.parse(localStorage.getItem('Selected Date'));
    const pickerCurrentDate = new Date();
    const remainDifference = acquiredStorageDate - pickerCurrentDate;

    if (remainDifference > 0) {
        const pickerTimer = setInterval(function () {
            const remainingTime = convertMs(remainDifference);
            field.textContent = `${remainingTime.days}:${remainingTime.hours}:${remainingTime.minutes}:${remainingTime.seconds}`

            if (remainDifference <= 0) {
                clearInterval(pickerTimer)
            }
            remainDifference -= 1000;
        }, 1000 )
    }
}

button.addEventListener('click', startCountDown);

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




    
    