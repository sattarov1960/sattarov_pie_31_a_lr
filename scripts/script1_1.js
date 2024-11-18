function calculateTwoOneDistance() {
    let x1 = parseFloat(document.getElementById("x1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    

    let result = Math.abs(x2 - x1);
    document.getElementById("result1").innerText = `Ответ: ${result}`;
}