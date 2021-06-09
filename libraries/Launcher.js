class launcher{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.04
}
this.pointB=pointB;
this.launcher=Constraint.create(options)
World.add(world,this.launcher)
    }

release(){

    this.launcher.bodyA=null
}
    display(){
       if(this.launcher.bodyA){
                    
        strokeWeight(4)
line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}
}