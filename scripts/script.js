// Функция для отображения всех товаров
const fetchAllProducts = () => {
    const endpoint = 'https://dummyjson.com/products';
    const productContainer = document.querySelector('#container');
    
    fetch(endpoint)
        .then(response => response.json())
        .then(({ products }) => {
            productContainer.innerHTML = products.map(item => `
                <div class="product">
                    <img src="${item.images[0]}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <h3>Цена: $${item.price}</h3>
                    <h3>Категория: ${item.category}</h3>
                </div>
            `).join('');
        })
        .catch(error => console.error('Ошибка загрузки продуктов:', error));
};

// Функция для поиска товаров
const findProducts = () => {
    const query = document.querySelector('#searchInput').value.trim();
    const resultContainer = document.querySelector('#searchContainer');
    const searchEndpoint = `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`;
    
    resultContainer.innerHTML = ''; // Очистка результатов поиска

    fetch(searchEndpoint)
        .then(response => response.json())
        .then(({ products }) => {
            if (products.length) {
                resultContainer.innerHTML = products.map(item => `
                    <div class="product">
                        <img src="${item.images[0]}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <h3>Цена: $${item.price}</h3>
                        <h3>Категория: ${item.category}</h3>
                    </div>
                `).join('');
            } else {
                resultContainer.innerHTML = '<p>Ничего не найдено</p>';
            }
        })
        .catch(error => console.error('Ошибка поиска продуктов:', error));
};
