let mainList = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let changeableList = document.querySelector('.dropdown__item');
let links = Array.from(document.querySelectorAll('.dropdown__item'));

function onClick() {
    list.classList.toggle('dropdown__list_active');
}
mainList.addEventListener('click', onClick);

links.forEach(elem => {
    elem.addEventListener('click', event => {
        mainList.textContent = elem.textContent;
        list.classList.toggle('dropdown__list_active');
        event.preventDefault();
    })
});
