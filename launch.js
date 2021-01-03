class Launch{
    constructor(body,point){
      var options={
          bodyA:body,
          pointB:point,
          length:1,
          stiffness:.04
      }
      this.launch = Constraint.create(options);
       World.add(world,this.launch);
    }

    attach(body){
        this.launch.bodyA = body;
    }
    
    fly(){
        this.launch.bodyA = null;
    }
}
