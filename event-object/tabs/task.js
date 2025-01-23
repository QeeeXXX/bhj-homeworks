document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab__content');

    // Функция для активации нужной вкладки
    function activateTab(index) {
        // Убираем активные классы со всех вкладок и их содержимого
        tabs.forEach(tab => tab.classList.remove('tab_active'));
        contents.forEach(content => content.classList.remove('tab__content_active'));
        
        // Добавляем активный класс к текущей вкладке и её содержимому
        tabs[index].classList.add('tab_active');
        contents[index].classList.add('tab__content_active');
    }

    // Регистрация обработчиков событий на каждую вкладку
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            activateTab(index);
        });
    });
});
