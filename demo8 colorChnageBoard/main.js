/**
 * Created by Administrator on 2016/10/11 0011.
 */
window.zsj=window.zsj||{};
(function () {
    

    var pen=new zsj.CreatePen(8,'white');
    var canvas=pen.drawBoard();
    var context=canvas.getContext('2d');
    var x,y;
    var storage=localStorage;
    var store=document.getElementById('store');
    var clear=document.getElementById('clear');
    var imgStorage;
    
    var redIndex=55;
    var greenIndex=55;
    var blueIndex=55;
    var redInput=document.querySelector('#redInput');
    var red=document.getElementById('redNumber');
    var greenInput=document.querySelector('#greenInput');
    var green=document.getElementById('greenNumber');
    var blueInput=document.querySelector('#blueInput');
    var blue=document.getElementById('blueNumber');
    var bgColor;
    
    redInput.addEventListener('mousedown',function () {
        this.onmousemove=function () {
            redIndex=redInput.value;
            red.value=redIndex;
            bgColor=redIndex+','+greenIndex+','+blueIndex
            canvas.style.background='rgba('+bgColor+',1)';
        }
    });
    greenInput.addEventListener('mousedown',function () {
        this.onmousemove=function () {
            greenIndex=greenInput.value;
            green.value=greenIndex;
            bgColor=redIndex+','+greenIndex+','+blueIndex
            canvas.style.background='rgba('+bgColor+',1)';

        }
    });
    blueInput.addEventListener('mousedown',function () {
        this.onmousemove=function () {
            blueIndex=blueInput.value;
            blue.value=blueIndex;
            bgColor=redIndex+','+greenIndex+','+blueIndex
            canvas.style.background='rgba('+bgColor+',1)';
        }
    });
    
    canvas.style.background='rgba('+bgColor+',1)';


    canvas.onmousedown=function (e) {
        context.beginPath();
        context.moveTo(e.layerX,e.layerY);
        document.onmousemove=function (e) {
            x=e.layerX;
            y=e.layerY;

            pen.paint(context,x,y);
        };
        context.closePath();
    };

    canvas.onmouseup=function () {
        document.onmousemove='';
    };
    
    store.onclick=function () {
        imgStorage=canvas.toDataURL('image/png');
        storage.setItem('imgdata',imgStorage);
        storage.setItem('bgColor',bgColor);
    };

    clear.onclick=function () {
        context.clearRect(0,0,500,500);
    };

    function loadImg() {
        bgColor=storage.getItem('bgColor');
        canvas.style.background='rgba('+bgColor+',1)';
        imgStorage=storage.getItem('imgdata');
        var img=new Image();
        img.src=imgStorage;
        img.onload=function () {
            context.drawImage(img,0,0);
        }
    }

    // function render() {
    //     context.clearRect(0,0,500,500);
    //     // canvas=pen.drawBoard();
    //     requestAnimationFrame(render);
    // }

    function init() {
        loadImg();
        // render();
    }
    
    init();

    // function init() {
    //     render();
    //
    // }
    // init();
})();