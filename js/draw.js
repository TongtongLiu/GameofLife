var CANVAS = {width: 500, height: 500, border: 10};

// 圆角矩形函数参考自：http://blog.sina.com.cn/s/blog_936739790101dbix.html
function draw_roundRect(context, x, y, w, h, r) {
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + w, y, x + w, y + h, r);
    context.arcTo(x + w, y + h, x, y + h, r);
    context.arcTo(x, y + h, x, y, r);
    context.arcTo(x, y, x + w, y, r);
    context.closePath();
    context.fill();
}

function draw_background(context) {
    context.clearRect(0, 0, CANVAS.width + 2 * CANVAS.border, CANVAS.height + 2 * CANVAS.border);
    context.save();
    context.fillStyle = "#bbada0";
    draw_roundRect(context, 0, 0, CANVAS.width + 2 * CANVAS.border, CANVAS.height + 2 * CANVAS.border, CANVAS.border);
    context.restore();
}

function draw_dead(context, x, y, w, h, r) {
    context.save();
    context.fillStyle = "#ede0c8";
    draw_roundRect(context, x, y, w, h, r);
    context.restore();
}

function draw_alive(context, x, y, w, h, r) {
    context.save();
    context.fillStyle = "#f65e3b";
    draw_roundRect(context, x, y, w, h, r);
    context.restore();
}

function draw(rows, cols, grid) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var h = CANVAS.height / rows,
        w = CANVAS.width / cols,
        r = (h > w ? w : h) / 5;
        d = (h > w ? w : h) / 20;
    var i, j;

    draw_background(context);
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            if (grid[i][j] == 0) {
                draw_dead(context, j * w + d + CANVAS.border, i * h + d + CANVAS.border, w - 2 * d, h - 2 * d, r);
            } else {
                draw_alive(context, j * w + d + CANVAS.border, i * h + d + CANVAS.border, w - 2 * d, h - 2 * d, r);
            }
        }
    }
}