setInterval(() => {
    let create_time = Math.round(new Date('2025/9/15 00:00:00').getTime() / 1000); // 在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);

    var nol = function(h) {
        return h > 9 ? h : '0' + h;
    }
    
    // 计算总天数
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second >= 0) {
        time[4] = nol(second);
    }
    
    // 获取页面上的 runtime 容器
    let runtimeDiv = document.getElementById('runtime');
    if (runtimeDiv) {
        runtimeDiv.innerHTML = `感谢陪伴 ${time[1]} 天 ${time[2]} 时 ${time[3]} 分 ${time[4]} 秒`;
    }
}, 1000);