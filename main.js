video = "";
status = "";

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
}

function preload(){
    video = createCapture(VIDEO);
    video.hide();
    }
    
    function draw(){
        image(video, 0, 0, 500, 400);
    }
    
    function start(){
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status: Detecting Objects..."
    }
    
    function modelLoaded(){
        console.log("MODEL LOADED!!");
        status = true;
    }