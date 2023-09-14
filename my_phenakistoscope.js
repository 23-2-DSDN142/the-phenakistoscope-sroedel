
function setup_pScope(pScope){
 // pScope.output_mode(OUTPUT_GIF(1000));
 pScope.output_mode(ANIMATED_DISK);//Does not exprot properly as a GIF please look at it inLive View
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(8);
  pScope.load_image_sequence("moon_cycle","png",8);
  pScope.load_image("Earth","png");
  pScope.load_image_sequence("meteor","png",9);
  
}

function setup_layers(pScope){

  new PLayer(null,22, 27, 54);  //lets us draw the whole circle background, ignoring the boundaries

  let meteorsequence = new PLayer(meteorimage);
  meteorsequence.mode(RING);
  meteorsequence.set_boundary(100,100);
  
  let moonsequence = new PLayer(moon);
  moonsequence.mode(RING);
  moonsequence.set_boundary(0,1000);

  let earthsequence = new PLayer(earth);
  earthsequence.mode(RING);
  earthsequence.set_boundary(1000,1000);

  let Wstarsequence = new PLayer(whitestar);
  Wstarsequence.mode(RING);
  Wstarsequence.set_boundary( 0, 1000 );

  let Ystarsequence = new PLayer(yellowstar);
  Ystarsequence.mode(RING);
  Ystarsequence.set_boundary( 0, 900 );

}

function meteorimage(x,y,animation,pScope){
  scale(1.9);
  translate(x,y-440)
  if(animation.frame >0.5){
    pScope.draw_image_from_sequence("meteor", 0, 900, animation.frame)
  }
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

    function whitestar(x, y, animation, pScope){
      let pulse  =(animation.wave(1)* 5)
      let startcolor=color(255, 255, 255);
      let endcolor =color(22, 27, 54);
      let animatingcolor = lerpColor(startcolor,endcolor,animation.frame)
      
      fill(animatingcolor);
      ellipse(190, 700,35+pulse); 
      ellipse(10,400,20+pulse);
      ellipse(270,400,30+pulse);
      ellipse(450,650,25+pulse);
      ellipse(150,550,25+pulse);
}

function yellowstar(x, y, animation, pScope){

  let pulse2  =(animation.wave(1)* 3)
  let startcolor=color(22, 27, 54);
  let endcolor =color(250, 222, 167);
  let animatingcolor = lerpColor(startcolor,endcolor,animation.wave(1))
  
  fill(animatingcolor);

  ellipse(70, 800,20+pulse2); 
  ellipse(100,450,30+pulse2);
  ellipse(200,320,15+pulse2);
  ellipse(300,550,25+pulse2);
}