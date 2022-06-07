s1 = "";
s2 = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
function preload(
    s1 = loadSound("Disco theek.m4a");
    s2 = loadSound("Funk brigade.m4a");
)
function setup(){
    canvas = createCanvas(600,500)
    canvas.center();
    video = createCapture(600,500)
    video.hide();
    poseNet = ml5.poseNet(video, modaloaded);
    poseNet.on('pose', gotPoses);
}
function modaloaded(){
    console.log('poseNet is imitialized'); 
}
function draw(){
    image(video,0,0,600,500);
}
function gotPoses(results){
if (results.length > 0){
    console.log(results);
    leftwristx = results[0].pose.leftwrist.x;
    leftwristy = results[0].pose.leftwrist.y
    console.log ("leftwristx = " + leftwristx +"leftWristy"+ leftwristy);
    rightwristx = results[0].pose.rightwrist.x;
    rightwristy = results[0].pose.rightwrist.y
    console.log ("rightwristy = " + rightwristx +"rightWristy"+ rightwristy);  
}
}