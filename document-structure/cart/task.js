let products = document.querySelector('.cart__products');
let minus = document.querySelectorAll('.product__quantity-control_dec');
let plus = document.querySelectorAll('.product__quantity-control_inc');
let quantity = Array.from(document.querySelectorAll('.product__quantity-value'));
let basket = document.querySelectorAll('.product__add');
let pictures = document.querySelectorAll('.product__image');
let items = Array.from(document.querySelectorAll('.product'));

plus.forEach((el, index) => {
    el.addEventListener('click', event => {
        event.preventDefault();
        quantity[index].textContent++;
    });
});

minus.forEach((el, index) => {
    el.addEventListener('click', event => {
        event.preventDefault();
        if (quantity[index].textContent > 2) {
            quantity[index].textContent--;
        } else {
            quantity[index].textContent = 1;
        }
    });
});

basket.forEach((el, index) => {
    el.addEventListener('click', event => {
        event.preventDefault();
        let basketId = document.createElement('div');
        if (el.dataset.id === basketId.dataset.id) {
            basketId.classList.add('cart__product');
            basketId.dataset.id = items[index].dataset.id;
            products.appendChild(basketId);
            let image = document.createElement('img');
            image.classList.add('cart__product-image');
            image.src = pictures[index].src
            basketId.appendChild(image);
            let quantityProduct = document.createElement('div');
            quantityProduct.classList.add('cart__product-count');
            quantityProduct.textContent = quantity[index].textContent;
            basketId.appendChild(quantityProduct);
        };
    });
});


