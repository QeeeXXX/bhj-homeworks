// Функции для работы с cookies
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()[$$\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// Проверяем наличие куки при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    const subscribeModal = document.getElementById('subscribe-modal');
    const isClosed = getCookie('modal_closed');

    if (!isClosed) {
        subscribeModal.classList.add('modal_active');
    }
});

// Обработчик закрытия модального окна
document.querySelector('.modal__close_times').addEventListener('click', function() {
    const subscribeModal = document.getElementById('subscribe-modal');
    subscribeModal.classList.remove('modal_active');
    setCookie('modal_closed', 'true', { expires: new Date(Date.now() + 365 * 86400 * 1000) }); // Устанавливаем куки на год
});
