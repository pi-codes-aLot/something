class MANGO{
    constructor(x, y){
        var options={
            'isStatic': true,
            'restitution': 0,
            'friction': 1,
        }
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.image = loadImage("mango.png")
        World.add(world, this.body);
    }
    display(){
        var s = this.body.position
        imageMode(CENTER);
        image(this.image, s.x, s.y, 40, 40);
    }
}