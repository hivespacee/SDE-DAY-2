// script.js
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

// EASY
console.log("EASY ---->")

const inStockProducts=products.filter((element,index)=>{
    return element.inStock===true;
})
console.log(inStockProducts);

console.log("/////////////////////////////////////////////////////////////////////////////")

const bookProducts=products.filter((element,index)=>{
    return element.category==="Books";
})
console.log(bookProducts);

console.log("MEDIUM-->")
// MEDIUM

const productNames=products.map((element,index)=>{
    return element.name;
})
console.log(productNames);

console.log("/////////////////////////////////////////////////////////////////////////////")

const nameWithPrice=products.map((element,index)=>{
    return `${element.name} : ${element.price}`;
})
console.log(nameWithPrice);


// HARD
console.log("HARD--->")

const sumOfProducts=products.reduce((accumulator,current)=>{
    return accumulator + current.price;
},0)
console.log(sumOfProducts);

console.log("/////////////////////////////////////////////////////////////////////////////")

const electronics= products.filter((names)=>{
    return names["category"]==="Electronics" && names["inStock"]===true;
})

const checkInStocks=electronics.map((obj)=>{
    return obj["name"];
})
console.log(checkInStocks)
