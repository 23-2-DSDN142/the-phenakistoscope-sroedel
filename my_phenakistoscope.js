
function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(8);
  pScope.load_image_sequence("moon_cycle","png",8);
}

function setup_layers(pScope){

  new PLayer(null,60,70,100);  //lets us draw the whole circle background, ignoring the boundaries

  let moonsequence = new PLayer(moon);
    moonsequence.mode(RING);
    moonsequence.set_boundary(0,1000);

}


function moon(x,y,animation,pScope){
  scale(1.6);
  translate(x,y-650);
  pScope.draw_image_from_sequence("moon_cycle", 0, 300, animation.frame)
}  


