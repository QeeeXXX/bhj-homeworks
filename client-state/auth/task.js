document.addEventListener('DOMContentLoaded', function () {
    // Проверяем наличие user_id в localStorage при загрузке страницы
    const userId = localStorage.getItem('user_id');
    if (userId) {
        showWelcome(userId);
    } else {
        showSignIn();
    }
});

// Функция для отправки формы авторизации
const signInForm = document.getElementById('signin__form');
if (signInForm) {
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Отменяем стандартную отправку формы

        const formData = new FormData(signInForm); // Создаем объект FormData
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('user_id', data.user_id); // Сохраняем user_id в localStorage
                showWelcome(data.user_id);
            } else {
                alert('Неверный логин/пароль'); // Выводим сообщение об ошибке
            }
        })
        .catch(error => console.error('Ошибка:', error));
    });
}

// Функция для очистки и скрытия формы авторизации
function clearAndHideSignIn() {
    const loginInput = document.querySelector('#signin input[name="login"]');
    const passwordInput = document.querySelector('#signin input[name="password"]');
    loginInput.value = '';
    passwordInput.value = '';
    document.getElementById('signin').classList.remove('signin_active');
    document.getElementById('signin').classList.add('signin_hidden');
}

// Функция для отображения формы авторизации
function showSignIn() {
    document.getElementById('signin').classList.remove('signin_hidden');
    document.getElementById('signin').classList.add('signin_active');
}

// Функция для отображения приветственного блока
function showWelcome(userId) {
    document.getElementById('user_id').innerText = userId;
    document.getElementById('welcome').classList.remove('welcome_hidden');
    document.getElementById('welcome').classList.add('welcome_active');
    clearAndHideSignIn(); // Скрываем форму авторизации после успешной авторизации
}

// Функция для выхода из системы
function logout() {
    localStorage.removeItem('user_id'); // Удаляем user_id из localStorage
    showSignIn(); // Показываем форму авторизации снова
}
