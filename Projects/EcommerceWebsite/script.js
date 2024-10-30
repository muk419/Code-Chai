const parenContainer=document.querySelector('#main_container')
const sortmethod=document.querySelector("#sortmethod1")
const itemsPerPage = 5;
let currentPage = 1;

function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  
  console.log(paginate([1, 2, 3, 4, 5, 6], itemsPerPage, currentPage));
  console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 1));
async function products(getvalue){
    console.log(getvalue,"this is get value")
    try{
        parenContainer.innerHTML ='';
        const urlData=getvalue?`https://fakestoreapi.com/products/category/${getvalue}`:"https://fakestoreapi.com/products"
        console.log(urlData,"this is geting from URL path")
        const API_Product=await fetch(urlData)
        const  storeProduct=await API_Product.json()
        console.log( storeProduct)

const totalPage=Math.ceil(storeProduct.length/itemsPerPage)

paginate(storeProduct,)
        storeProduct.map((ele)=>{
            
            let warberofCard=document.createElement("div") 
               warberofCard.classList="card_container"
    
            warberofCard.innerHTML+=`<div class="card">
        <img src=${ele.image} alt="White Gold Plated Princess" class="product-image">
        <div class="card-content">
            <h3 class="product-title">${ele.title}</h3>
            <p class="product-category">${ele.category}</p>
            <p class="product-description">
               ${ele.description}
            </p>
            <p class="product-price">${ele.price}</p>
            <div class="product-rating">
                <span>Rating: ${ele?.rating?.rate}</span>
                <span>${ele?.rating?.count} reviews</span>  
            </div>
            <button onclick="navigateToProduct(${ele.id})" class="buy-now">Buy Now</button>
        </div>
    </div>`

    parenContainer.append(warberofCard)
        })

    }catch(error){
      console.log(error)
    }
}
function navigateToProduct(productId){
    window.location.href = `product.html?id=${productId}`
}
products();

async function  categoryValue(){
    try{
        const API_categories= await fetch("https://fakestoreapi.com/products/categories")
        const storeCategories=await API_categories.json()
       console.log(storeCategories)
        storeCategories.map((ele)=>{
            let createoption=document.createElement("option")
            createoption.value=ele
            createoption.textContent=ele
           optionvalue.append(createoption)
         
        })
      
    }catch(erorr){
        console.log(erorr)  
    }
}
categoryValue()

const optionvalue=document.querySelector('#categoryDropdown')
optionvalue.addEventListener("change",(event)=>{

 const categorypass= event.target.value
 products(categorypass)
 console.log(categorypass)
})















