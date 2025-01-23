class Game {
  constructor() {
    this.currentIndex = 0; // Индекс текущего символа
    this.wins = 0; // Количество правильных ответов
    this.losses = 0; // Количество неправильных ответов
    this.registerEvents();
  }

  registerEvents() {
    document.addEventListener('keyup', event => {
      // Проверяем, является ли введенная клавиша печатаемым символом
      if (event.key.length === 1 && !event.altKey && !event.ctrlKey) {
        const currentSymbolElement = this.getCurrentSymbolElement(); // Получаем текущий символ
        const currentSymbolText = currentSymbolElement.textContent; // Получаем текст текущего символа

        const pressedKey = event.key.toUpperCase(); // Преобразуем символ к верхнему регистру
        const currentSymbolUpper = currentSymbolText.toUpperCase(); // Приводим символ на экране к верхнему регистру

        if (currentSymbolUpper === pressedKey) {
          this.success(currentSymbolElement);
        } else {
          this.fail(currentSymbolElement);
        }
      }
    });
  }

  getCurrentSymbolElement() {
    const symbols = document.querySelectorAll('.symbol');
    return symbols[this.currentIndex]; // Возвращаем текущий символ
  }

  success(currentSymbolElement) {
    console.log("Правильный символ!");
    currentSymbolElement.classList.add('symbol_correct');
    this.currentIndex++; // Переходим к следующему символу

    if (this.currentIndex >= document.querySelectorAll('.symbol').length) {
      this.wins++;
      document.querySelector('.status__wins').textContent = this.wins;
      alert(`Молодец! Ты справился со словом. Твои победы: ${this.wins}`);
      location.reload(); // Перезагружаем страницу для нового слова
    }
  }

  fail(currentSymbolElement) {
    console.log("Неправильный символ!");
    currentSymbolElement.classList.add('word_incorrect');
    this.losses++;
    document.querySelector('.status__loss').textContent = this.losses;

    if (this.losses >= 3) {
      alert(`К сожалению, ты проиграл. Твои поражения: ${this.losses}`);
      location.reload(); // Перезагружаем страницу для новой попытки
    }
  }
}

// Запускаем игру
new Game();
