function calculateYFirst(x, a, b) {
    let y; // Переменная для результата

    if (x >= 2 && x <= 5) {
        y = x + Math.cos(a * x); // x + cos(ax)
    } else if (x > 5) {
        y = Math.log(Math.abs(x)) + Math.sqrt(a * x); // ln|x| + √(ax)
    } else if (x < 2) {
        y = Math.atan(b / (x * x + 1)); // arctg(b / (x^2 + 1))
    } else {
        return "Непредвиденное значение x"; // Обработка ошибок
    }

    return y;
}

function calculateYOne() {
    x = parseFloat(document.getElementById("x3").value);
    a = parseFloat(document.getElementById("a3").value);
    b = parseFloat(document.getElementById("b3").value);
    
    if (isNaN(x) || isNaN(a) || isNaN(b)) {
        document.getElementById("result3").innerText = "Введите числовые значения!";
        return;
    }
    let y; // Переменная для результата

    y = calculateYFirst(x, a, b);
    document.getElementById("result3").innerText = `Ответ: ${y}`;
}