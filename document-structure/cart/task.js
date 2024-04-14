let products = document.querySelector('.cart__products');
let minus = document.querySelectorAll('.product__quantity-control_dec');
let plus = document.querySelectorAll('.product__quantity-control_inc');
let quantity = Array.from(document.querySelectorAll('.product__quantity-value'));
let basket = document.querySelectorAll('.product__add');
let pictures = Array.from(document.querySelectorAll('.product__image'));
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
        let cards = Array.from(document.querySelectorAll('.cart__product'));
        let total = Array.from(document.querySelectorAll('.cart__product-count'));
        const productInCard = cards.find((item) =>
            item.dataset.id === items[index].dataset.id);
        if (productInCard) {
            total[index].textContent = Number(total[index].textContent) + Number(quantity[index].textContent);
        } else {
            products.insertAdjacentHTML('beforeEnd',
                `<div class="cart__product" data-id=${items[index].getAttribute('data-id')}>
        <img class="cart__product-image" src=${pictures[index].getAttribute('src')}>
        <div class="cart__product-count">${quantity[index].textContent}</div>
    </div>`)
        }
    });
});