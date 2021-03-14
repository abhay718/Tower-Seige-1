class Block{

constructor(x,y){

var options = {

    restitution:1,
   // Visibility:255,
  //  mass:100,
  //  isStatic:true,
    friction:1.5,
    //frictionAir: 0.1,
}


this.body = Bodies.rectangle(x,y,30,40,options);
this.width = 30;
this.height = 40;
//this.Visibility = this.Visibility


World.add(world,this.body);

}

display(){

    //var pos = this.body.position;
    console.log(this.body.speed);
    var anglei = this.body.angle;


 if(this.body.speed >= 5){
    World.remove(world,this.body);
   // this.Visibility = this.Visibility-5;
   // fill(mouseY,mouseX,mouseY)
   
   // tint(255,this.Visibility);
   
   // rect(pos.x,pos.y,30,40);


}
 else{
    

  push()
    
   

    translate(this.body.position.x,this.body.position.y);
    
    rotate(anglei*2)


     fill(mouseY,mouseX,mouseY);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);



 pop()  
}












}




}