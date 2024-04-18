const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
};

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(el => el.startsWith(name + '='));
    if (cookie !== undefined) {
        return cookie.substring(name.length + 1);
    };
};

const result = getCookie('modalCloseValue');

if (result === undefined) {
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', event => {
    event.preventDefault();
    modal.classList.remove('modal_active');
    document.cookie = 'modalCloseValue=closed';
});