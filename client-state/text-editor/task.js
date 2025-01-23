document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearButton = document.getElementById('clearButton');

    // Восстанавливаем текст из localStorage при загрузке страницы
    if (localStorage.getItem('editorText')) {
        editor.value = localStorage.getItem('editorText');
    }

    // Сохраняем текст в localStorage каждый раз при изменении
    editor.addEventListener('input', () => {
        localStorage.setItem('editorText', editor.value);
    });

    // Очищаем текстовое поле и localStorage при нажатии кнопки
    clearButton.addEventListener('click', () => {
        editor.value = '';
        localStorage.removeItem('editorText');
    });
});
