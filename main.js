function preload(){

}

function setup(){
    canvas= createCanvas(800, 500);
    canvas.position(450, 250);
    video= createCapture(VIDEO);
    video.hide()
}

function draw(){
    stroke(0,100,0);
    circle(10,50,70);
    image(video, 0, 0, 600, 480);
   
}
    
