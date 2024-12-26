// Получение элемента, в который будет выводиться таймер
const timerElement = document.getElementById('timer');

// Начальные данные: общее количество секунд
let totalSeconds = 30; // Изменяйте это значение под свои нужды

// Функция для форматирования времени в формате hh:mm:ss
function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');
}

// Функция для запуска таймера
function startCountdown() {
    // Отображаем текущий таймер
    timerElement.innerText = formatTime(totalSeconds);

    // Уменьшаем количество секунд каждую секунду
    const interval = setInterval(() => {
        totalSeconds--;
        
        // Проверяем, закончился ли таймер
        if (totalSeconds <= 0) {
            clearInterval(interval); // Останавливаем интервал
            alert('Вы победили в конкурсе!'); // Показываем уведомление

            // Загрузка файла
            const link = document.createElement('a');
            link.href = 'path/to/your/file'; // Путь к файлу, который хотите скачать
            link.download = ''; // Имя загружаемого файла (если нужно)
            link.click(); // Инициируем скачивание
        } else {
            timerElement.innerText = formatTime(totalSeconds); // Обновляем таймер
        }
    }, 1000); // Интервал 1 секунда
}

// Запуск таймера
startCountdown();
