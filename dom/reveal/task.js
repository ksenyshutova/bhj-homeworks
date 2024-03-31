let reveal = document.querySelectorAll('.reveal');

function isVisible() {
    reveal.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const bottom = el.getBoundingClientRect().bottom;
        if ((top < window.innerHeight && top > 0) || (bottom > 0 && bottom < window.innerHeight)) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    });
};

window.addEventListener('scroll', isVisible);