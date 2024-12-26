const htmlElements = [
    {
        question: `
            <section class="game__question">
                <img src="images/jupiter.jpg" alt="Юпитер" class="game__image">
                <p class="game__text">Первый вопрос: Какая планета является самой большой в Солнечной системе?</p>
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 0)">A) Марс</button>
                    <button class="game__option" onclick="checkAnswer('b', 0)">B) Земля</button>
                    <button class="game__option" onclick="checkAnswer('c', 0)">C) Юпитер</button>
                    <button class="game__option" onclick="checkAnswer('d', 0)">D) Венера</button>
                </div>
            </section>
        `,
        correctAnswer: 'c'
    },
    {
        question: `
            <section class="game__question">
                <p class="game__text">Второй вопрос: Сколько спутников у Марса?</p>
                <img src="images/mars_moons.jpg" alt="Спутники Марса" class="game__image">
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 1)">A) Один</button>
                    <button class="game__option" onclick="checkAnswer('b', 1)">B) Два</button>
                    <button class="game__option" onclick="checkAnswer('c', 1)">C) Три</button>
                    <button class="game__option" onclick="checkAnswer('d', 1)">D) Четыре</button>
                </div>
            </section>
        `,
        correctAnswer: 'b'
    },
    {
        question: `
            <section class="game__question">
                <p class="game__text">Третий вопрос: Как называется самая близкая к Солнцу планета?</p>
                <img src="images/mercury.jpg" alt="Меркурий" class="game__image">
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 2)">A) Венера</button>
                    <button class="game__option" onclick="checkAnswer('b', 2)">B) Земля</button>
                    <button class="game__option" onclick="checkAnswer('c', 2)">C) Меркурий</button>
                    <button class="game__option" onclick="checkAnswer('d', 2)">D) Марс</button>
                </div>
            </section>
        `,
        correctAnswer: 'c'
    },
    {
        question: `
            <section class="game__question">
                <p class="game__text">Четвертый вопрос: Какая планета известна своими кольцами?</p>
                <img src="images/saturn.jpg" alt="Сатурн" class="game__image">
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 3)">A) Уран</button>
                    <button class="game__option" onclick="checkAnswer('b', 3)">B) Нептун</button>
                    <button class="game__option" onclick="checkAnswer('c', 3)">C) Сатурн</button>
                    <button class="game__option" onclick="checkAnswer('d', 3)">D) Юпитер</button>
                </div>
            </section>
        `,
        correctAnswer: 'c'
    },
    {
        question: `
            <section class="game__question">
                <p class="game__text">Пятый вопрос: Как называется самая большая звезда в Солнечной системе?</p>
                <img src="images/sun.jpg" alt="Солнце" class="game__image">
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 4)">A) Солнце</button>
                    <button class="game__option" onclick="checkAnswer('b', 4)">B) Сириус</button>
                    <button class="game__option" onclick="checkAnswer('c', 4)">C) Альфа Центавра</button>
                    <button class="game__option" onclick="checkAnswer('d', 4)">D) Полярная звезда</button>
                </div>
            </section>
        `,
        correctAnswer: 'a'
    },
    {
        question: `
            <section class="game__question">
                <p class="game__text">Шестой вопрос: Какая планета имеет наибольшее количество спутников?</p>
                <img src="images/saturn_moons.jpg" alt="Спутники Сатурна" class="game__image">
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 5)">A) Сатурн</button>
                    <button class="game__option" onclick="checkAnswer('b', 5)">B) Юпитер</button>
                    <button class="game__option" onclick="checkAnswer('c', 5)">C) Уран</button>
                    <button class="game__option" onclick="checkAnswer('d', 5)">D) Нептун</button>
                </div>
            </section>
        `,
        correctAnswer: 'a'
    },
    {
        question: `
            <section class="game__question">
                <p class="game__text">Седьмой вопрос: Как называется планета, известная как "Красная планета"?</p>
                <img src="images/mars.jpg" alt="Марс" class="game__image">
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 6)">A) Земля</button>
                    <button class="game__option" onclick="checkAnswer('b', 6)">B) Юпитер</button>
                    <button class="game__option" onclick="checkAnswer('c', 6)">C) Марс</button>
                    <button class="game__option" onclick="checkAnswer('d', 6)">D) Венера</button>
                </div>
            </section>
        `,
        correctAnswer: 'c'
    },
    {
        question: `
            <section class="game__question">
                <p class="game__text">Восьмой вопрос: Какая планета имеет самую плотную атмосферу?</p>
                <img src="images/venus.jpg" alt="Венера" class="game__image">
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 7)">A) Марс</button>
                    <button class="game__option" onclick="checkAnswer('b', 7)">B) Венера</button>
                    <button class="game__option" onclick="checkAnswer('c', 7)">C) Земля</button>
                    <button class="game__option" onclick="checkAnswer('d', 7)">D) Нептун</button>
                </div>
            </section>
        `,
        correctAnswer: 'b'
    },
    {
        question: `
            <section class="game__question">
                <p class="game__text">Девятый вопрос: Какой объект является естественным спутником Земли?</p>
                <img src="images/moon.jpg" alt="Луна" class="game__image">
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 8)">A) Луна</button>
                    <button class="game__option" onclick="checkAnswer('b', 8)">B) Марс</button>
                    <button class="game__option" onclick="checkAnswer('c', 8)">C) Сатурн</button>
                    <button class="game__option" onclick="checkAnswer('d', 8)">D) Венера</button>
                </div>
            </section>
        `,
        correctAnswer: 'a'
    },
    {
        question: `
            <section class="game__question">
                <p class="game__text">Десятый вопрос: Какая планета вращается вокруг своей оси в направлении, противоположном остальным?</p>
                <img src="images/venus_rotation.jpg" alt="Венера" class="game__image">
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 9)">A) Венера</button>
                    <button class="game__option" onclick="checkAnswer('b', 9)">B) Юпитер</button>
                    <button class="game__option" onclick="checkAnswer('c', 9)">C) Марс</button>
                    <button class="game__option" onclick="checkAnswer('d', 9)">D) Уран</button>
                </div>
            </section>
        `,
        correctAnswer: 'a'
    }
];


let currentStep = 0;
let countSuccessAnswer = 0;
let countErrorAnswer = 0;

let answers = []

// Универсальная функция для отображения текущего шага
function setGame(step) {
    const headerElement = document.querySelector('.game__header');
    headerElement.classList.add('hidden');
    const mainElement = document.querySelector('.game__main');
    const correctAnswer = htmlElements[step].correctAnswer.toUpperCase();
    const correctAnswerText = document.getElementById('correctAnswerDisplay');

    correctAnswerText.innerHTML = `Правильный ответ: <span id="correctAnswerText">${correctAnswer}</span>`;

    mainElement.innerHTML = htmlElements[step].question;
}


// Универсальная функция для проверки ответа
function checkAnswer(option, step) {
    const correctAnswer = htmlElements[step].correctAnswer;
    let result;

    switch (option) {
        case correctAnswer:
            result = 'correct';
            countSuccessAnswer ++;
            break;
        default:
            result = 'incorrect';
            countErrorAnswer ++;
            break;
    }

    answers.push(option)

    const mainElement = document.querySelector('.game__main');
    const questionElement = mainElement.querySelector('.game__question');

    questionElement.classList.add('hidden');
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('feedback');
    feedbackElement.textContent = result === 'correct' ? 'Правильно!' : 'Неправильно!';
    mainElement.appendChild(feedbackElement);

    setTimeout(() => {
        feedbackElement.remove();
        if (result === 'correct') {
            nextStep();
        } else {
            questionElement.classList.remove('hidden');
        }
    }, 2000);
}



// Функция перехода на следующий шаг
function nextStep() {
    currentStep++;
    if (currentStep < htmlElements.length) {
        setGame(currentStep);
    } else {
        showFinalScreen();
    }
}

// Функция для отображения конечного экрана
function showFinalScreen() {
    const mainElement = document.querySelector('.game__main');

    if (countSuccessAnswer > 5) {
        mainElement.innerHTML = `
            <section class="game__final">
                <h2 class="game__text">Поздравляем! Вы успешно добрались до цели и завладели Камнем Всесилия!</h2>
                <img src="images/victory.jpg" alt="Победа" class="game__image">
            </section>
        `;
    } else {
        mainElement.innerHTML = `
            <section class="game__final">
                <h2 class="game__text">К сожалению, вы трагически погибли, так и не добравшись до Камня Всесилия.</h2>
                <img src="images/defeat.jpg" alt="Поражение" class="game__image">
            </section>
        `;
    }
}
