// cambio de cantidad de articulos 

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');
const  productContainer = document.querySelector('.cart-modal__chekout-container');


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
let lastValue;

addToCartBtn.addEventListener('click',()=>{
    lastValue = parseInt(cartNotification.innerText)+userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display='block';
    drawProductInModal();
    //priceModal.innerHTML =`$125 x ${lastValue} <span>$${lastValue*125}.00 </span>`;
    
});

// mostrar detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');

cartIconBtn.addEventListener('click',()=>{
    //cartModal.style.display='block';
    cartModal.classList.toggle('show');
    if(lastValue==o){
        drawProductInModal();
    }
   
    
});

// eliminar contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', () =>{
    productContainer.innerHTML=`<p class="cart-empty">Your cart is empty</p>`
    lastValue=0;
    cartNotification.innerText=lastValue;
});
}


//Funciones
function drawProductInModal(){
    productContainer.innerHTML=`
        <div class="cart-modal__chekout-container">
        <div class="cart-modal__details-container">
          <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
          <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price">$125 x ${lastValue} <span>$${lastValue*125}.00 </span></p>
          </div>
          <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__chekount">Checkout</button>
      </div>
        `
        deleteProduct();
}


