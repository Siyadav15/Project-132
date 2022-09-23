status="";
function preload(){
   image=loadImage("Fruit-basket.png"); 
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    status="Detecting objects";
}
function modelLoaded(){
    status=true;
    objectDetector.detect(video, gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}