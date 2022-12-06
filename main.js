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
let lastValue=0;

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
    if(lastValue==0){
        productContainer.innerHTML=`<p class="cart-empty">Your cart is empty</p>`;
    } else{
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

// Cambiar imagenes al presionar los botos flecha
const imageContainer= document.querySelector('.gallery__image-container');
const previusGalleryBtn= document.querySelector('.gallery__previus');
const nextGalleryBtn= document.querySelector('.gallery__next');
let imgIndex=1;



nextGalleryBtn.addEventListener('click',()=>{
    changeNextImage(imageContainer);
});
previusGalleryBtn.addEventListener('click',()=>{
    changePreviusImage(imageContainer);
});

// mostrar y cerrar modal de imagenes, al momento de dar click en la imagen principal *
const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click',()=>{
    if(window.innerWidth >= 1115){
        imagesModal.style.display = 'grid';
    }
    

});

closeModalBtn.addEventListener('click',()=>{
    imagesModal.style.display='none';
});

//cambiar las imagenes principales desde los thumbnails
let thumbnails = document.querySelectorAll('.gallery__thumnails');
thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener('click',event=>{
       imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`; 
    });
});

//cambiar las imagenes principales desde los thumbnails en el MODAL
let modalThumbnails = document.querySelectorAll('.modal-gallery__thumnails');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
modalThumbnails=[...modalThumbnails];


modalThumbnails.forEach(modalThumbnail=>{
    modalThumbnail.addEventListener('click',event=>{
        //quitar la m del id
        //console.log(event.target.id.slice(-1));
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`;

    });
});

// cambiar imagen principal desde las flechas del modal 
const btnPreviusModal = document.querySelector('.modal-gallery__previus');
const btnNextModal = document.querySelector('.modal-gallery__next');

btnNextModal.addEventListener('click',()=>{
    changeNextImage(modalImageContainer);
});

btnPreviusModal.addEventListener('click',()=>{
    changePreviusImage(modalImageContainer);
});

//mostrar navbar del menu hamburguesa
const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});



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




function changeNextImage(imageContainer){
    if(imgIndex==4){
        imgIndex=1;
    } else{
        imgIndex++;
    }
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;  
}

function changePreviusImage(imageContainer){
    if(imgIndex==1){
        imgIndex=4;
    } else{
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;  
}




