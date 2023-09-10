
function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(8);
  pScope.load_image_sequence("moon_cycle","png",8);
  pScope.load_image("sunflower","png");
  pScope.load_image("Earth","png");
  
}

function setup_layers(pScope){

  new PLayer(null,60,70,100);  //lets us draw the whole circle background, ignoring the boundaries

  let moonsequence = new PLayer(moon);
  moonsequence.mode(RING);
  moonsequence.set_boundary(0,1000);

  let earthsequence = new PLayer(earth);
  earthsequence.mode(RING);
  earthsequence.set_boundary(1000,1000);

}


function moon(x,y,animation,pScope){
  scale(1.5);
  translate(x,y-700);
  pScope.draw_image_from_sequence("moon_cycle", 0, 300, animation.frame)
}
  function earth(x,y,animation,pScope){
     scale(4);
       if(animation.frame == 0)  {
    pScope.draw_image("Earth",x,y);
    } 
    }



