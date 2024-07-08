// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const submitBtn = document.querySelector('button[type="submit"]');
const inputForm = document.querySelector('input[type="number"]');
const formForm = document.querySelector('.form')
let inputValue;
const fulfilledBtn = document.querySelector('input[value="fulfilled"]')
const rejectedBtn = document.querySelector('input[value="rejected"]')
let yesBtn;


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let inputValue = inputForm.value;
console.log(inputValue);
    createPromise(inputValue)})

    fulfilledBtn.addEventListener('change', (e) => {
        if (e.target.checked) {
            yesBtn = true;
        }
        console.log(yesBtn)
    })
    
    rejectedBtn.addEventListener('change', (e) => {
        if (e.target.checked) {
            yesBtn = false;
        }
        console.log(yesBtn)
    })

function createPromise(value) {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (yesBtn) {
                resolve(`Fulfilled promise in ${value}ms`);
            }
            else {
                reject(`Rejected promise in ${value}ms`);
            }
          }, Number(value));
    })
    .then (result => 
        iziToast.show({
            message: `✅ Fulfilled promise in ${value}ms`,
            messageColor: 'black',
            messageLineHeight: '150%',
            position: 'topRight',
        }))

    .catch (error => 
        iziToast.show({
    message: `❌ Rejected promise in ${value}ms`,
    messageColor: 'black',
    messageLineHeight: '150%',
    position: 'topRight',
})
)
}

