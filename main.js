function preload() {

}

var screenW = screen.width;
var screenH = screen.height;

function setup() {
    canvas = createCanvas(screenW-20, 450);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw() {
    image(video, 0, 0);
    tint(tint_color);
//    filter(INVERT);
}
function take_snapshot() {
    save('student_name.png');
}
function filter_tint() {
    tint_color = document.getElementById("color_name").value;
    
}
