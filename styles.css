function updateDateTime() {
    const now = new Date();
    const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

let timerInterval = null;
let elapsedTime = 0;

function startStopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById('startStop').textContent = 'Start';
    } else {
        timerInterval = setInterval(() => {
            elapsedTime += 1;
            const hours = Math.floor(elapsedTime / 3600);
            const minutes = Math.floor((elapsedTime % 3600) / 60);
            const seconds = elapsedTime % 60;
            document.getElementById('timerDisplay').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
        document.getElementById('startStop').textContent = 'Stop';
    }
}

function resetTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    elapsedTime = 0;
    document.getElementById('timerDisplay').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
}

document.getElementById('startStop').addEventListener('click', startStopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// 初始化日期时间
updateDateTime();

// 每秒更新一次时间
setInterval(updateDateTime, 1000);
