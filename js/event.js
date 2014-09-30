function modifyFrequency(status, sign) {
    if (sign > 0) {
        if (status.frequency < 20) 
            $(".frequency").text("" + (++status.frequency) + "Hz");
    }
    else {
        if (status.frequency > 1)
            $(".frequency").text("" + (--status.frequency) + "Hz");
    }
}

function modifyLines(status, sign) {
    var i;

    if (sign > 0) {
        if (status.rows < 99 && status.cols < 99) {
            status.grid.push([]);
            for (i = 0; i < status.rows; i++) {
                status.grid[i].push(0);
            }
            for (i = 0; i <= status.cols; i++) {
                status.grid[status.rows].push(0);
            }
            $(".size").text("" + (++status.rows) + "*" + (++status.cols));
        }
    }
    else {
        if (status.rows > 3 && status.cols > 3) {
            status.grid.pop();
            for (i = 0; i < status.rows - 1; i++) {
                status.grid[i].pop();
            }
            $(".size").text("" + (--status.rows) + "*" + (--status.cols));
        }
    }
}

function setRandomDots(status) {
    var i, j, line;
    var grid = [];

    for (i = 0; i < status.rows; i++) {
        line = [];
        for (j = 0; j < status.cols; j++) {
            line.push(Math.random() > 0.5 ? 1 : 0);
        }
        grid.push(line);
    }
    return grid;
}

function key_action() {
    $("body").keydown(function(event) {
        var keynum;
        var KEY = {LEFT: 37, UP:38, RIGHT:39, DOWN:40,
                   F5: 116,  ENTER: 13, SPACE: 32};

        event.preventDefault();
        if (event) {
            keynum = event.keyCode || event.which;
            if (!STATUS.isStart) {
                switch (keynum) {
                    case KEY.LEFT:
                        modifyLines(STATUS, -1);
                        draw(STATUS);
                        break;

                    case KEY.RIGHT:
                        modifyLines(STATUS, +1);
                        draw(STATUS);
                        break;

                    case KEY.UP:
                        modifyFrequency(STATUS, +1);
                        break;

                    case KEY.DOWN:
                        modifyFrequency(STATUS, -1);
                        break;

                    case KEY.F5:
                        STATUS.grid = setRandomDots(STATUS);
                        draw(STATUS);
                        break;

                    case KEY.ENTER:
                        STATUS.isStart = true;
                        STATUS.auto = setInterval(function() {
                            STATUS.grid = lifeCircle(STATUS);
                            draw(STATUS);
                        }, 1000 / STATUS.frequency);
                        $(".start").addClass("disabled");
                        $(".pause").removeClass('disabled');
                        break;
                }
            }
            else {
                if (keynum == KEY.SPACE) {
                    STATUS.isStart = false;
                    clearInterval(STATUS.auto);
                    $(".pause").addClass("disabled");
                    $(".start").removeClass('disabled');
                }
            }
        }
    });
}

function mouse_action() {
    $(".start").click(function(event) {
        if (!STATUS.isStart) {
            STATUS.isStart = true;
            STATUS.auto = setInterval(function() {
                STATUS.grid = lifeCircle(STATUS);
                draw(STATUS);
            }, 1000 / STATUS.frequency);
            $(".start").addClass("disabled");
            $(".pause").removeClass('disabled');
        }
    });

    $(".pause").click(function(event) {
        if (STATUS.isStart) {
            STATUS.isStart = false;
            clearInterval(STATUS.auto);
            $(".pause").addClass("disabled");
            $(".start").removeClass('disabled');
        }
    });

    $("#canvas").mousedown(function(event) {
        var x = event.offsetX - CANVAS.border,
            y = event.offsetY - CANVAS.border;
        var m, n;

        if (!STATUS.isStart && 0 <= x && x <= CANVAS.width 
            && 0 <= y && y <= CANVAS.height) {
            m = Math.floor(x / (CANVAS.width / STATUS.cols));
            n = Math.floor(y / (CANVAS.height / STATUS.rows));
            STATUS.grid[n][m] = 1 - STATUS.grid[n][m];
        }

        draw(STATUS);
    });
}