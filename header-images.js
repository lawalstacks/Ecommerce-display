import products from './data/products';

let randomImage = [];
let intervalId;
products.forEach((product)=>{
  randomImage.push(product.image);
})

sliderImage();
export function sliderImage(){
  clearInterval(intervalId);
  let image = generateHeaderImage();
  console.log(image);
    intervalId = setInterval(function () {
   document.querySelector('.slider').src = `${randomImage[random]}`;
  },5000)
}

export function generateHeaderImage(){
  for(let i = 0; i <= randomImage.length; i++){
    const random = Math.floor(Math.random() * randomImage.length)
  }
  return randomImage[random];
}

