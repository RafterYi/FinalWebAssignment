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


