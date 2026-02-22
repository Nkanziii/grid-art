
function setup() {
  createCanvas(400, 400);
  background('pink');
  noFill();

  let circleSize = 33;
  let marginX = 10;
  let marginY = 10;
  let verticalSpacing = 5;
  let horizontalSpacing = 5;

  //big squares
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = 20 + i * (circleSize + horizontalSpacing) + marginX;
      let y = 20 + j * (circleSize + verticalSpacing) + marginY;
      fill(random(255), random(220), random(180));
      circle(x, y, circleSize);

      //middle Squares
      let smallCircle = random(circleSize * 0.2, circleSize * 0.8);

      fill(random(255), random(220), random(180));
      circle(x, y, smallCircle);

      //even smaller
      let smallestCircle = random(circleSize * 0.2, circleSize * 0.6);

      fill(random(255), random(220), random(180));
      circle(x, y, smallestCircle);

    }
  }
}

function mousePressed() {
  setup();
}