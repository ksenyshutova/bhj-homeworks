let input = document.querySelector('.tasks__input');
let form = document.querySelector('.tasks__control');
let list = document.querySelector('.tasks__list');

form.addEventListener('submit', event => {
    event.preventDefault();
    let title = document.createElement('div');
    title = input.value;
    if (title.trim() === '') {
        return;
    }
    list.insertAdjacentHTML('afterbegin',
        `<div class="task">
            <div class="task__title">
                ${title}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
    form.reset();
});

list.addEventListener('click', event => {
    event.preventDefault();
    if ((event.target).classList.contains('task__remove')) {
        (event.target).closest('.task').remove();
    }
});