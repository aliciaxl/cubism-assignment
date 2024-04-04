//mousehover

/*
shape 

if (mouseX, mouseY) is within the shape, then shape fills with white circles.


*/
  let orangeLshape = orangeLshape();

function faceImage() {
    fill(99, 117, 92);
    quad(220, 150, 294, 150, 294, 454, 220, 454);
  
    //brown center shape
    fill(129, 93, 39);
    quad(130, 117, 220, 117, 220, 487, 130, 487);
  
    //center cement
    fill(150, 140, 103);
    quad(148, 263, 210, 263, 210, 413, 148, 413);
    quad(148, 356, 222, 356, 220, 414, 148, 414)
    circle(184, 413, 72);
  
    //blue pie
    fill(140, 184, 191);
    arc(220, 375, 85, 110, radians(210), radians(270), PIE);
  
    //red right
    fill(200, 59, 32);
    triangle(179, 352, 266, 352, 266, 418);
    quad(223, 356, 223, 337, 266, 337, 266, 356);
    quad(210, 325, 248, 325, 248, 168, 210, 168);
    quad(248, 172, 277, 161, 281, 176, 244, 226);
  
    //teal pie 
    fill(99, 117, 92);
    arc(280, 229, 64, 102, radians(160), radians(270), PIE);
  
    //orange
    fill(215, 123, 26);
    quad(147, 96, 324, 94, 323, 144, 148, 208);
    quad(148, 184, 210, 184, 210, 263, 148, 263);
    

  
    //grey right bottom
    fill(177, 181, 157);
    quad(210, 325, 266, 325, 266, 337, 210, 337);
  
    //light blue
    fill(140, 184, 191);
    quad(210, 216, 224, 216, 224, 352, 210, 352);;
  
    //circle on red triangle
    fill(224, 204, 132);
    arc(235, 393, 34, 34, radians(217), radians(40), CHORD);
    fill("black");
    arc(235, 393, 34, 34, radians(40), radians(217), CHORD);
   
  
    //center circles
    fill(54, 63, 91);
    arc(179, 263, 46, 50, radians(180), radians(360), CHORD);
    quad(148, 263, 148, 254, 165, 254, 165, 263)
    fill(224, 204, 132);
    arc(179, 263, 26, 26, radians(184), radians(356), CHORD);
    fill(126, 87, 37);
    arc(179, 263, 26, 26, radians(356), radians(184), CHORD);
  
    // //white circle top left
    // fill(229, 213, 164);
    // ellipse(130, 117, 34, 25);
}

function backImage (){
      //top left black
  fill(55, 56, 52);
  quad(0, 0, 50, 0, 80, 186, 0, 215);

  //left bottom yellow green
  fill(139, 139, 60);
  quad(0, 215, 50, 193, 50, 598, 0, 598);

  //green quad center left
  fill(81, 110, 75);
  quad(13, 48, 165, 17, 165, 598, 6, 598);

  //dark quad top right
  beginShape();
  fill(67, 74, 68);
  vertex(303, 0);
  vertex(430, 0);
  vertex(430, 30);
  vertex(382, 60);
  vertex(316, 61);
  endShape();

  //teal quad
  fill(43, 120, 112);
  quad(316, 61, 382, 60, 394, 348, 375, 348);

  //grey quad top right
  fill(85, 91, 100);
  quad(382, 60, 430, 30, 430, 96, 384, 118);

  //5 sided teal shape
  beginShape();
  fill(76, 110, 96);
  vertex(384, 118);
  vertex(424, 98);
  vertex(407, 192);
  vertex(440, 347);
  vertex(394, 348);
  endShape();

  //quad brown shape right
  fill(141, 101, 50);
  quad(424, 98, 430, 96, 430, 300, 407, 192);

  //triangles bottom right
  fill(154, 118, 44); //gold
  triangle(375, 348, 430, 347, 430, 615);
  fill(100, 124, 89); //green
  triangle(395, 366, 430, 366, 430, 530);

  //second layer
  //orange circle top left
  fill(188, 121, 90);
  circle(162, 128, 235);

  //grey quad center right
  fill(79, 85, 90);
  quad(165, 17, 302, -10, 427, 598, 165, 598);

  //black half circle
  fill("black");
  circle(172, 126, 217);

  //beige half circle
  fill(229, 213, 164);
  arc(172, 126, 218, 218, radians(100), radians(255), CHORD);

  //top left triangle beige
  fill(194, 173, 131);
  triangle(50, 0, 250, 0, 51, 40);

  //dark blue square center bottom
  fill(33, 47, 73);
  quad(60, 506, 316, 506, 316, 598, 60, 598);

  //beige square bottom left
  fill(229, 200, 137);
  quad(12, 210, 80, 179, 239, 493, 151, 528);

  //stem of notes bottom left
  fill(229, 200, 137);
  quad(29, 544, 77, 544, 77, 598, 29, 598);

  //black stem of note
  fill("black");
  quad(22, 544, 66, 528, 66, 598, 22, 598);

  //brown shapes center left
  fill(129, 93, 39);
  triangle(89, 200, 165, 163, 165, 352);

  //teal shape center left
  beginShape();
  fill(6, 100, 96);
  curveVertex(146, 196);
  curveVertex(146, 196);
  curveVertex(88, 229);
  curveVertex(79, 266);
  curveVertex(103, 314);
  curveVertex(150, 323);
  curveVertex(150, 323);
  endShape(CLOSE);

  //quad over teal shape
  fill(151, 93, 55);
  quad(75, 295, 133, 269, 136, 349, 109, 353);

  //beige bottom right
  fill(229, 213, 164);
  quad(316, 485, 360, 485, 362, 546, 311, 546);
  //
  beginShape();
  fill(229, 213, 164);
  curveVertex(360, 484);
  curveVertex(357, 467);
  curveVertex(347, 457);
  curveVertex(322, 453);
  curveVertex(230, 454);
  curveVertex(254, 457);
  curveVertex(227, 502);
  curveVertex(344, 505);
  endShape(CLOSE);

  //irregular blue bottom right shape
  beginShape();
  fill(24, 36, 78);
  curveVertex(245, 511);
  curveVertex(243, 486);
  curveVertex(249, 475);
  curveVertex(263, 474);
  curveVertex(280, 475);
  curveVertex(300, 473);
  curveVertex(320, 466);
  curveVertex(331, 454);
  curveVertex(333, 439);
  curveVertex(328, 426);
  curveVertex(316, 417);
  curveVertex(299, 415);
  curveVertex(274, 420);
  curveVertex(215, 434);
  curveVertex(180, 505);
  endShape(CLOSE);

  //irregular blue bottom right shape
  beginShape();
  fill(24, 36, 78);
  curveVertex(288, 410);
  curveVertex(305, 404);
  curveVertex(310, 400);
  curveVertex(315, 391);
  curveVertex(314, 379);
  curveVertex(309, 364);
  curveVertex(314, 337);
  curveVertex(335, 295);
  curveVertex(336, 258);
  curveVertex(314, 213);
  curveVertex(265, 217);
  curveVertex(226, 363);
  endShape(CLOSE);

  push();
  //ellipse for note bottom left beige
  fill(229, 200, 137);
  translate(90, 536);
  // Rotate the canvas
  rotate(radians(350));
  // Draw the ellipse at the translated and rotated position
  ellipse(0, 0, 130, 90);
  pop();

  //black stem of note
  fill("black");
  quad(22, 544, 66, 528, 66, 598, 22, 598);


  //light blue tile bottom center
  fill(180, 183, 170);
  quad(mouseX, 487, (mouseX + 110), 487, (mouseX + 110), 546, mouseX, 546);
  circle(mouseX + 15, 546, 30);
  circle(mouseX + 55, 546, 30);
  circle(mouseX + 95, 546, 30);

  //orange L shape bottom right
  fill(231, 127, 59);
  quad(220, 487, 337, 487, 337, 520, 220, 520);
  quad(296, 520, 337, 520, 337, 546, 296, 546);
  

  push();
  //ellipse for note bottom left black
  fill("black");
  translate(82, 525);
  // Rotate the canvas
  rotate(radians(330));
  // Draw the ellipse at the translated and rotated position
  ellipse(0, 0, 128, 87);
  pop();


  //white circle top left
  fill(229, 213, 164);
  ellipse(130, 117, 34, 25);

}