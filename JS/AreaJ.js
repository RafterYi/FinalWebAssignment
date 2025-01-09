const areaItems = document.querySelectorAll('.area-item');

areaItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'open' class from all items
        areaItems.forEach(i => i.classList.remove('open'));
        // Add 'open' class to clicked item
        item.classList.add('open');
    });
});

// 漢堡選單開關
document.getElementById('menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});



