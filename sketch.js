var dog,database, foodS, foodStock
var hungDog
var hapBoi

function preload(){
  hungDog = loadImage("images/dogImg.png");
  hapBoi = loadImage("images/dogImg1.png");


}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
dog = createSprite(250,300,150,150);
dog.addImage(hungDog);
dog.scale = 0.15; 

foodStock= database.ref('Food');
  foodStock.on("value", readStock);
textSize (20);


}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hapBoi);
      



  }

 drawSprites();
 fill(255,255,255,244);
 stroke("black");
 text ("food remaining:"+foodS, 170,200);
 textSize(30)
 text("Press Up Arrow Key to Feed Drago Milk",120,50);

}

function readStock(data){
foodS = data.val();



}

function writeStock (x){
if(x <= 0){
x = 0;



}else {

x = x-1; 



}
database.ref('/').update({
  Food: x


});

}



