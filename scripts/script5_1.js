// Функция для установки куки
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Функция для получения значения куки
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}

// Функция для проверки ответов
function checkAnswers() {
    const answers = {
        q1: "a",
        q2: "c",
        q3: "c",
        q4: "d",
        q5: "d",
        q6: "d",
        q7: "b",
        q8: "b",
        q9: "a",
        q10: "a"
    };

    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === answers[`q${i}`]) {
            score++;
        }
        setCookie(`q${i}`, selected ? selected.value : "", 1);
    }

    document.getElementById("result").innerText = `Ваш результат: ${score}/10`;
}

// Функция для восстановления ответов из куки
function restoreAnswers() {
    for (let i = 1; i <= 10; i++) {
        const value = getCookie(`q${i}`);
        if (value) {
            const radio = document.querySelector(`input[name="q${i}"][value="${value}"]`);
            if (radio) {
                radio.checked = true;
            }
        }
    }
}

// Восстанавливаем ответы при загрузке страницы
window.onload = restoreAnswers;