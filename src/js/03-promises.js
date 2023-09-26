const submitBtn = document.querySelector('button[type = "submit"]');

submitBtn.addEventListener('submit', onSubmit);

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

function onSubmit(event) {
  event.preventDefault();
  createPromise();
}