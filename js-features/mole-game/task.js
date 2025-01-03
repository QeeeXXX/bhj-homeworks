document.addEventListener('DOMContentLoaded', () => {
    const holes = document.querySelectorAll('.hole');
    const winsSpan = document.getElementById('wins');
    const lossesSpan = document.getElementById('losses');

    let wins = 0;
    let losses = 0;

    // Добавляем обработчики событий для каждой лунки
    holes.forEach(hole => {
        hole.addEventListener('click', e => {
            console.log(e.target.classList.contains('hole_has-mole')); // Логируем состояние класса
            if (e.target.classList.contains('hole_has-mole')) {
                // Успешная попытка убить крота
                wins++;
                winsSpan.textContent = wins;

                if (wins >= 15) {
                    alert('Поздравляю! Ты победил!');
                    resetGame();
                }
            } else {
                // Поражение
                losses++;
                lossesSpan.textContent = losses;

                if (losses >= 5) {
                    alert('К сожалению, ты проиграл...');
                    resetGame();
                }
            }

            // Убираем крота после клика
            e.target.classList.remove('hole_has-mole');
        });
    });

    // Функция для сброса игры
    function resetGame() {
        wins = 0;
        losses = 0;
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
    }

    // Функция для установки крота в случайный сектор
    function setMole() {
        // Генерация случайного числа от 1 до 9 для выбора сектора
        const sectorIndex = Math.floor(Math.random() * 9) + 1;

        // Вероятность появления крота в секторе
        const probability = sectorIndex <= 3 ? 0.75 : sectorIndex > 6 ? 0.25 : 0.35;

        // Устанавливаем крота в выбранный сектор, если сработала вероятность
        if (Math.random() < probability) {
            holes[sectorIndex - 1].classList.add('hole_has-mole');
        }
    }

    // Запускаем установку крота каждые 500 мс
    setInterval(setMole, 500);
});
