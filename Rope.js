class Rope{
constructor(a,b){
   var options={bodyA:a,pointB:b,stiffness:1,length:250}
   this.pointB=b;
   this.rope=Constraint.create(options)
   World.add(world,this.rope)
}

display(){
    if(this.rope.bodyA)
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)

}
fly(){
    this.rope.bodyA=null
}
    attach(body){
        this.rope.bodyA=body
    }
}

