var ball;
var database,position;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    console.log(database);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var BallPosition = database.ref("Ball/Position");
    BallPosition.on("value",readPosition,showerror);
}

function draw(){
    background("white");

    if(position !== undefined){

    
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();

}

}

function WritePosition(x,y){

    database.ref("Ball/Position").set({
    "x" : position.x + x,
    "y" : position.y + y,
     })
     
   
}

function readPosition(data){
 position = data.val();
 console.log(position.x);
 ball.x = position.x;
 ball.y = position.y;
    
}

function showerror(){
    console.log("Error in reading the DataBase");
    
}
