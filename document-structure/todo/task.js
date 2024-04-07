let input = document.querySelector('.tasks__input');
let form = document.querySelector('.tasks__control');
let list = document.querySelector('.tasks__list');
let task = document.querySelector('.task');


form.addEventListener('submit', event => {
    event.preventDefault();
    let task = document.createElement('div');
    list.appendChild(task);
    task.classList.add('task');
    let title = document.createElement('div');
    title.classList.add('task__title');
    title.textContent = input.value;
    task.appendChild(title);
    let link = document.createElement('a');
    link.classList.add('task__remove');
    task.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>');
    form.reset();
});

list.addEventListener('click', event => {
    event.preventDefault();
    if ((event.target).classList.contains('task__remove')) {
        let parent = (event.target).closest(task); //поиск ближайшего родителя
    }
});