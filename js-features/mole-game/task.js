getHole = index => document.getElementById(`hole${index}`);
let hit = 0; // Количество попаданий
let miss = 0; // Количество промахов
for (let i = 1; i < 10; i++) {
    let hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            document.getElementById('dead').textContent = hit++;
        }
        document.getElementById('lost').textContent = miss++;
        if (hit === 10) {
            alert('Победа!');
            hit = 0;
            miss = 0;
            return;
        }
        if (miss === 5) {
            alert('Вы проиграли');
            hit = 0;
            miss = 0;
            return;
        }
    }
}
