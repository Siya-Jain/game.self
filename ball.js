class Ball{
    constructor(x,y,radius){
        var opt={
            restitution:0.5,
            friction:0.5,
            density:0.2
        }
        this.body=Bodies.circle(x,y,radius,opt);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        for(var i=0;i<10;i++){
         fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        }
    }
}