const getHole = index => document.getElementById(`hole${index}`);
let hit = 0; // Количество попаданий
let miss = 0; // Количество промахов
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function reset() {
    hit = 0;
    miss = 0;
    dead.textContent = 0;
    lost.textContent = 0; 
}

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = ++hit;
        } else {
            lost.textContent = ++miss;
        }
        if (hit === 10) {
            alert('Победа!');
            reset();
            return;
        }
        if (miss === 5) {
            alert('Вы проиграли');
            reset();
            return;
        }
    }
}
