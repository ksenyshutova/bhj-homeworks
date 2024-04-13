let xhr = new XMLHttpRequest();
let pollTitle = document.querySelector('.poll__title');
let pollAnswers = document.querySelector('.poll__answers');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.responseText);
        pollTitle.insertAdjacentHTML('afterbegin', response.data.title);
        for (let i = 0; i < response.data.answers.length; i++) {
            pollAnswers.insertAdjacentHTML('afterbegin',
                `<button class="poll__answer">
            ${response.data.answers[i]}
            </button>`);
        }
        let btn = Array.from(document.querySelectorAll('.poll__answer'));
        btn.forEach(el => {
            el.addEventListener('click', event => {
                event.preventDefault();
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
