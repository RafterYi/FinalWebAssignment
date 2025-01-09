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


function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12; // 12小時制
    const minutes = now.getMinutes();

    const hourDeg = (hours + minutes / 60) * 30; // 每小時30度
    const minuteDeg = minutes * 6; // 每分鐘6度

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');

    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
}

// 初始化時鐘
updateClock();
// 每分鐘更新一次
setInterval(updateClock, 60000);