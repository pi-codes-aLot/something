class STONE{
    constructor(x, y){
        var options={
            'density': 0.3

        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);

    }
     display(){
         var p = this.body.position;
         image(this.image, p.x, p.y, 30, 30);     
     }
    }