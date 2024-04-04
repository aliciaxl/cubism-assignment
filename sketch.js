let scaleFactor = 1;
let scaleDirection = 1;
let angle = 0;

function setup() {
  createCanvas(430, 598);
  frameRate();
  angleMode();
}

function draw() {
  noStroke();

  // Call functions to draw images
  backImage();
  // Animation logic here
  // For example, you can move certain elements or change their colors
  
  // Example: Rotate the entire face image

  translate(width / 2, height / 2); // Translate to the center of the canvas
  
  // //angle reverses every 30
  // if (frameCount = 30) {
  //   angle *= -1;
  // }

  // angle = (angle + 0.0241) % 0.32;
  // rotate(angle); // Rotate the canvas


  // we limit how big scaleFactor gets within interval [1,1.5]
  // if we hit the upperbound or lowerbound, we decrease or increase scaleFactor respectively
  scaleFactor = scaleFactor + (scaleDirection * 0.01);
  if (scaleFactor >= 1.5 || scaleFactor <= 1) {
    scaleDirection *= -1;
  }
  scale(scaleFactor);

  translate(-width / 2, -height / 2); // Translate back to the original position 

  faceImage();

  
  // Call your function to draw the face image again to apply the transformations

}
