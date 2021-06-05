class Stone {
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':0.9,
            'density':12
};

this.body = Bodies.rectangle(x, y, 50, 50, options);
this.width=130;
this.height=60;
World.add(world, this.body);        
};
display(){
    var stonepos=this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('grey')
    fill('grey')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();


}
}












