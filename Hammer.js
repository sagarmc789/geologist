class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 80
      this.height = 20
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX
      pos.y=mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      strokeWeight(3);
      stroke("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }