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

let bounces = 0;

window.addEventListener('keydown',function(e){
        if(e.code == 'ArrowUp'){
            if(celloYV > -1){
                celloYV++;
            }
            else{
                celloYV--;
            }
        }
        if(e.code == 'ArrowDown'){
            if(celloYV > -1){
                celloYV--;
            }
            else{
                celloYV++;
            }
        }
        if(e.code == 'ArrowRight'){
            if(celloXV > -1){
                celloXV++;
            }
            else{
                celloXV--;
            }
        }
        if(e.code == 'ArrowLeft'){
            if(celloXV > -1){
                celloXV--;
            }
            else{
                celloXV++;
            }
        }
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(celloImg,celloX,celloY,celloWidth,celloHeight);
    ctx.fillStyle = 'white';
    ctx.font = "80px Arial";
    ctx.fillText("X Velocity: "+Math.abs(celloXV),20,100);
    ctx.fillText("Y Velocity: "+Math.abs(celloYV),20,200);

    celloX+= celloXV;
    celloY+= celloYV;

    Collision();
    requestAnimationFrame(update);
}

function Collision(){
    if(celloX < 0){
        celloXV = -celloXV;
        bounces++;
    }
    if(celloX + celloWidth > canvas.width){
        celloXV = -celloXV;
        bounces++;
    }
    if(celloY < 0){
        celloYV = -celloYV;
        bounces++;
    }
    if(celloY + celloHeight > canvas.height){
        celloYV = -celloYV;
        bounces++;
    }
}

update();