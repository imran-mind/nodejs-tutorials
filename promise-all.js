
const fetchData = (id) => {
    return fetch('https://fakestoreapi.com/products/' + id)
        .then((response) => response.json())
        .catch(err=>err);
}

const fetchData1 = (id)=>{
    return Promise.reject(new Error('Server error'));
}

Promise.all([fetchData(1), fetchData1(2)])
    .then((results) => {
        console.log(results);
    }).catch((err) => {
        console.log(err);
    })





    