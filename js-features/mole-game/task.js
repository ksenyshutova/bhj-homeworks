getHole = index => document.getElementById(`hole${index}`);
let hit = 0; // Количество попаданий
let miss = 0; // Количество промахов
for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            document.getElementById('dead').textContent = ++hit;
        } else {
            document.getElementById('lost').textContent = ++miss;
        }
        if (hit === 10) {
            alert('Победа!');
            hit = 0;
            miss = 0;
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
            return;
        }
        if (miss === 5) {
            alert('Вы проиграли');
            hit = 0;
            miss = 0;
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
            return;
        }
    }
}
