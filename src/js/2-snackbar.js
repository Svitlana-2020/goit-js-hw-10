const submitBtn = document.querySelector('button[type="submit"]');
const inputForm = document.querySelector('input[type="number"]');
let inputValue;
const fulfilledBtn = document.querySelector('input[value="fulfilled"]')
const rejectedBtn = document.querySelector('input[value="rejected"]')
let yesBtn = false;


// inputForm.addEventListener('input', (e) => {
//     inputValue = e.target.value
//     console.log(inputValue)
// });

// fulfilledBtn.addEventListener('change', (e) => {
//     if (e.target.checked) {
//         yesBtn = true;
//     }
//     console.log(yesBtn)
// })

// rejectedBtn.addEventListener('change', (e) => {
//     if (e.target.checked) {
//         yesBtn = false;
//     }
//     console.log(yesBtn)
// })


// submitBtn.addEventListener('click', () => {
//     inputValue = inputForm.value.trim();
//     createPromise(inputValue)})

inputForm.addEventListener('change', (e) => {
        inputValue = e.target.value.trim();
        console.log(inputValue);
        // createPromise(Number(inputValue));

        submitBtn.addEventListener('click', () => {
            createPromise(inputValue)})
    });

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
    .then (result => console.log('Fulfilled promise in ${value}ms'))
    .catch (error => console.log('Rejected promise in ${value}ms'))
}

// fulfilledBtn.addEventListener('change', (e) => {
//     if (e.target.checked) {
//         yesBtn = true;
//     }
//     else {
// yesBtn = false;
//     }
// })