class Block{
  constructor(x, y, width, height) {
      var options = {

          restitution :0.1,
          friction :0.7,
          //isStatic:true
          

      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/block.png");
      this.sound = loadSound("sprites/hornSound.wav");
    }

    display(){
      console.log(this.body.speed);
      if(this.body.speed <6){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -0;
      tint(255,this.Visibility);
      pop();

    }
  }
} ;