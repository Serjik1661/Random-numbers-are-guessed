function randomGuessTheNumber(secretNumber) {
    let min = 0;
    let max = 100;
    let guess;
    let attempts = 0; // Счетчик попыток

    const NUMDESCRIPTION = document.querySelector('.numDescription');
    const container = document.querySelector('.numRandomConteiner');
    NUMDESCRIPTION.textContent = 'Я попробую угадать ваше число от 0 до 100...'




    while (true) {
        let newParag = document.createElement('p');
        newParag.classList.add('numContent');


        // Генерируем случайное число в диапазоне от min до max
        guess = Math.floor(Math.random() * (max - min + 1)) + min;
        attempts++; // Увеличиваем счетчик попыток
        newParag.textContent = `${attempts} попытка. Я думаю, что ваше число: ${guess}`;

        if (guess === secretNumber) {
            newParag.textContent = `За ${attempts} попыток. Ура! Я угадал ваше число ${guess}`;
            break; // Выход из цикла, если число угадано
        } else {
            newParag.textContent = `За ${attempts} попыток. Это не ${guess}.`;
            // Подсказки для изменения диапазона (если вы хотите дать программе возможность улучшить свои догадки)
            if (guess < secretNumber) {
                min = guess + 1; // Увеличиваем нижнюю границу
            } else {
                max = guess - 1; // Уменьшаем верхнюю границу
            }
        }

        // Проверка на случай, если диапазон закончился
        if (min > max) {
            newParag.textContent = `За ${attempts} попыток. Кажется, я не могу угадать ваше число. Попробуйте снова.`;
            break;
        }
        container.appendChild(newParag);
    }
}




// Пример использования
// Загадать число от 0 до 100
const secretNumber = Math.floor(Math.random() * 101); //
// Загадать случайное число
// const secretNumber = +prompt('Введите секретное число: ', '');
randomGuessTheNumber(secretNumber);
