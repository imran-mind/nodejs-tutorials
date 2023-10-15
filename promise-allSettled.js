
const fetchData = (id) => {
    return fetch('https://fakestoreapi.com/products/' + id)
        .then((response) => response.json())
}
const fetchData1 = (id)=>{
    return Promise.reject(new Error('Server error'));
}
Promise.allSettled([fetchData(1), fetchData1(10)])
    .then((results) => {
        //{status: 'fulfilled', value:{}}
        //{status: 'rejected', reason:{}}
        console.log(results);
    }).catch((err) => {
        console.log(err);
    })