/**
 * Created by Administrator on 2016/10/8 0008.
 */
(function () {
    var canvas,context;
    var rec1,rec2,rec3;
    
    function createCanvas() {
        canvas=document.createElement('canvas');
        canvas.width=500;
        canvas.height=500;
        document.body.appendChild(canvas);
        context=canvas.getContext('2d');
    }


    
    function clearCanvas() {
        context.clearRect(0,0,canvas.width,canvas.height);
    }
    
    function Animate() {
        clearCanvas();
        rec2.paint(context,'我是猪');
        rec3.paint(context,'请问你的种类是？');
        rec1.paint(context,'我是人');

        requestAnimationFrame(Animate);
    }

    function createRect1() {
        rec1=new zsj.Rect(100,30);
        rec1.x=100;
        rec1.y=300;
        rec1.color='red';

        document.onmousemove=function (e) {
            if (e.layerX>(rec1.x-(rec1.width/2))&&
                e.layerX<(rec1.x+(rec1.width/2))&&
                e.layerY<(rec1.y+(rec1.height/2))&&
                e.layerY>(rec1.y-(rec1.height/2))
            ){
                rec1.Update=function () {
                    rec1.x=Math.floor(Math.random()*300+50);
                    rec1.y=Math.floor(Math.random()*300+50);
                }
            }
            else{
                rec1.Update=function () {
                }
            }
        };

        rec1.paint(context,'我是人');
    }
    
    function createRect2() {
        rec2=new zsj.Rect(100,30);
        rec2.x=300;
        rec2.y=300;
        rec2.color='green';

        rec2.paint(context,'我是猪');


        rec3=new zsj.Rect(100,30);
        rec3.x=140;
        rec3.y=120;
        rec3.color='white';

        rec3.paint(context,'请问你的种类是？');
    }

    function clickJudge() {
        document.onclick=function (e) {
            if (e.layerX>(rec2.x-(rec2.width/2))&&
                e.layerX<(rec2.x+(rec2.width/2))&&
                e.layerY<(rec2.y+(rec2.height/2))&&
                e.layerY>(rec2.y-(rec2.height/2))
            ){
                alert('恭喜恭喜！');
                alert('你终于承认你是只猪了');
                alert('开心吗？');
            }
            else if (
                e.layerX>(rec1.x-(rec1.width/2))&&
                e.layerX<(rec1.x+(rec1.width/2))&&
                e.layerY<(rec1.y+(rec1.height/2))&&
                e.layerY>(rec1.y-(rec1.height/2))
            ){
                alert('单身20年手速！是在下输了');
            }
        }
    }

    clickJudge();

    
    function init() {
        createCanvas();

        createRect2();
        createRect1();

        Animate();
    }

    init();
})();