const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 1 resolved'), 50);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 resolved'), 500);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise 3 rejected')), 0);
});

Promise.any([promise1, promise2, promise3])
    .then((value) => {
        console.log('First promise resolved :', value);
    })
    .catch((error) => {
        console.error('First promise rejected :', error.message);
    });
