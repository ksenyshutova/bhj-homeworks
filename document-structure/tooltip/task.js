let tips = Array.from(document.querySelectorAll('.has-tooltip'));
let activeElement = document.createElement('div');
activeElement.classList.add('tooltip');


tips.forEach((el) => {
    el.addEventListener('click', event => {
        if (activeElement.classList.contains('tooltip_active')) {
            activeElement.classList.remove('tooltip_active');
        } else {
            event.preventDefault();
            activeElement.textContent = el.title;
            const top = el.getBoundingClientRect().top;
            const left = el.getBoundingClientRect().left;
            activeElement.classList.add('tooltip_active');
            el.insertAdjacentElement('afterend', activeElement);
            activeElement.style.left = left + 5 + 'px';
            activeElement.style.top = top + 20 + 'px';
        }
    });
});