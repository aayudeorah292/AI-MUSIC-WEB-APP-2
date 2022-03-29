song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristy=0;
rightwristx=0;
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("song2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotresult);
}
function draw(){
    image(video,0,0,600,500);
}
function modelLoaded(){
    console.log('posenet is Initialise');
}
function gotresult(results){
    if (results.length>0) {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;   
    }
}