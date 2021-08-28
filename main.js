function setup(){
    Canvas=createCanvas(300, 300);
    Canvas.center();
video=createCapture(VIDEO);
video.size(400, 400);
video.hide();
}

function draw(){
    image(video, 0, 0, 300, 300);
    }
    
    function takesnap(){
        save('my_filter_image.png')
    }
    