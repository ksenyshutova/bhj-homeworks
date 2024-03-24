let element = document.getElementById('cookie');
element.onclick = function () {
    let countElement = document.getElementById('clicker__counter');
    let counter = Number((document.getElementById('clicker__counter').textContent));
    countElement.textContent = `${++counter}`;
    if (element.width === 200) {
        element.width = 300;
    } else {
        element.width = 200;
    }
}
