class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
          
      }
      this.body = Bodies.circle(x, y, radius,options)
      this.radius = radius;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("grey");
      strokeWeight(3);
      stroke("white");
      Matter.Bodies.circle(pos.x,pos.y,this.radius)
      pop();
    }
  };
  