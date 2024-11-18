function getThousandsDigit(number) {
    if (number < 1000) {
        return `Число введено не корректно! Должно быть больше 999`;
    }
    res = parseInt(number / 1000) % 10;
    return res
}
function calculateThousandsDigit() {
    const input = document.getElementById("fourDigitNumber").value;
    const number = parseInt(input, 10);
    
    if (isNaN(number)) {
        document.getElementById("result2").innerText = "Число некоректно введено!";
        return;
    }

    const result = getThousandsDigit(number);
    document.getElementById("result2").innerText = `Ответ: ${result}`;
}
