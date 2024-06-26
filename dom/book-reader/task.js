let fonts = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');

fonts.forEach((el) => {
    el.addEventListener('click', function (event) {
        for (let i = 0; i < fonts.length; i++) {
            fonts[i].classList.remove('font-size_active');
        }
        event.preventDefault();
        event.target.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');
        const size = event.target.dataset.size;
        if (size) {
            book.classList.add(`book_fs-${size}`);
        }
    });
});
