//Create variables here
var dog, database, foodS, foodStock,dogimg,dogimg1,database;
function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png");
  dogimg1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  update();
	createCanvas(500, 500);
  dog=createSprite(150,150);
  dog.addImage(dogimg);
  dog.scale=0.3;
}


function draw() {  
  background("aqua");
  if(keyWentDown(UP_ARROW))
  {
    DeleteStock(foodS);
    dog.addImage(dogimg1);
    dog.scale=0.3;
  }
  if(keyWentDown(DOWN_ARROW))
  {
    DeleteStock(foodS);
  }

  
  drawSprites();
  textSize(32);
  text("FoodStock="+foodStock,250,100);
}

function update() {
  database.ref("Food").on("value",(data)=>{
    foodStock=data.val();
  })
}
function DeleteStock(){
  database.ref("/").update({Food:foodStock-1});
}
function GiveStock(){
  database.ref("/").update({Food:foodStock+0.5});
}



