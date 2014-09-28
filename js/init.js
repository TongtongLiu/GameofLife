var rows = 10;
var cols = 10;
var grid = [];

function init(rows, cols, grid) {
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
}

$(document).ready(function() {
    init(rows, cols, grid);
});
