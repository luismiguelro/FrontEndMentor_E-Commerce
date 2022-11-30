// cambio de cantidad de articulos 

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

// valor default
let userInputNumber=0;

plusBtn.addEventListener('click',()=>{
   userInputNumber++;
   userInput.value = userInputNumber; 
});

minusBtn.addEventListener('click',()=>{
    userInputNumber--;
    //validate
    if(userInputNumber <=0){
        userInputNumber=0;
    }
    userInput.value = userInputNumber;
;})

//agregar total productos al carrito al presionar add to cart
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');

addToCartBtn.addEventListener('click',()=>{
    let lastValue = parseInt(cartNotification.innerText)+userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display='block';
  
})

// mostrar detaller del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');

cartIconBtn.addEventListener('click',()=>{
    //cartModal.style.display='block';
    cartModal.classList.toggle('show');
});

