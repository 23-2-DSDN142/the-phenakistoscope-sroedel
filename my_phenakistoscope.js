const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("duck" , "png");
}

function setup_layers(pScope){

  new PLayer(null,51, 128, 145);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(duck);
  layer1.mode(RING);
  layer1.set_boundary( 0, 800 );
  

}

function duck(x, y, animation, pScope){
  //translate(50 * animation.frame, 0);
  //scale(animation.frame*2);
 
  let ballSize  = 100 + (animation.wave(1)* 20)
  let bouce = 50* animation.wave()
  
  scale(.5) 
  pScope.draw_image("duck",40,-1800+bouce,ballSize);

}
