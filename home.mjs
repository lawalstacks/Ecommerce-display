import products from "./data/products.mjs";



let productHTML = '';

generateHTML();

function  generateHTML(){
products.forEach((product) => {

  productHTML += `<div class="product-details" data-id=${product.id}>
                                <p class="product-title">${product.title}</p>
                                <img class="img" src="${product.image}" alt="${product.title}"/>
                                <span class="added added-js-${product.id}">Added to Cart ✅</span>       
                            <div><span class = "select-btn"><select class = "select-btn">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                </select></span><button class="cart-btn" data-product-id="${product.id}">Add to Cart</button>
                            </div>
                            </div>
                            `;
})


  let productContainer;
  productContainer = document.querySelector('.container');

productContainer.innerHTML = productHTML;

console.log(productContainer.innerHTML);
}

document.querySelectorAll(`.cart-btn`).forEach((button)=>{
    let intervalId;
    button.addEventListener('click', ()=>{
        const {productId} = button.dataset;
        clearInterval(intervalId);
        document.querySelector(`.added-js-${productId}`).style.opacity = 1;
        console.log(productId);
        intervalId = setTimeout(function(){
            document.querySelector(`.added-js-${productId}`).style.opacity = 0;
        },2000)
    })
})

