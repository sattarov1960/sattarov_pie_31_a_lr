function swapDigits() {
    let input = document.getElementById("threeDigitNumber").value;
    let number = Number(input);
    
    let strNum = number.toString();
    let hundreds = strNum[0];
    let tens = strNum[1];
    let units = strNum[2];

    const result = Number(hundreds + units + tens);
    document.getElementById("result2").innerText = `Ответ: ${result}`;
}