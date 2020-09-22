class Bob{
    constructor(x, y,radius){
        var options={
            isStatic:false,
            restitution:0.9,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius =radius;
        this.bobDiametre= this.radius*2
        
        World.add(world, this.body);

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red")
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}