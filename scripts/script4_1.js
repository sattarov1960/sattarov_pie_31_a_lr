function findSmallerThanLeft(numbers) {
    console.log("numbers:", numbers);

    // Массив для элементов, которые меньше своего левого соседа
    let smallerThanLeft = [];
    
    // Перебираем элементы массива начиная со второго
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) {
            smallerThanLeft.push(numbers[i]);
        }
    }
    
    // Количество таких элементов
    let K = smallerThanLeft.length;
    
    // Вывод результата
    console.log("Элементы, которые меньше своего левого соседа:", smallerThanLeft);
    console.log("Количество таких элементов:", K);

    return {smallerThanLeft, K};
}

function calculateSmallerThanLeft() {
    const numbers = document.getElementById("numbers").value.split(' ').map(Number);

    // Проверка на корректный ввод
    if (numbers.some(isNaN)) {
        document.getElementById("result1").innerText = "Введите корректный массив чисел!";
        return;
    }
    
    // Вызываем функцию
    const { smallerThanLeft, K } = findSmallerThanLeft(numbers);
    
    // Выводим результат
    document.getElementById("result1").innerText = 
        `Ответ: количество элементов = ${K}, элементы = ${smallerThanLeft.length ? smallerThanLeft.join(', ') : 'нету элементов'}`;
}
