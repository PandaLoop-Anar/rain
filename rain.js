//wvimis codi - Rain
var canvas = document.getElementById('canvas');
var cctx = canvas.getContext('2d');

canvas.width = window.innerWidth; 
canvas.height= window.innerHeight;
//canvas.style.border =" 1px solid black";

// main funkcia
var wvima =[];
function main(){
    for(let i=0; i<=800; i++){ //500-is shecviT shesadzlebelia wvetebis raodenobis shecvla
        wvima[i] = new wveti();
    }
    
    init();
}

function init() {
    cctx.clearRect(0,0,canvas.width,canvas.height);
    for(let j=0; j< wvima.length; j++){
    wvima[j].wvimisGanaxleba();
    wvima[j].wvimisDaxatva();   
    };

    requestAnimationFrame(init);
}

function wveti() {
    this.x=Math.random() * canvas.width;
    this.y=(Math.random() * 200) - 90;
    this.height = (Math.random() *7)+5;
    this.speed =(Math.random() * 5)+ 5;
    this.wvimisSigane =Math.random() * 1.1

    this.wvimisGanaxleba = function () {
        this.y +=this.speed;
        if(this.y + this.height >= canvas.height){
            this.y=(Math.random() * 1000) - 90; 
        }
    }

    this.wvimisDaxatva = function () {
        cctx.beginPath();
        cctx.strokeStyle="#99EDF3";//wvimis wvetis peri
        cctx.lineWidth = this.wvimisSigane
        cctx.moveTo(this.x, this.y);
        cctx.lineTo(this.x, this.y + this.height);
        cctx.stroke();
    }
}

main()
