// 漢堡選單開關
document.getElementById('menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});



const recipes = [
    {
        image: './images/理論派.png',
        title: 'Snake Pie',
        description: 'Made of Chimera, which looks similar to a snake, this product is guaranteed to be snake-free'
    },
    {
        image: './images/日原餅.png',
        title: 'Chimera Stew',
        description: 'A hearty stew made from the finest Chimera meat, rich in flavor and tradition.'
    },
    {
        image: './images/海鮮霸王濃湯.png',
        title: 'Mystic Bread',
        description: 'Baked with enchanted grains, this bread is said to bring luck to those who eat it.'
    }
];


let currentIndex = 0;

// DOM elements
const imageElement = document.getElementById('recipe-image');
const titleElement = document.getElementById('recipe-title');
const descriptionElement = document.getElementById('recipe-description');

// Previous button
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
    updateCarousel();
});

// Next button
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % recipes.length;
    updateCarousel();
});

// Update carousel
function updateCarousel() {
    const recipe = recipes[currentIndex];
    imageElement.src = recipe.image;
    titleElement.textContent = recipe.title;
    descriptionElement.textContent = recipe.description;
}

function updateCarousel() {
    // 取得當前圖片和新圖片
    const recipe = recipes[currentIndex];

    // 暫時為圖片添加漸出效果
    imageElement.classList.remove('image-enter');
    imageElement.classList.add('image-leave');

    // 等待漸出動畫結束後，切換圖片和文字
    setTimeout(() => {
        imageElement.src = recipe.image;
        titleElement.textContent = recipe.title;
        descriptionElement.textContent = recipe.description;

        // 移除漸出效果，添加漸入效果
        imageElement.classList.remove('image-leave');
        imageElement.classList.add('image-enter');
    }, 500); // 與 CSS 動畫時間對應
}
