const loader = document.querySelector('.loader');
let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        let object = JSON.parse(xhr.responseText);
        const item = document.getElementById('items');

        (Object.keys(object.response.Valute)).forEach(el => {
            item.innerHTML +=
                `<div class="item">
                <div class="item__code">
    ${(object.response.Valute[el].CharCode)}
</div>
<div class="item__value">
${(object.response.Valute[el].Value)}
</div>
<div class="item__currency">
    руб.
</div>
</div>`
        });
    };
});


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();