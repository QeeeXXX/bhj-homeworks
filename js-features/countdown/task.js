// Получаем элемент, куда будем выводить таймер
const timerElement = document.getElementById('timer');

// Исходное количество секунд для таймера
let secondsLeft = 10; // Вы можете изменить это значение на любое другое

// Функция для обновления отображаемого значения таймера
function updateTimer() {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const secs = secondsLeft % 60;
    
    // Форматируем часы, минуты и секунды, добавляя ведущий ноль, если нужно
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secs).padStart(2, '0');

    // Обновляем содержимое элемента таймера
    timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    if (secondsLeft > 0) {
        secondsLeft--;
        setTimeout(updateTimer, 1000); // Вызываем обновление каждые 1000 мс (1 секунда)
    } else {
        alert('Вы победили в конкурсе!');
    }
}

// Запускаем таймер
updateTimer();
