const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 500);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise 3 rejected')), 2000);
});

Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log('First promise resolved :', value);
    })
    .catch((error) => {
        console.error('First promise rejected :', error.message);
    });



//Can implement timeout function with race func
// const data = Promise.race([
//     fetch("/api"),
//     new Promise((resolve, reject) => {
//         // Reject after 5 seconds
//         setTimeout(() => reject(new Error("Request timed out")), 5000);
//     }),
// ])
// .then((res) => res.json())
// .catch((err) => displayError(err));