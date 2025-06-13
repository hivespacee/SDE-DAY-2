// script.js
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];


// // EASY 
console.log("EASY ---------->")
const listSelector=document.getElementById("product-list")
const productsName=products.map((obj)=>{
    return `<li>${obj.name}</li>`
})
listSelector.innerHTML=productsName.join("")


// MEDIUM
console.log("MEDIUM ---------->")
const availableStocks=products.filter((value)=>{
    return value.inStock;
})
const itemsList=availableStocks.map((object)=>{
    return `<li class="product-item">
                <h3>${object.name}</h3>
                <p>${object.price}</p>
            </li>`
})
listSelector.innerHTML=itemsList.join("")

// // HARD
console.log("HARD ---------->")

listSelector.innerHTML="";

products.forEach((product)=>{
    const newListingTag=document.createElement("li");

    const newThirdHeading=document.createElement("h3");
    newThirdHeading.textContent=product.name;
    newListingTag.append(newThirdHeading);

    const newParaTag=document.createElement("p");
    newParaTag.textContent=`Price : ${product.price}`
    newListingTag.append(newParaTag);

    if(!product.inStock){
        newListingTag.classList.add("out-of-stock");
    }

    if(product.category==="Electronics"){
        newListingTag.classList.add("category-electronics");
    }
    else if(product.category==="Books"){
        newListingTag.classList.add("category-books");
    }
    listSelector.append(newListingTag)
})


const totalProductCount=products.reduce((acc,curr)=>{
    if(curr.inStock){
        return acc+curr.price;
    }
    else{
        return acc;
    }
},0);

const newDiv=document.createElement("div");
newDiv.classList.add("totalValue");
newDiv.textContent=`Total Value of In-Stock Items: ${totalProductCount}`;
document.getElementById("app-container").append(newDiv)