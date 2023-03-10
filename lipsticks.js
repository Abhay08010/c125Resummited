lipsticks_X=0;
lipsticks_Y=0;
function preload(){
    lip_image = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = (results[0].pose.nose.x-30);
    noseY = (results[0].pose.nose.y+7);
    console.log("Nose x = " + lipsticks_X);
    console.log("Nose y = " + lipsticks_Y);
} 
}

function modelLoaded(){
    console.log("Model is Initialized");
}

function draw(){
    image(video, 0, 0, 300, 300);
    
    
    image(lip_image, lipsticks_X, lipsticks_Y, 30, 30);
}

function take_snapshot(){
    save("my_picture.png");
}

function mustache_back(){
    window.location = "index.html";
}