function calculateColumnSums(matrix) {
    console.log("Matrix:", matrix);

    // Суммы для столбцов с чётным номером
    let evenColumnSums = [];
    
    // Определяем количество строк и столбцов
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Перебираем столбцы с чётным индексом (2, 4, ...)
    for (let j = 1; j < cols; j += 2) {
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            sum += matrix[i][j];
        }
        evenColumnSums.push(sum);
    }

    console.log("Суммы чётных столбцов:", evenColumnSums);

    return evenColumnSums;
}

function calculateMatrixColumnSums() {
    // Читаем матрицу из текстового поля
    let matrixInput = document.getElementById("matrix").value;
    let rows = matrixInput.trim().split('\n'); // Разбиваем строки

    // Преобразуем строки в матрицу
    let matrix = [];
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i].trim().split(' '); // Разделяем строку по пробелам
        let numbers = [];
        for (let j = 0; j < row.length; j++) {
            numbers.push(parseInt(row[j], 10)); // Преобразуем в число
        }
        matrix.push(numbers);
    }

    // Проверяем корректность матрицы (все элементы должны быть числами)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (isNaN(matrix[i][j])) {
                document.getElementById("result1").innerText = "Введите корректную матрицу чисел!";
                return;
            }
        }
    }

    // Вызываем функцию для расчёта
    let evenColumnSums = calculateColumnSums(matrix);

    // Формируем строку результата
    let result = "Суммы для чётных столбцов: ";
    if (evenColumnSums.length > 0) {
        for (let i = 0; i < evenColumnSums.length; i++) {
            result += evenColumnSums[i];
            if (i < evenColumnSums.length - 1) {
                result += ", ";
            }
        }
    } else {
        result += "нету чётных столбцов";
    }

    // Выводим результат
    document.getElementById("result1").innerText = result;
}
