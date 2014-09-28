var rows = 10;
var cols = 10;
var grid = [];

function init() {
    var line;
    var i, j;

    for (i = 0; i < rows; i++) {
        $("#grid").append("<tr></tr>");
    }
    for (j = 0; j < cols; j++) {
        $("#grid tr").append("<td></td>");
    }

    grid = [];
    for (i = 0; i < rows; i++) {
        line = [];
        for (j = 0; j < cols; j++) {
            line.push(Math.random() > 0.5 ? 1 : 0);
        }
        grid.push(line);
    }

    draw(rows, cols, grid);
    setInterval(function() {
        lifeCircle(rows, cols, grid);
        draw(rows, cols, grid);
    }, 500);
}

$(document).ready(function() {
    init(rows, cols, grid);
});
