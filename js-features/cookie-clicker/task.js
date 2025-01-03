// Получаем элементы DOM
const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let clicksCount = 0;
let lastClickTime = null;
let isShrinked = false;

// Создаем элемент для отображения скорости кликов
const speedDisplay = document.createElement('div');
speedDisplay.className = 'clicker__speed';
speedDisplay.innerText = 'Средняя скорость кликов: 0 клик/с';

// Добавляем созданный элемент в DOM
cookie.parentNode.insertBefore(speedDisplay, cookie.nextSibling);

// Функция для обновления счётчика кликов
function updateCounter() {
    clicksCount++;
    counter.textContent = clicksCount;
}

// Функция для изменения размера печенья
function toggleCookieSize() {
    if (isShrinked) {
        cookie.style.width = '200px'; // Возвращаемся к начальному размеру
    } else {
        cookie.style.width = '150px'; // Уменьшаем размер
    }
    isShrinked = !isShrinked; // Меняем состояние флага
}

// Функция для расчёта и отображения скорости кликов
function calculateAndShowClickSpeed() {
    const currentTime = new Date().getTime(); // Текущее время в миллисекундах
    if (lastClickTime !== null) {
        const timeDiff = (currentTime - lastClickTime) / 1000; // Время между кликами в секундах
        const clicksPerSecond = Math.round((1 / timeDiff) * 100) / 100; // Скорость кликов в секунду
        speedDisplay.innerText = `Средняя скорость кликов: ${clicksPerSecond} клик/с`; // Обновляем отображаемую скорость кликов
    }
    lastClickTime = currentTime; // Сохраняем текущее время как последнее
}

// Обработчик клика на печеньку
cookie.addEventListener('click', function() {
    updateCounter(); // Увеличиваем счётчик кликов
    toggleCookieSize(); // Изменяем размер печенья
    calculateAndShowClickSpeed(); // Рассчитываем и показываем скорость кликов
});
