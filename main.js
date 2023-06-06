function preload(){

}
function setup(){
    canvas = createCanvas(620 , 420);
    canvas.center();
    object_detector= ml5.objectDetector("cocossd" , modelLoaded);
   document.getElementById("status").innerHTML = "STATUS : Detecting object";
}
function modelLoaded(){
    console.log("model loaded!");
    status = true;
    object_detector.detect(img , gotResult);
}
function gotResult(error , results){
    if(error){
        console.log(error);

    }else{
        console.log(results);
    }
}