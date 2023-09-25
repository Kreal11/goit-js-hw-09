import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');

const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
    onClose(selectedDates) {
        // const selectedDate = selectedDates[0];
        const currentDate = new Date();
            if (selectedDates[0] <= currentDate) {
                alert("Please choose a date in the future");
                button.setAttribute('disabled', 'disabled');
            } else {
                button.removeAttribute('disabled');
            }
    },
};

flatpickr(input, options);

// button.addEventListener('click', onStart);



    
    