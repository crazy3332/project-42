class drops {
    constructor(x,y){
        var options = {
            friction: 0.5,
            isStatic: false,
            restitution: 0.2
        }
        this.rain = Bodies.circle(x,y,5,options);
        World.add(world,this.rain);
    }
    
    update(){
        if(this.rain.position.y > 700) {
            Matter.Body.setPosition(this.rain, {x: random(0,400), y: random(0,400)});
            console.log(this.rain.position);
        }
    }

    display(){
        var pos = this.rain.position;
        ellipse(pos.x,pos.y,5,5);
    }
}