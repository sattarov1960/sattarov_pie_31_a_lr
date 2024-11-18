function findUniqueNumberIndex(a, b, c) {
    // Даны три целых числа, одно из которых отлично от двух других,
    // равных между собой. Определить порядковый номер числа, отличного от
    // остальных.
    if (a === b) {
        return 3; // Если первые два числа равны, отличное число — третье
    } else if (a === c) {
        return 2; // Если первое и третье числа равны, отличное число — второе
    } else {
        return 1; // В других случаях, отличное число — первое
    }
}

function calculateUniqueNumber() {
    a = parseFloat(document.getElementById("a2").value);
    b = parseFloat(document.getElementById("b2").value);
    c = parseFloat(document.getElementById("c2").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result2").innerText = "Введите числовые значения!";
        return;
    }
    
    const res = findUniqueNumberIndex(a, b, c);
    document.getElementById("result2").innerText = `Ответ: Число под номером ${res}`;
}