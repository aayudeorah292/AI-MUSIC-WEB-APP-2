song1_status = "";
song2_status = "";
scoreleftwrist = 0;
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
    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();
    fill('red');
    stroke('red');
    if (scoreleftwrist > 0.2) {
        circle(leftwristx,leftwristy,20);
        song1.stop();
        if (song2_status == false) {
            song2.play();
        }
    }
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
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist = " + scoreleftwrist);
     
    }
}