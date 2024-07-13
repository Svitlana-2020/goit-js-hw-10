// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import imgUrl from '../img/octagon.svg';




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
  const startButton = document.querySelector('button[type="button"]')
  
    let timer;

          const dataDay = document.querySelector('[data-days]');
          const dataHour = document.querySelector('[data-hours]');
          const dataMinutes = document.querySelector('[data-minutes]');
          const dataSeconds = document.querySelector('[data-seconds]');


function dateCheck(selectedDates) {
const currentDate = Date.now();
if (currentDate < selectedDates) {

            inputForm.disabled = false;
            startButton.disabled = false;
}
else {
  iziToast.show({
                title: 'Warning',
                titleColor: 'white',
                message: 'Please choose a date in the future',
                messageColor: 'white',
                messageLineHeight: '150%',
                backgroundColor: '#ef4040',
                iconUrl: imgUrl,
                position: 'topRight'
            });
    
            startButton.disabled = true;
}
}

function settingTime () {
            
            inputForm.disabled = true;
            startButton.disabled = true;

  let userSelectedDateMilli = flatP.selectedDates[0].getTime();
        
      let dateNow = Date.now();
      const difference = userSelectedDateMilli - dateNow;

      const remainTime = addLeadingZero(convertMs(difference));

                dataDay.textContent = remainTime.days;
                dataHour.textContent = remainTime.hours;
                dataMinutes.textContent = remainTime.minutes;
                dataSeconds.textContent = remainTime.seconds;

                if (difference <= 1000) {
                  clearInterval(timer);
                  inputForm.disabled = false;
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


  
  startButton.addEventListener('click', () => {
    timer = setInterval(settingTime, 1000);
});

function addLeadingZero(remainTime) {
    remainTime.days = remainTime.days.toString().padStart(2, '0');
    remainTime.hours = remainTime.hours.toString().padStart(2, '0');
    remainTime.minutes = remainTime.minutes.toString().padStart(2, '0');
    remainTime.seconds = remainTime.seconds.toString().padStart(2, '0');
    return remainTime;
}

// timer = setInterval(() => {
//   let userSelectedDateMilli = userSelectedDate.getTime();
//   console.log(userSelectedDateMilli);
//   let dateNow = Date.now();
//   console.log(dateNow);

//  let remainTime = userSelectedDateMilli - dateNow;
//   console.log(remainTime)

// remainTime = convertMs(remainTime);
// remainTime = addLeadingZero(remainTime);
// settingTime(remainTime);

//   if (remainTime <= 0) {
//       clearInterval(timer);
//       startButton.disabled = false;
//       inputForm.disabled = false;
//   }
//    }, 1000);