function draw(rows, cols, grid) {
    $("td").removeClass("dead");
    $("td").removeClass("alive");

    var i, j;
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            grid[i][j] == 0 ? $("tr:eq("+i+") td:eq("+j+")").addClass("dead") : $("tr:eq("+i+") td:eq("+j+")").addClass("alive");
        }
    }
}