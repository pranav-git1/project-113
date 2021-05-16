function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(500, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);
    fill(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);

    fill(255, 0, 0);
    circle(575, 50, 80)

    fill(0, 128, 0);
    rect(37, 90, 20, 350);

    fill(255, 0, 0);
    circle(50, 425, 80);

    fill(0, 128, 0);
    rect(565, 90, 20, 350);

    fill(255, 0, 0);
    circle(570, 425, 80)
}