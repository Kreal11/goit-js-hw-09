import Notiflix from 'notiflix';

const clickBtn = document.querySelector('button[type="submit"]');
const firstDelayInput = document.querySelector('[name="delay"]');
const delayStepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');


clickBtn.addEventListener('click', onClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve ({position, delay})
    } else {
      reject ({position, delay})
    }
  }, delay)
    })
}

function onClick(event) {
  event.preventDefault();
  const delay = Number(firstDelayInput.value);
  const step = Number(delayStepInput.value);
  const amount = Number(amountInput.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay + (i * step)).then((result) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
    }).catch((error) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
    });
    
  }
};

