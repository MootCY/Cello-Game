let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext('2d');

let celloX = canvas.width/2;
let celloY = canvas.height/2;
let celloXV = Math.floor(Math.random()*6)+1;
let celloYV = Math.floor(Math.random()*6)+1;
let celloWidth = 80;
let celloHeight = 150;

let celloImg = new Image();
celloImg.src="Cello.png";

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(celloImg,celloX,celloY,celloWidth,celloHeight);

    celloX+= celloXV;
    celloY+= celloYV;

    Collision();
    requestAnimationFrame(update);
}

function Collision(){
    if(celloX < 0){
        celloXV = -celloXV;
    }
    if(celloX + celloWidth > canvas.width){
        celloXV = -celloXV;
    }
    if(celloY < 0){
        celloYV = -celloYV;
    }
    if(celloY + celloHeight > canvas.height){
        celloYV = -celloYV;
    }
}

update();