var stat = {
    rows: 3,
    cols: 3,
    grid: []
};

function testfunc(x, y) {
    var queue = [], top;
    var i, j, count;
    
    for (top = 0; top < 9; top++) {
        queue.push(0);
    }
    top--;
    while (top >= 0) {
        if (top == 8) {
            stat.grid = [[], [], []];
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    stat.grid[i].push(queue[i * 3 + j]);
                }
            }
            count = -1 * queue[x * 3 + y];
            for (i = 0; i < 9; i++) {
                count += queue[i];
            }

            stat.grid = lifeCircle(stat);
            if (count == 2) {
                if (stat.grid[x][y] != queue[x * 3 + y])
                    return false;
            } else if (count == 3) {
                if (stat.grid[x][y] != 1)
                    return false;
            } else {
                if (stat.grid[x][y] != 0)
                    return false;
            }

            if (queue[top] == 0) {
                queue[top] = 1;
            } else {
                queue[top--] = 0;
            }
        }
        else {
            if (queue[top] == 0) {
                queue[top++] = 1;
            } else {
                queue[top--] = 0;
            }
        }
    }
    return true;
}


test("以3*3方格为例，对9个方格用穷举法进行验证", function() {
    var i, j;

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            ok(testfunc(i, j), "(" + i  + "," + j + ")位置已验证");
        }
    }
})