function setup() { 
    createCanvas(930,700);
    fill(250);
   


}

function draw() {
    background(0);
   
    var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(.7)
translate(450, 15)
drawTriangle(depth, 200,10, 10,390, 390,390);
 


var depth = 3; //or 1000
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(400,950)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);

var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(.4)
translate(550, 950)
drawTriangle(depth, 200,10, 10,390, 390,390);

var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(150, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);

var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(650, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);

var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(150, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(650, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(150, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(650, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(2150, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(150, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(650, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(150, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);

var depth = 5;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(2.5)
translate(-400, 122)
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 5;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
rotate(PI / 1.0);
translate(-400, 90)
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(-220, -540)
drawTriangle(depth, 200,10, 10,390, 390,390);

var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(400, 955)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 5;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(-250, 415)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(620, 415)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 3;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(400, 955)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);
var depth = 5;
 
var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
    triangle(x2, y2, x3, y2, x3, y3);
    if (depth > 0) {
        var x12 = (x1 + x2) / 2;
        var x13 = (x1 + x3) / 2;
        var x23 = (x2 + x3) / 2;
        var y12 = (y1 + y2) / 2;
        var y13 = (y1 + y3) / 2;
        var y23 = (y2 + y3) / 2;
        depth--;
        drawTriangle(depth, x1, y1, x12, y12, x13, y13);
        drawTriangle(depth, x2, y2, x12, y12, x23, y23);
        drawTriangle(depth, x3, y3, x13, y13, x23, y23);
    }
};
 
stroke(random(0,255), random(0,255), random(0,255));
strokeWeight(2);
scale(1)
translate(185, 450)
rotate(PI / 1.0);
drawTriangle(depth, 200,10, 10,390, 390,390);

}
    