function updateDateTime() {
    const now = new Date();
    const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// 初始化日期时间
updateDateTime();

// 每秒更新一次时间
setInterval(updateDateTime, 1000);
