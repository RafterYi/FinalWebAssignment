// 漢堡選單開關
document.getElementById('menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// 展開內容區域
document.getElementById('expand-btn').addEventListener('click', function () {
    const content = document.getElementById('expandable-content');
    const arrow = this;

    // Toggle content visibility
    if (content.style.display === 'flex') {
        content.style.display = 'none';
        arrow.textContent = '▼';
    } else {
        content.style.display = 'flex';
        arrow.textContent = '▲';
    }
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

const imageElement = document.getElementById('recipe-image');
const titleElement = document.getElementById('recipe-title');
const descriptionElement = document.getElementById('recipe-description');

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
    updateCarousel();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % recipes.length;
    updateCarousel();
});

function updateCarousel() {
    const recipe = recipes[currentIndex];
    imageElement.src = recipe.image;
    titleElement.textContent = recipe.title;
    descriptionElement.textContent = recipe.description;
}
