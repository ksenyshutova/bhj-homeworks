let fonts = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');

fonts.forEach((el) => {
    el.addEventListener('click', function (event) {
        for (let i = 0; i < fonts.length; i++) {
            fonts[i].classList.remove('font-size_active');
        }
        event.preventDefault();
        event.target.classList.add('font-size_active');
        if (fonts[0] === event.target) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (fonts[2] === event.target) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    });
});