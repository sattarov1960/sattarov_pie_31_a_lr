function zeroBelowDiagonal(matrix) {
    console.log("Original Matrix:", matrix);

    const size = matrix.length;

    // Обнуляем элементы ниже главной диагонали
    for (let i = 1; i < size; i++) { // Строки, начиная со второй
        for (let j = 0; j < i; j++) { // Столбцы ниже главной диагонали
            matrix[i][j] = 0; // Обнуляем элемент
        }
    }

    console.log("Modified Matrix:", matrix);
    return matrix;
}

function calculateMatrixZeroed() {
    // Читаем строку матрицы из текстового поля
    const matrixInput = document.getElementById("matrix2").value;
    const rows = matrixInput.trim().split('\n'); // Разбиваем на строки

    // Преобразуем строки в массив чисел
    let matrix = [];
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i].trim().split(' '); // Разбиваем строку на числа
        let numbers = [];
        for (let j = 0; j < row.length; j++) {
            numbers.push(parseInt(row[j], 10)); // Преобразуем в целое число
        }
        matrix.push(numbers); // Добавляем строку в матрицу
    }

    // Проверяем, что матрица квадратная
    const size = matrix.length;
    for (let i = 0; i < size; i++) {
        if (matrix[i].length !== size) {
            document.getElementById("result2").innerText = "Матрица должна быть квадратной!";
            return;
        }
    }

    // Проверяем корректность матрицы (все элементы должны быть числами)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (isNaN(matrix[i][j])) {
                document.getElementById("result2").innerText = "Введите корректную квадратную матрицу чисел!";
                return;
            }
        }
    }

    // Обнуляем элементы ниже главной диагонали
    matrix = zeroBelowDiagonal(matrix);

    // Генерируем строку результата
    let result = '';
    for (let i = 0; i < size; i++) {
        result += matrix[i].join(' ') + '\n';
    }

    // Выводим результат
    document.getElementById("result2").innerText = `Модифицированная матрица:\n${result}`;
}
