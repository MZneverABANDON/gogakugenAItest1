// 日付と時刻の取得
function getDate() {
  const now = new Date();
  return now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate();
}

function getTime() {
  const now = new Date();
  return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

// 画面の表示
document.querySelector(".date").innerHTML = getDate();
document.querySelector(".time").innerHTML = getTime();
