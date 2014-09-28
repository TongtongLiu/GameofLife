var INIT = 15;

function init() {
    var rows = cols = INIT;
    var grid = [];
    var line, i, j;

    for (i = 0; i < rows; i++) {
        line = [];
        for (j = 0; j < cols; j++) {
            line.push(Math.random() > 0.5 ? 1 : 0);
        }
        grid.push(line);
    }
    draw(rows, cols, grid);

    setInterval(function() {
        grid = lifeCircle(rows, cols, grid);
        draw(rows, cols, grid);
    }, 500);
}

$(document).ready(function() {
    init();
});
