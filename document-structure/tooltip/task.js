let tips = Array.from(document.querySelectorAll('.has-tooltip'));
let activeElement = document.createElement('div');
activeElement.classList.add('tooltip');

tips.forEach((el) => {
    el.addEventListener('click', event => {
        event.preventDefault();
        if (activeElement.innerHTML === el.title) {
            activeElement.classList.toggle('tooltip_active');
        } else {
            const top = el.getBoundingClientRect().top;
            const left = el.getBoundingClientRect().left;
            activeElement.remove();
            activeElement.innerHTML = el.title;
            activeElement.classList.add('tooltip_active');
            el.insertAdjacentElement('afterend', activeElement);
            activeElement.style.left = left + 5 + 'px';
            activeElement.style.top = top + 20 + 'px';
        }
    });
});
