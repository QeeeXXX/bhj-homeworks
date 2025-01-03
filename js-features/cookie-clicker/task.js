document.addEventListener("DOMContentLoaded", function() {
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    let clicks = 0;

    cookie.addEventListener('click', function() {
        clicks++;
        counter.textContent = clicks;
    });
});
