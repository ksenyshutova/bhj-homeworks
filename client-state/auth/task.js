const signin = document.querySelector('.signin');
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const form = document.getElementById('signin__form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            const storedName = localStorage.getItem('name');
            if (storedName) {
                welcome.classList.add('welcome_active');
            } else {
                alert('Неверный логин/пароль');
            }
        };
    });
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
});