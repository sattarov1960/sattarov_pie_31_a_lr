
function calculatePolynomialSum(A, N) {
    // Дано вещественное число A и целое число N (> 0). Используя один цикл, найти значение выражения 1−A+A2−A3 + . . . +(−1)^N * A^N.
    
    // Инициализация результата
    let result = 1; // Начинаем с 1, так как это первый элемент последовательности
    console.log("Начальное значение result:", result);

    // Инициализация переменной для текущего члена
    let term = 1;
    console.log("Начальное значение term:", term);

    // Цикл для вычисления суммы
    for (let i = 1; i <= N; i++) {
        term *= -A; // На каждом шаге умножаем предыдущий член на -A
        console.log(`Шаг ${i}: term = ${term}`);
        
        result += term; // Добавляем текущий член к результату
        console.log(`Шаг ${i}: result = ${result}`);
    }

    // Вывод результата
    console.log("Результат:", result);
    return result;
}


function calculatePolynomial() {
    const a = document.getElementById("a").value;
    const n = document.getElementById("n").value;

    // Проверка на корректный ввод
    if (isNaN(a) || isNaN(n)) {
        document.getElementById("result2").innerText = "Введите корректный массив чисел!";
        return;
    }
    
    // Вызываем функцию
    const result = calculatePolynomialSum(a, n);
    
    // Выводим результат
    document.getElementById("result2").innerText = `Ответ: ${result}`;
}
