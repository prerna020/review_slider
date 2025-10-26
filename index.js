const slide = document.getElementById("slide")
let up = document.getElementById("up")
let down = document.getElementById("down")

let x=0;
up.onclick = function(){
    if(x > "-900"){
        x =x-300;
        slide.style.top = x + "px";
    }
}
down.onclick = function(){
    if(x < 0){
        x =x+ 300;
        slide.style.top = x + "px";
    }
}