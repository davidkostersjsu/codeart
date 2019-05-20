var textPool = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var texts = [];
var textY = [];
var textSpeed = [];
var eachSpeed = [];

var numIndex;
var minSpeed = 0.8;
var maxSpeed = 1.5;
var tSize = 16;
var rectX;
var rectY = 430;
var rectW = 110;
var rectH = 10;
var ellipseX = 440;
var ellipseY = 60;
var ellipseSize = 70;

function setup() {

  createCanvas(500, 500);
  rainStart();

}

function draw() {
// console.log(frameRate());
  background(50);

  // text rains
  fill(255);
  for (var i = 0; i < 50; i++) {

      text(texts[i], i*10, textY[i]);
      if (i*10 > rectX-tSize/2 && i*10 < rectX+rectW-tSize/10 && textY[i] > rectY - maxSpeed && textY[i] < rectY + maxSpeed) {
        textSpeed[i] = 0;
      }
      if (i*10 < rectX-tSize/2 || i*10 > rectX+rectW-tSize/10) {
        textSpeed[i] = eachSpeed[i];
      }
      textY[i]+=textSpeed[i];
   }

  fill(0);

}

function rainStart() {
  textSize(tSize);
  noStroke();
  for (var i = 0; i < 50; i++) {
      // pick a random text
      numIndex = floor(random(textPool.length));
      texts[i] = textPool[numIndex];
      // append to the push array
      textY[i] = random(0, height/2);
      eachSpeed[i] = random(minSpeed, maxSpeed);
      textSpeed[i] = eachSpeed[i];
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, ellipseX, ellipseY) < ellipseSize/2) {
    rainStart();
  }
}
