function calculateYSecond(x, a, b) {
    let y; // Переменная для результата

    if (x === 3) {
        y = x + Math.cos(a * x); // x + cos(ax)
    } else if (x === 6) {
        y = Math.log(Math.abs(x)) + Math.sqrt(a * x); // ln|x| + √(ax)
    } else if (x === 1) {
        y = Math.atan(b / (x * x + 1)); // arctg(b / (x^2 + 1))
    } else {
       return "Непредвиденное значение x";
    }

    return y;
}

function calculateYTwo() {
    x = parseFloat(document.getElementById("x4").value);
    a = parseFloat(document.getElementById("b4").value);
    b = parseFloat(document.getElementById("c4").value);
    if (isNaN(x) || isNaN(a) || isNaN(b)) {
        document.getElementById("result4").innerText = "Введите числовые значения!";
        return;
    }
    
    const res = calculateYSecond(x, a, b);
    document.getElementById("result4").innerText = `Ответ: ${res}`;
}