console.log('Hello!');

// getting elements in the DOM and declaring them as variables
const numberOfItem = document.querySelector('.number-of-item p');
const minusEl = document.querySelector('.minus');
const addEl = document.querySelector('.add');
const mainImageEl = document.querySelector('.main-image img');
const itemsBoughtEl = document.querySelector('.item-descriptions h3');
const cartItems = document.querySelector('.cart-items');
const cartEl = document.querySelector('.cart');
const nextEl = document.querySelector('.next');
const previousEl = document.querySelector('.previous');
const modalEl = document.querySelector('.modal');
const getModalImage = document.querySelector('.modal-image img');
const subModalImages = document.querySelectorAll('.modal-sub-image img');
const closeSvg = document.querySelector('.close-modal svg');
const menuBarEl = document.querySelector('.menu');
const mobileMenuEl = document.querySelector('.mobile-menu');
const closeMenuEl = document.querySelector('.close-menu');
const deleteItemsEl = document.querySelector('.delete-items');
const addToCartEl = document.querySelector('.add-btn');

// declaring and assigning global variables 'counter' and 'mover'
let counter = 0, mover = 1;

// a function to change abd update the 'counter' variable
function upGradeCounter(opr) {
    if(opr === 'minus') {
        counter -= 1;
        if(counter <= 0) {
            counter = 0;
        }
    } else if(opr === 'add') {
        counter += 1;
    }
    return counter;
}

minusEl.addEventListener('click', function() {
    let deduction = upGradeCounter('minus');
    deduction <= 0 ? numberOfItem.innerHTML = 0 : numberOfItem.innerHTML = deduction;
})

addEl.addEventListener('click', function() {
    let increment = upGradeCounter('add');
    increment <= 0 ? numberOfItem.innerHTML = 0 : numberOfItem.innerHTML = increment;
})

// add items to cart
addToCartEl.addEventListener('click', function() {
    let multiplier = numberOfItem.textContent;
    if(Number(multiplier) <= 0) {
        cartItems.innerHTML = '<h2 class="empty-cart">Your cart is empty</h2>';
    } else {
        itemsBoughtEl.innerHTML = `<span>$125.00 x ${multiplier}</span> $${125.00 * Number(multiplier)}`;
    }
    cartItems.style.display = 'block';
})

cartEl.addEventListener('click', function() {
    cartItems.classList.toggle('show-cart');
})

// a function to fetch the next image
function nextImage() {
    mover += 1;
    if(mover > 4) {
        mover = 1;
    }
    return mover;
}

// a function to fetch the previous image
function previousImage() {
    mover -= 1;
    if(mover <= 0) {
        mover = 4;
        return mover;
    }
    return mover;
}

// displaying the previous image when the 'previous' icon is clicked
previousEl.addEventListener('click', function() {
    let decrement = previousImage();
    getModalImage.setAttribute('src', `images/image-product-${decrement}.jpg`);
})

// displaying the next image when the 'next' icon is clicked
nextEl.addEventListener('click', function() {
    let increment = nextImage();
    getModalImage.setAttribute('src', `images/image-product-${increment}.jpg`);
})

// rendering a sub-modal image in the position of the main image when a sub-modal image is clicked upon
subModalImages.forEach(item => {
    item.addEventListener('click', function(e) {
        let getSrc = e.target.getAttribute('src').substr(7, 15);
        console.log(getSrc);
        getModalImage.setAttribute('src', `images/${getSrc}.jpg`);
        mover = Number(getSrc[getSrc.length - 1]);
    })
})

// show modal page
mainImageEl.addEventListener('click', function() {
    modalEl.style.display = 'block';
})

// close modal page
closeSvg.addEventListener('click', function() {
    modalEl.style.display = 'none';
})

// show mobile menu
menuBarEl.addEventListener('click', function() {
    mobileMenuEl.style.display = 'block';
})

// close mobile menu
closeMenuEl.addEventListener('click', function() {
    mobileMenuEl.style.display = 'none';
})

// clear cart items
deleteItemsEl.addEventListener('click', function() {
    cartItems.innerHTML = '<h2 class="empty-cart">Your cart is empty</h2>';
})

