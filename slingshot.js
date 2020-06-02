class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA){
            var startpoint = this.chain.bodyA.position;
            var Ep = this.chain.pointB;
            strokeWeight(4);
            line(startpoint.x, startpoint.y, Ep.x, Ep.y);
        }
      
    }
   fly(){
       this.chain.bodyA = null;
   } 
}