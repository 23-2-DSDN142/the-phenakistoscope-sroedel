function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(8);
  pScope.load_image_sequence("chest_open", "png", 24);
  pScope.load_image("sunflower","png")
}

function setup_layers(pScope){
  //lets us draw the whole circle background, ignoring the boundaries
  new PLayer(null,60,70,100);

  let insideBackground = new PLayer(insideBlue);
  insideBackground.mode(RING);
  insideBackground.set_boundary(0,550);

  let backgroundDetail = new PLayer(bubbles);
  backgroundDetail.mode(SWIRL(5));
  backgroundDetail.set_boundary(650,1000);

  let outerRing = new PLayer(outsideRing);
  outerRing.mode(RING);
  outerRing.set_boundary(930,1000);

  let chestSequence = new PLayer(chest);
  chestSequence.mode(RING);
  chestSequence.set_boundary(0,1000);

  let CenterImage = new PLayer(sunflower);
  CenterImage.mode(RING);
  CenterImage.set_boundary(0,30);
}

function sunflower(x,y,animation,pScope){
  scale(3.5);
  if(animation.frame == 0.1){
  pScope.draw_image("sunflower",x,y);
} 
}

function insideBlue (x,y,animation,pScope){
  pScope.fill_background("blue");
}
function outsideRing (x,y,animation,pScope){
    pScope.fill_background("purple");
}
function chest(x,y,animation,pScope){
  translate(x,y-650);
  scale(6);

  pScope.draw_image_from_sequence("chest_open", 0, 0, animation.frame);
 
}

function bubbles(x,y,animation,pScope){
  let mvmnt =  70 *animation.frame;
  let bubbleSize =60;
  noStroke();
  fill(255,0,155);
  ellipse(x,y,bubbleSize,bubbleSize-mvmnt);

}
