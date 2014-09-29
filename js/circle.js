function lifeCircle(status) {
    var tempGrid = new Array(status.rows);
    for (i = 0; i < status.rows; i++) {
        tempGrid[i] = new Array(status.cols);
    }

    var flag = false;
    var count, j, k, i1, i2, m, n;
    for (j = 0; j < status.rows; j++) {
        for (k = 0; k < status.cols; k++) {
            flag = false;
            count = 0;
            for (m = (j - 1 + status.rows) % status.rows, i1 = 0; i1 < 3; m = (m + 1) % status.rows, i1++) {
                for (n = (k - 1 + status.cols) % status.cols, i2 = 0; i2 < 3; n = (n + 1) % status.cols, i2++) {
                    count += status.grid[m][n];
                }
            }
            count -= status.grid[j][k];
            
            if (count == 3)
                flag = true;
            else if (count != 2)
                flag = false;
            else {
                tempGrid[j][k] = status.grid[j][k];
                continue;
            }

            if (flag == true)
                tempGrid[j][k] = 1;
            else
                tempGrid[j][k] = 0;
        }
    }
    return tempGrid;
}