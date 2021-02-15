class Slab{
    constructor(x,y,width,height){
        var opt={
        density:0.2,
        isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
    display(){
      var pos=this.body.position;
      fill("blue");
      rect(pos.x,pos.y,this.width,this.height);
    }
}