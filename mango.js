class Mango {
    constructor(x,y,radius){
       var options={
           isStatic:true,
           friction:1
       }
       this.image = loadImage("mango.png");
       this.body = Bodies.circle(x,y,radius,options);
       this.radius=radius;
       World.add(world,this.body);
    }
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius*2, this.radius*2);

    pop();
  }

}