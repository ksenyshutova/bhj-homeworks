const textarea = document.getElementById('editor');
const history = localStorage.getItem('text');
let text = textarea.value;
if (history) {
    textarea.textContent = history;
} else {
    textarea.onchange = function () {
        text = this.value;
        textarea.insertAdjacentHTML("afterbegin", text);
        localStorage.setItem('text', text);
    }
}