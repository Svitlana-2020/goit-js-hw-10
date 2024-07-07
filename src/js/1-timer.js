// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates);
        dateCheck(selectedDates[0]);
        
        // const timer = setTimeout(convertMs(userSelectedMilli), 1000);
  }
}
  const flatP = flatpickr('#datetime-picker', options);
  const inputForm = document.getElementById('datetime-picker');
  const defaultDateMilli = options.defaultDate.getTime();
  const startButton = document.querySelector('button[type="button"]')
  let timer;
  let userSelectedDate = [];
  const Selecteddate = new Date(userSelectedDate);
  let userSelectedMilli = Selecteddate.getTime();
//   const timer = setTimeout(convertMs(userSelectedMilli), 1000)

  console.log(options.defaultDate, defaultDateMilli);

//   const date = new Date(inputForm.value);
//   const valueMilli = date.getTime();
//   console.log(date, valueMilli);

function dateCheck(selectedDates) {
    const selectedDateMilli = selectedDates.getTime();
    if (selectedDateMilli < defaultDateMilli) {

        iziToast.show({
            title: 'Warning',
            titleColor: 'white',
            message: 'Please choose a date in the future',
            messageColor: 'white',
            messageLineHeight: '150%',
            backgroundColor: '#ef4040',
            iconUrl: '../img/icon.svg',
            position: 'topRight',
        });

        startButton.disabled = true;
    }
    else {
        startButton.disabled = false;
        userSelectedDate = selectedDates;
        userSelectedMilli = selectedDateMilli - defaultDateMilli;
        console.log(userSelectedDate)
    }
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  function settingTime () {
    startButton.disabled = true;
    inputForm.disabled = true;

    userSelectedMilli -= 1000;

    let remainTime = convertMs(userSelectedMilli);
    remainTime = addLeadingZero(remainTime);

                document.querySelector('[data-days]').setAttribute('data-days', remainTime.days);
                document.querySelector('[data-hours]').setAttribute('data-hours', remainTime.hours);
                document.querySelector('[data-minutes]').setAttribute('data-minutes', remainTime.minutes);
                document.querySelector('[data-seconds]').setAttribute('data-seconds', remainTime.seconds);

                document.querySelector('[data-days]').textContent = remainTime.days;
                document.querySelector('[data-hours]').textContent = remainTime.hours;
                document.querySelector('[data-minutes]').textContent = remainTime.minutes;
                document.querySelector('[data-seconds]').textContent = remainTime.seconds;

                if (userSelectedMilli = 0) {
                    clearInterval(timer);
                    startButton.disabled = true;
  }}
  
  startButton.addEventListener('click', () => {
    settingTime();
    timer = setInterval(settingTime, 1000);
});

function addLeadingZero(remainTime) {
    remainTime.days = remainTime.days.toString().padStart(2, '0');
    remainTime.hours = remainTime.hours.toString().padStart(2, '0');
    remainTime.minutes = remainTime.minutes.toString().padStart(2, '0');
    remainTime.seconds = remainTime.seconds.toString().padStart(2, '0');
    return remainTime;
}

