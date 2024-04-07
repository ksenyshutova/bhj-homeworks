let tips = Array.from(document.querySelectorAll('.has-tooltip'));
let activeElement = document.createElement('div');
activeElement.classList.add('tooltip');


tips.forEach((el) => {
    el.addEventListener('click', event => {
        event.preventDefault();
        activeElement.textContent = el.title;
        const top = el.getBoundingClientRect().top;
        const bottom = el.getBoundingClientRect().bottom;
        if ((top < window.innerHeight && top > 0) || (bottom > 0 && bottom < window.innerHeight)) {
            activeElement.classList.add('tooltip_active');
        } else {
            activeElement.classList.remove('tooltip_active');
        }
        el.appendChild(activeElement);
    });
});