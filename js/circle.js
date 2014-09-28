function lifeCircle(rows, cols, grid) {
    var tempGrid = new Array(rows);
    for (i = 0; i < cols; i++) {
        tempGrid[i] = new Array(cols);
    }

    var flag = false;
    var count = 0;
    for (j = 0; j < rows; j++) {
        for (k = 0; k < cols; k++) {
            flag = false;
            //Living situation
            count = 0;
            for (m = (j - 1 + rows) % rows; m <= (j + 1) % rows; m++) {
                for (n = (k - 1 + cols) % cols; n <= (k + 1) % cols; n++) {
                    count += grid[m][n];
                }
            }
            count -= grid[j][k];
            if (count == 3)
                flag = true;
            //Dead situation
            else if (count != 2)
                flag = false;
            else {
                tempGrid[j][k] = grid[j][k];
                continue;
            }

            if (flag == true)
                tempGrid[j][k] = 1;
            else
                tempGrid[j][k] = 0;
        }
    }
    grid = tempGrid;
    return tempGrid;
}