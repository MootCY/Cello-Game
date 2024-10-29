let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext('2d');

let celloX = canvas.width/2;
let celloY = canvas.height/2;
let celloXV = 0;
let celloYV = 0;
let celloWidth = 80;
let celloHeight = 150;

let celloImg = new Image();
celloImg.src="Cello.png";

window.addEventListener('keydown',function(e){
        if(e.code == 'ArrowUp'){
            celloYV++;
        }
        if(e.code == 'ArrowDown'){
            celloYV--;
        }
        if(e.code == 'ArrowRight'){
            celloXV++;
        }
        if(e.code == 'ArrowLeft'){
            celloXV--;
        }
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(celloImg,celloX,celloY,celloWidth,celloHeight);
    ctx.fillStyle = 'black';
    ctx.font = "80px Arial";
    ctx.fillText("X Velocity: "+celloXV,20,canvas.height-20);
    ctx.fillText("Y Velocity: "+celloYV,20,canvas.height-20);

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