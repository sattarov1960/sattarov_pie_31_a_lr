function calculateColumnSums(matrix) {
    console.log("Matrix:", matrix);

    // Суммы для столбцов с чётным номером
    let evenColumnSums = [];
    
    // Определяем количество строк и столбцов
    const rows = matrix.length;
    const cols = matrix[0].length;

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
    const matrixInput = document.getElementById("matrix").value;
    const rows = matrixInput.trim().split('\n').map(row => row.split(' ').map(Number));

    // Проверяем корректность матрицы
    if (rows.some((row) => row.some(isNaN))) {
        document.getElementById("result1").innerText = "Введите корректную матрицу чисел!";
        return;
    }

    // Вызываем функцию для расчёта
    const evenColumnSums = calculateColumnSums(rows);

    // Выводим результат
    document.getElementById("result1").innerText = 
        `Суммы для чётных столбцов: ${evenColumnSums.length ? evenColumnSums.join(', ') : 'нету чётных столбцов'}`;
}
