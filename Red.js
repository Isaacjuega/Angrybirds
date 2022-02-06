class Red {
    constructor(x, y, width, height) {
      super(x,y,50,50);

      var options = {
          'restitution':0.8,
          'friction':2.5,
          'density':1.8
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("bird.png");
      this.trajectory = [];
      World.add(world, this.body);
    }
    display(){
      super.display();
      if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
      }
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode (CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  };