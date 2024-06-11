export let cart = [

]


export function calculateCartQuantity(){
  let cartQuantity = 0;
  //document.querySelector('.notify').innerText= cartQuantity;
  cart.forEach((item)=>{
    cartQuantity += item.quantity;
  })
  if(cartQuantity === 0)
  {
      document.querySelector('.notify').innerText= 0;
      document.querySelector('.notify').classList.remove('animate');


  }else{
      document.querySelector('.notify').innerText= cartQuantity;
      document.querySelector('.notify').classList.add('animate');

  }
}
export function addToCart(productId){
    let matchingItem;
    cart.forEach((item)=>{
      if(item.id === productId){
        matchingItem = item;
      }
    })
    if(matchingItem){
      matchingItem.quantity += Number(document.querySelector(`.select-js-${productId}`).value);
    } else {
      cart.push({
        productId: productId,
        quantity:Number(document.querySelector(`.select-js-${productId}`).value),
        deliveryOption: '1'
        })
     
    }
    console.log(cart);
}



/*export function addToCart(productId) {
  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  })
  if (matchingItem) {
    matchingItem.quantity += Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
  }
  else {
    cart.push({
      productId: productId,
      quantity: Number(document.querySelector(`.js-quantity-selector-${productId}`).value),
      deliveryOptionId: '1'
    })
  }
  saveToStorage();
}*/