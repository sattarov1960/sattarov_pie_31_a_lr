function hasMatchingPair(a, b, c) {
    // Проверить истинность высказывания: «Среди трех данных целых чисел есть хотя бы одна пара совпадающих».
    if (a === b || a === c || b === c) {
        return true;
    } else {
        return false;
    }
}


function calculateMatchingPair() {
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result1").innerText = "Введите числовые значения!";
        return;
    }
    
    const res = hasMatchingPair(a, b, c);
    document.getElementById("result1").innerText = `Ответ: ${res ? "Есть хотя бы одна пара совпадающих" : "Нет хотя бы одной пары совпадающих"}`;
}