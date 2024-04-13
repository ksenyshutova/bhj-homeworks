let form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", event => {
        event.preventDefault();
        let progress = document.getElementById('progress');
        progress.value = event.loaded / event.total;
    });
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    let formData = new FormData(form);
    xhr.send(formData);
});