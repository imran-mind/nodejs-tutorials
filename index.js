/**
                / resolved  
(Pending)Promise 
                \ rejected
**/ 

function isEligible(age){
    return new Promise((resolve,reject)=>{
        if(age<18){
            return reject('Not Eligible for Vote');
        }
        resolve('Eligible for Vote');
    })
}

const p = isEligible(19)
    .then((result)=> console.log('Success : ',result))
    .catch((err)=> console.log('Error : ',err));

console.log(p);



































// //async function
// function isEligible(age){
//     return new Promise((resolve,reject)=>{
//         if(age < 18){
//            return reject('Not eligible for vote');
//         }
//         resolve('Eligible for vote');
//     })
// }

// const p = isEligible(10)
//     .then((data)=>console.log('Success: ',data))
//     .catch((err)=>console.error('Error: ',err));
// console.log(p);
















// fetchData();

// function myFunc(data){
//     return new Promise((resolve, reject)=>{
//         resolve('Success');
//     })
// }
// myFunc('data')
//     .then((res)=>console.log(res));

