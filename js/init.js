var STATUS = {
    rows: 15,
    cols: 15,
    frequency: 2,
    grid: [],
    isStart: false,
    auto: null
}

function init() {
    key_action();
    mouse_action();
    $(".frequency").text(STATUS.frequency);
    $(".size").text("" + (STATUS.rows) + "*" + (STATUS.cols));
    STATUS.grid = setRandomDots(STATUS);
    draw(STATUS);
}

$(document).ready(function() {
    init();
});
