// // 电子时钟功能
// function updateClock() {
//     const now = new Date();
//     const clock = document.getElementById('clock');
//     clock.innerText = now.toLocaleTimeString();
// }

// // 每秒更新一次时钟
// setInterval(updateClock, 1000);

// // 页面加载时更新一次时钟
// updateClock();



// 电子时钟功能，包含年月日星期时分秒
function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月份从0开始，所以需要+1
    const day = now.getDate();
    const weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][now.getDay()];
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // 格式化时间信息
    const clockInfo = `
        <div>
            <span>${year}年${month}月${day}日</span>
            <span>${weekday}</span>
        </div>
        <div>
            <span>${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}</span>
        </div>
    `;
    
    const clock = document.getElementById('clock');
    clock.innerHTML = clockInfo;
}

// 每秒更新一次时钟
setInterval(updateClock, 1000);

// 页面加载时立即更新一次
updateClock();