let savedCoords = [];
let isDrawing = false;

function setup() {
    createCanvas(601, 601);
    pixelDensity(1);
    background(150);
    noStroke();
    fill(0);
}

function draw() {
    // background(150);
    // noStroke();
    // fill(0);
    // rect(30, 20, 50, 55);
    //rect(30, 20, 50, 55);
    describe('white rect with black outline in mid-right of canvas');
}

function mousePressed() { // the second the mouse is pressed
    savedCoords = [];
    savedCoords.push([mouseX, mouseY]);
}

function mouseDragged() { // the mouse is pressed and the user started moving it
    savedCoords.push([mouseX, mouseY]);
}

function mouseReleased() { // the user stopped moving the mouse and released the button
    savedCoords.push([mouseX, mouseY]);
    stroke(255);
    strokeWeight(10);
    console.log(savedCoords);
    for (let i = 0; i < savedCoords.length - 1; i++) {
        line(savedCoords[i][0], savedCoords[i][1], savedCoords[i+1][0], savedCoords[i+1][1]);
    }
}

// function mouseClicked() {
//     stroke(0);
//     translate(300, 300);
//     background(150);
//     let shift = 30 + random(300);
//     //let aPos = sin(shift) * 150;
//     let aPos = {x: -Math.abs(cos(shift) * 150), y: -Math.abs(sin(shift) * 150)};
//     rectMode(CORNERS)
//     rect(aPos.x, aPos.y, -aPos.x, -aPos.y, 10);
//     stroke(255);
//     strokeWeight(10);
//     line(aPos.x, aPos.y, -aPos.x, -aPos.y);
//     console.log(shift, aPos.x, aPos.y);
// }
