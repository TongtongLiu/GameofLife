// STATUS记录当前游戏状态，初始值表示游戏初始状态
var STATUS = {
    rows: 15,           // 行数
    cols: 15,           // 列数
    frequency: 2,       // 迭代频率
    grid: [],           // 记录方格状态
    isStart: false,     // 游戏是否开始
    auto: null          // 保存句柄
}

// 初始化函数：对页面进行必要的初始化设置
function init() {
    // 绑定键鼠事件
    key_action();
    mouse_action();

    // 初始化信息栏的信息
    $(".frequency").text("" + STATUS.frequency + "Hz");
    $(".size").text("" + (STATUS.rows) + "*" + (STATUS.cols));

    // 随机生成格子
    STATUS.grid = setRandomDots(STATUS);

    // 方格绘制
    draw(STATUS);
}

$(document).ready(function() {
    init();
});
