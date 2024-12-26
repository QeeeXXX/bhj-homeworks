document.addEventListener("DOMContentLoaded", function () {
    const cookie = document.querySelector('.cookie');
    const counter = document.getElementById('clicks');
    const speedCounter = document.getElementById('click-speed');
    let clicks = 0;
    let lastClickTime = null;
    let averageClicksPerSecond = 0;

    cookie.addEventListener('click', function () {
        clicks++;
        counter.textContent = clicks;

        // Чередование уменьшения и увеличения размера печенья
        if (this.style.width === '150px') {
            this.style.width = '250px';
            this.style.height = '250px';
        } else {
            this.style.width = '150px';
            this.style.height = '150px';
        }

        // Расчёт средней скорости кликов
        const currentTime = new Date().getTime();
        if (lastClickTime !== null) {
            const elapsedTime = (currentTime - lastClickTime) / 1000;
            averageClicksPerSecond = 1 / elapsedTime;
            speedCounter.textContent = averageClicksPerSecond.toFixed(2);
        }
        lastClickTime = currentTime;

        // Показ блока со скоростью кликов
        document.querySelector('.speed').style.display = 'block';
    });
});
