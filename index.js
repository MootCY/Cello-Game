let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext('2d');

let celloX = canvas.width/2;
let celloY = canvas.height/2;
let celloXV = 1;
let celloYV = 1;
let celloWidth = 150;
let celloHeight = 200;
let celloImg = new Image();

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
        if(celloXV < 0){
            celloXV--;
        }
        else{
            celloXV++;
        }
    }
    if(celloX + celloWidth > canvas.width){
        celloXV = -celloXV;
        bounces++;
        if(celloXV < 0){
            celloXV--;
        }
        else{
            celloXV++;
        }
    }
    if(celloY < 0){
        celloYV = -celloYV;
        bounces++;
        if(celloYV < 0){
            celloYV--;
        }
        else{
            celloYV++;
        }
    }
    if(celloY + celloHeight > canvas.height){
        celloYV = -celloYV;
        bounces++;
        if(celloYV < 0){
            celloYV--;
        }
        else{
            celloYV++;
        }
    }
}

update();