function distanceBetweenPoint(a, b, c) {
    if (!(a < b < c)){
        return `Числа введены не корректно! Должно быть a < b < c`;
    }
    let ac = Math.abs(c - a);
    let bc = Math.abs(b - c);

    let res = ac * bc;
    return res
}

function calculateDistance() {
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result1").innerText = "Введите числовые значения!";
        return;
    }
    
    const res = distanceBetweenPoint(a, b, c);
    document.getElementById("result1").innerText = `Ответ: ${res}`;
}
