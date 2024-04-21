const signin = document.querySelector('.signin');
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const form = document.getElementById('signin__form');
const login = document.getElementsByName('login');

if (localStorage.getItem('id')) {
    document.getElementById('user_id').textContent = localStorage.getItem('id');
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        let userId = xhr.response.user_id;
        if (xhr.response.success === true) {
            document.getElementById('user_id').textContent = userId;
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            localStorage.setItem('id', userId);
        } else {
            alert('Неверный логин/пароль');
        };
        form.reset();
    });
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
});