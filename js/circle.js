function lifeCircle(status) {
    var tempGrid;
    var i, j, count, m, n;

    tempGrid = new Array(status.rows);
    for (i = 0; i < status.rows; i++) {
        tempGrid[i] = new Array(status.cols);
    }

    for (i = 0; i < status.rows; i++) {
        for (j = 0; j < status.cols; j++) {
            count = -1 * status.grid[i][j];
            for (m = i - 1; m <= i + 1; m++) {
                for (n = j - 1; n <= j + 1; n++) {
                    count += status.grid[(m + status.rows) % status.rows][(n + status.cols) % status.cols];
                }
            }

            if (count == 2) {
                tempGrid[i][j] = status.grid[i][j];
            } else if (count == 3) {
                tempGrid[i][j] = 1;
            } else {
                tempGrid[i][j] = 0;
            }
        }
    }

    return tempGrid;
}