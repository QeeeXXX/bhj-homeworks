// Получаем все элементы с классом .dropdown
const dropdowns = document.querySelectorAll('.dropdown');

// Функция для обработки клика на кнопку
function toggleDropdown(event) {
    // Прекращаем выполнение действия по умолчанию (переход по ссылке)
    event.preventDefault();
    
    // Получаем родительский элемент (.dropdown)
    const dropdown = this.closest('.dropdown');
    
    // Получаем список пунктов
    const list = dropdown.querySelector('.dropdown__list');
    
    // Проверяем наличие класса active и добавляем/удаляем его
    if (!list.classList.contains('dropdown__list_active')) {
        list.classList.add('dropdown__list_active');
    } else {
        list.classList.remove('dropdown__list_active');
    }
}

// Функция для обработки выбора пункта списка
function selectItem(event) {
    // Прекращаем выполнение действия по умолчанию (переход по ссылке)
    event.preventDefault();
    
    // Получаем родительский элемент (.dropdown)
    const dropdown = this.closest('.dropdown');
    
    // Получаем выбранный пункт
    const selectedValue = this.textContent;
    
    // Устанавливаем новое значение в элемент с классом dropdown__value
    dropdown.querySelector('.dropdown__value').textContent = selectedValue;
    
    // Закрываем список
    dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
}

// Цикл по всем выпадающим спискам
dropdowns.forEach(dropdown => {
    // Находим кнопку и добавляем обработчик клика
    const button = dropdown.querySelector('.dropdown__value');
    button.addEventListener('click', toggleDropdown);
    
    // Находим пункты списка и добавляем обработчики клика
    const items = dropdown.querySelectorAll('.dropdown__item a');
    items.forEach(item => item.addEventListener('click', selectItem));
});
