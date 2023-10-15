
//async await
// fetch('https://fakestoreapi.com/products/1')
//     .then((res)=> res.json())
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err));


async function fetchProductData(){
    try{
        const res = await fetch('https://fakestoreapi.com/products/1');
        const data = await res.json();
        console.log(data);
    }catch(err){
        console.error('Error :',err);
    }
}

fetchProductData();