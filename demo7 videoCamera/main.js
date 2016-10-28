/**
 * Created by Administrator on 2016/10/10 0010.
 */
(function () {
    var img;
    var canvas1=document.getElementById('canvas');
    var context1=canvas1.getContext('2d');
    var canvas2=document.getElementById('canvas2');
    var context2=canvas2.getContext('2d');

    var roundX=0;
    var roundY=0;
    var imagedata1;
    var video=document.getElementById('video');
    var camara=document.getElementById('camera');
    var start=document.getElementById('start');
    var cancel=document.getElementById('cancel');
    var id,id2;
    // var targetBitmap = context1.createImageData(100, 100);
    
    // function loadImg() {
    //     img=new Image();
    //     img.src='logo.jpg';
    //     img.style.width=300;
    //     img.style.height=300;
    // }

    function render1() {
        context1.clearRect(0,0,canvas.width,canvas.height);

        // var sourceImageData = context1.getImageData(0, 0, 100, 100);

        context1.save();

        context1.beginPath();
        context1.drawImage(video,0,0,400,250);
        context1.closePath();

        context1.restore();

        // context2.putImageData(targetBitmap, roundX-50, roundY-50);

        id=requestAnimationFrame(render1);


    }

    function render2() {
        context1.clearRect(0,0,canvas.width,canvas.height);
        context1.drawImage(video,0,0,400,250);
        // var sourceImageData = context1.getImageData(0, 0, 100, 100);
        context1.fillStyle='rgba(255,255,255,0.8)';
        context1.fillRect(0,0,400,250);
        context1.save();
        context1.beginPath();
        context1.fillStyle='rgba(255,255,255,1)';
        context1.rect(roundX-50,roundY-50,100,100);
        context1.closePath();
        context1.clip();
        context1.drawImage(video,0,0,400,250);
        context1.restore();



        imagedata1=context1.getImageData(roundX-50,roundY-50,100,100);

        context2.putImageData(imagedata1,0,0,0,0,100,100);

        // context2.putImageData(targetBitmap, roundX-50, roundY-50);

        id2=requestAnimationFrame(render2);
    }

    canvas.onmousedown=function () {
        document.onmousemove=function (e) {
            roundX=e.layerX;
            roundY=e.layerY;
        }
    };
    canvas.onmouseup=function (){
        document.onmousemove='';
    };

    camara.addEventListener('click',function () {
        cancelAnimationFrame(id);
        video.pause();
        render2();
    });
    start.addEventListener('click',function () {
        video.play();
        render1();
    });
    cancel.addEventListener('click',function () {
        cancelAnimationFrame(id2);
        render1();
        video.play();
        imagedata1=context1.getImageData(500,500,100,100);
        context2.putImageData(imagedata1,0,0,0,0,100,100);
        context2.clearRect(0,0,100,100);
    });



    function init() {
        // loadImg();
        render1();
    }

    init();
})();