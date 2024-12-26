const htmlElements = [
    {
        question: `
            <section class="game__question">
                <img src="images/artifact.jpg" alt="Загадочный артефакт" class="game__image">
                <p class="game__text">Во время путешествия по лесу вы наткнулись на древний алтарь, скрытый густой листвой. На алтаре лежит артефакт, излучающий слабое сияние. Вы чувствуете необъяснимую тягу к нему. Что вы сделаете?</p>
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 0)">A) Забрать себе</button>
                    <button class="game__option" onclick="checkAnswer('b', 0)">B) Изучить</button>
                    <button class="game__option" onclick="checkAnswer('c', 0)">C) Изьять</button>
                </div>
            </section>
        `,
        influence: { selfish: 1, curiosity: 0, destruction: 0 },
        correctAnswer: null
    },
    {
        question: `
            <section class="game__question">
                <img src="images/artifact1.jpg" alt="Загадочный артефакт" class="game__image">
                <p class="game__text">Как только вы прикоснулись к артефакту, он начал светиться ярче. Струи энергии заполнили пространство вокруг. Кажется, артефакт пытается общаться с вами. Ваши действия могут иметь серьёзные последствия. Что вы сделаете дальше?</p>
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 1)">A) Попробовать использовать</button>
                    <button class="game__option" onclick="checkAnswer('b', 1)">B) Зажмурится</button>
                    <button class="game__option" onclick="checkAnswer('c', 1)">C) Затаится</button>
                </div>
            </section>
        `,
        influence: { selfish: 1, curiosity: 1, destruction: 0 },
        correctAnswer: null
    },
    {
        question: `
            <section class="game__question">
                <img src="images/artifact2.jpg" alt="Загадочный артефакт" class="game__image">
                <p class="game__text">Ваша связь с артефактом усиливается. Вы чувствуете, что он обладает собственным сознанием. В вашем разуме звучит голос, предостерегающий от неосторожных действий. Что вы решите сделать?</p>
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 2)">A) Договориться</button>
                    <button class="game__option" onclick="checkAnswer('b', 2)">B) Испугаться</button>
                    <button class="game__option" onclick="checkAnswer('c', 2)">C) Попробовать подчинить</button>
                </div>
            </section>
        `,
        influence: { selfish: 1, curiosity: 0, destruction: 1 },
        correctAnswer: null
    },
    {
        question: `
            <section class="game__question">
            <img src="images/artifact3.jpg" alt="Загадочный артефакт" class="game__image">
                <p class="game__text">Артефакт открывает перед вами видение возможного будущего. Он говорит, что может изменить мир, но за это придётся заплатить высокую цену. Или вы можете оставить всё как есть. Каков ваш выбор?</p>
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 3)">A) Изменить мир</button>
                    <button class="game__option" onclick="checkAnswer('b', 3)">B) Уничтожить артефакт</button>
                    <button class="game__option" onclick="checkAnswer('c', 3)">C) Оставить всё как есть</button>
                </div>
            </section>
        `,
        influence: { selfish: 0, curiosity: 1, destruction: 1 },
        correctAnswer: null
    },
    {
        question: `
            <section class="game__question">
            <img src="images/artifact4.jpg" alt="Загадочный артефакт" class="game__image">
                <p class="game__text">Вы чувствуете, что артефакт начинает менять вас. Его энергия проникает в ваше сознание, заполняя его мыслями о могуществе и опасности. Это ваш последний шанс принять решение. Что вы сделаете?</p>
                <div class="game__items">
                    <button class="game__option" onclick="checkAnswer('a', 4)">A) Использовать его силу</button>
                    <button class="game__option" onclick="checkAnswer('b', 4)">B) Разрушить его окончательно</button>
                    <button class="game__option" onclick="checkAnswer('c', 4)">C) Передать его другому</button>
                </div>
            </section>
        `,
        influence: { selfish: 1, curiosity: 0, destruction: 1 },
        correctAnswer: null
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

    // Обновляем контент вопроса
    mainElement.innerHTML = htmlElements[step].question;
}



// Универсальная функция для проверки ответа
let influenceScores = { selfish: 0, curiosity: 0, destruction: 0 };

function checkAnswer(option, step) {
    const influences = htmlElements[step].influence;

    // Увеличиваем влияние в зависимости от выбранного варианта
    switch (option) {
        case 'a':
            influenceScores.selfish += influences.selfish || 0;
            influenceScores.curiosity += influences.curiosity || 0;
            influenceScores.destruction += influences.destruction || 0;
            break;
        case 'b':
            influenceScores.selfish += influences.selfish || 0;
            influenceScores.curiosity += influences.curiosity || 0;
            influenceScores.destruction += influences.destruction || 0;
            break;
        case 'c':
            influenceScores.selfish += influences.selfish || 0;
            influenceScores.curiosity += influences.curiosity || 0;
            influenceScores.destruction += influences.destruction || 0;
            break;
        default:
            break;
    }

    answers.push(option);

    const mainElement = document.querySelector('.game__main');
    const questionElement = mainElement.querySelector('.game__question');

    // Показ обратной связи
    questionElement.classList.add('hidden');
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('feedback');
    feedbackElement.textContent = 'Ваш выбор записан...';
    mainElement.appendChild(feedbackElement);

    setTimeout(() => {
        feedbackElement.remove();
        nextStep(option); // Передаём выбранный ответ
    }, 2000);
}




// Функция перехода на следующий шаг
function nextStep(option) {
    currentStep++;
    if (currentStep == 4 && option == 'b'){
        showFinalScreen("v");
        return
    }
    if (currentStep < htmlElements.length) {
        setGame(currentStep);
    } else {
        showFinalScreen(option); // Передаём последний выбор
    }
}
function restartGame() {
    // Сброс переменных состояния
    currentStep = 0;
    influenceScores = { selfish: 0, curiosity: 0, destruction: 0 };
    answers = [];

    // Возвращаем начальный экран
    const headerElement = document.querySelector('.game__header');
    headerElement.classList.remove('hidden');

    const mainElement = document.querySelector('.game__main');
    setGame(currentStep); // Отображаем первый вопрос
}

function logInfluenceScores() {
    console.log("Текущие категории влияния и их значения:");

    for (const category in influenceScores) {
        console.log(`${category}: ${influenceScores[category]}`);
    }

    console.log("Конец списка категорий.");
}

// Функция для отображения конечного экрана
function showFinalScreen(option) {
    const mainElement = document.querySelector('.game__main');

    let finalText;

    // Определяем финал на основе последнего ответа
    switch (option) {
        case 'a':
            finalText = 'Решив использовать силу артефакта, вы почувствовали, как его энергия вливается в ваше тело. Каждая клетка вашего существа наполнилась мощью, выходящей за рамки человеческого понимания.\nСила, которую вы обрели, оказалась бесконечной, но вместе с ней пришло и неизбежное проклятие. Ваш разум начал медленно растворяться в потоках чужих мыслей и желаний, оставленных теми, кто владел артефактом до вас.\nВы обрели контроль над миром, но потеряли контроль над собой. Теперь вы существуете как бессмертный страж артефакта, который питает свои силы за счёт вашей души. Каждый ваш шаг меняет реальность, но истинного счастья вы больше никогда не почувствуете.';
            break;
        case 'b':
            finalText = 'Вы собрали всю свою волю, чтобы разрушить артефакт. Ваше сердце сжалось от осознания того, какую мощь вы уничтожаете. В момент удара артефакт вспыхнул ослепительным светом, и вы почувствовали, как его энергия поглощает всё вокруг.\nКогда свет исчез, вы оказались на месте, где всё стало тихим и пустым. Мир вернулся в равновесие, но следы силы артефакта остались в вашем теле. Люди будут помнить вас как героя, принесшего жертву ради общего блага, но вы останетесь с ощущением потери чего-то великого.';
            break;
        case 'c':
            finalText = 'Вы посмотрели на артефакт в последний раз и передали его другому. Вы выбрали путь доверия, решив, что кто-то ещё сможет использовать эту силу более разумно.\nОтдавая артефакт, вы почувствовали, как тяжесть его силы покидает вас. Ваша душа вновь стала свободной, но вопрос «правильно ли вы поступили?» будет преследовать вас до конца ваших дней.\nВозможно, тот, кому вы передали артефакт, сможет найти способ изменить мир. Или же он станет жертвой той силы, от которой вы отказались. Это останется тайной, но вы будете жить, зная, что ваш выбор был гуманным.';
            break;
        case 'v':
            finalText = 'Артефакт отомстил за вашу дерзость\nСжав артефакт в руках, вы приняли решительное решение уничтожить его. Ваша сила воли боролась с его древней энергией, но артефакт был не просто объектом.\nВ тот момент, когда вы нанесли решающий удар, пространство вокруг вас замерло. Казалось, время остановилось, и мир погрузился в абсолютную тишину.';
            break;
        default:
            finalText = 'Ваш выбор не определён. Что-то пошло не так.';
    }

    mainElement.innerHTML = `
        <section class="game__final">
            <h2 class="game__text">${finalText}</h2>
            <button class="game__option" onclick="restartGame()">Начать заново</button>
        </section>
    `;
}