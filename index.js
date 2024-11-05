let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext('2d');

let celloX = canvas.width/2;
let celloY = canvas.height/2;
let celloXV = 1;
let celloYV = 1;
let celloWidth = 50;
let celloHeight = 80;
let celloImg = new Image();
celloImg.src="Cello.png";

let bounces = 0;

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(celloImg,celloX,celloY,celloWidth,celloHeight);
    ctx.fillStyle = 'black';
    ctx.font = "80px Arial";
    ctx.fillText("X Velocity: "+Math.abs(celloXV),20,80);
    ctx.fillText("Y Velocity: "+Math.abs(celloYV),20,180);
    ctx.fillText("Bounces: "+bounces,20,280);

    celloX+= celloXV;
    celloY+= celloYV;

    Collision();
    requestAnimationFrame(update);
}

function Collision(){
    if(celloX < 0){
        celloXV = -celloXV;
        bounces++;
        celloWidth++;
        celloHeight++;
        if(celloXV < 0){
            celloXV--;
        }
        else{
            celloXV++;
        }
        if(celloYV < 0){
            celloYV--;
        }
        else{
            celloYV++;
        }
    }
    if(celloX + celloWidth > canvas.width){
        celloXV = -celloXV;
        bounces++;
        celloWidth++;
        celloHeight++;
        if(celloXV < 0){
            celloXV--;
        }
        else{
            celloXV++;
        }
        if(celloYV < 0){
            celloYV--;
        }
        else{
            celloYV++;
        }
    }
    if(celloY < 0){
        celloYV = -celloYV;
        bounces++;
        celloWidth++;
        celloHeight++;
        if(celloYV < 0){
            celloYV--;
        }
        else{
            celloYV++;
        }
        if(celloXV < 0){
            celloXV--;
        }
        else{
            celloXV++;
        }
    }
    if(celloY + celloHeight > canvas.height){
        celloYV = -celloYV;
        bounces++;
        celloWidth++;
        celloHeight++;
        if(celloYV < 0){
            celloYV--;
        }
        else{
            celloYV++;
        }
        if(celloXV < 0){
            celloXV--;
        }
        else{
            celloXV++;
        }
    }
}

update();