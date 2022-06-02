function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    
    canvas=createCanvas(550, 500);
    canvas.position(560, 90);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX = "+leftwristX+", rightwristX = "+rightwristX+", difference = "+difference);
    }
}

function draw() {
    background("grey");
    textSize(difference);
    fill("red");
    text("Kashika Shri", 50, 400);
}