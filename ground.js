class Ground
{
    constructor(x , y )
    {
        var options = {
            isStatic: true,
            friction: 1.0,
            density:1.0
        }
        
        this.body = Bodies.rectangle(x , y , 3000 , 20 , options);
        this.width = 3000;
        this.height = 20;

        World.add(world , this.body);
    }

    display()
    {
        var pos = this.body.position
        
        push();
        translate(pos.x , pos.y);
        fill("white");
        rectMode(CENTER);
        rect(0 , 0 ,this.width , this.height);
        pop();
    }
}