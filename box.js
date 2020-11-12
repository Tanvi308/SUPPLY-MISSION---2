// class Box {
//     constructor(x,y,width,height){
//         var options={
//             isStatic:true
//         }
        
//         this.body = Bodies.rectangle(x,y,width,height,options);
//         this.width = width;
//         this.height = height;
//         World.add(world,this.body)
//     }
//     display(){
//         var pos = this.body.position;
//         var angle = this.body.angle;
//         push();
//         translate(pos.x,pos.y);
//         rotate(angle);
//         rectMode(CENTER);
//         fill("red")
//         rect(0,0,this.width,this.height);
//         pop();
//     } 
// }
class Box{
    constructor(x,y,width,height,color) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;

        World.add(world,this.body);
    }

    display() {
        rectMode(CENTER);
        fill(this.color);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}