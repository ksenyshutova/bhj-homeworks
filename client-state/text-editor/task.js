const textarea = document.getElementById('editor');
textarea.value = localStorage.getItem(textarea.name, textarea.value);
textarea.oninput = function () {
    localStorage.setItem(textarea.name, textarea.value);
}
