let rotator = Array.from(document.querySelectorAll('.rotator__case'));

function repeat() {
    let index = rotator.findIndex(item =>
        item.classList.contains('rotator__case_active'));
    let currentCase = rotator[index];
    currentCase.classList.remove('rotator__case_active');
    index = Math.floor(Math.random() * rotator.length);
    currentCase = rotator[index];
    currentCase.classList.add('rotator__case_active');
}

setInterval(repeat, 1000);