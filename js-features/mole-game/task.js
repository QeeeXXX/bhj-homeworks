document.addEventListener("DOMContentLoaded", function () {
    const holes = document.querySelectorAll('.hole');
    const winsDisplay = document.getElementById('wins');
    const lossesDisplay = document.getElementById('losses');
    let wins = 0;
    let losses = 0;

    // Функция для получения случайной лунки
    function randomHole() {
        const idx = Math.floor(Math.random() * holes.length);
        return holes[idx];
    }

    // Функция для добавления крота в случайную лунку
    function peep() {
        const targetHole = randomHole();
        targetHole.classList.add('hole_has-mole');
        setTimeout(() => {
            targetHole.classList.remove('hole_has-mole');
            if (wins === 10 || losses === 5) {
                resetGame();
            } else {
                peep();
            }
        }, 800 + Math.random() * 700); // Крот прячется через 0.8–1.5 секунды
    }

    // Обработчики событий для лунок
    holes.forEach(hole => {
        hole.addEventListener('click', function () {
            if (hole.classList.contains('hole_has-mole')) {
                wins++;
                winsDisplay.textContent = wins;
                if (wins === 10) {
                    alert('Поздравляю! Ты победил.');
                    resetGame();
                }
            } else {
                losses++;
                lossesDisplay.textContent = losses;
                if (losses === 5) {
                    alert('К сожалению, ты проиграл.');
                    resetGame();
                }
            }
        });
    });

    // Функция для сброса статистики и перезапуска игры
    function resetGame() {
        wins = 0;
        losses = 0;
        winsDisplay.textContent = wins;
        lossesDisplay.textContent = losses;
        peep(); // Перезапускаем игру
    }

    // Старт игры
    peep();
});
