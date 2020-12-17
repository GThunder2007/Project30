class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.4,
            'friction':0.4,
            'density':0.5
        }
     this.body  = Bodies.rectangle(x,y,width,height,options)  
     this.width = width;
     this.height = height;
     this.Visiblity = 255;
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 3){
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            translate(pos.x,pos.y);
            rotate(angle);
            strokeWeight(2);
            stroke(0)
            fill("lightpink")
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
           }
        else{
        World.remove(world, this.body);
    }
}




}