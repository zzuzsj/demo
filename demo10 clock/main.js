/**
 * Created by Administrator on 2016/10/14 0014.
 */
window.zsj=window.zsj||{};
(function () {
    var canvas=document.getElementById('canvas');
    var context=canvas.getContext('2d');


    function createBorder() {
        context.save();
        context.beginPath();
        context.translate(250,250);
        context.fillStyle='#cc22ff';
        context.arc(0,0,215,0,Math.PI*2);
        context.fill();
        context.closePath();
        context.beginPath();
        context.fillStyle='#fcfcfc';
        context.arc(0,0,200,0,Math.PI*2);
        context.fill();
        context.closePath();
        context.restore();
    }

    function createNumber() {
        for (var i=1;i<=12;i++){
            (function (n) {
                var angle=(n/6)*Math.PI;
                var font=new zsj.Draw(0,-150,0,0,0,'black',angle);
                context.save();
                context.translate(250,250);
                font.write(context,n);
                context.restore();
            })(i);
        }
    }

    function createBox() {
        for (var i=1;i<=12;i++){

            (function (n) {
                var angle=(n/6)*Math.PI;
                if (n%3==0){
                    var box=new zsj.Draw(0,-170,0,-200,20,'red',angle);
                    context.save();
                    context.translate(250,250);
                    box.draw(context);
                    context.restore();
                }else{
                    var box=new zsj.Draw(0,-180,0,-200,16,'grey',angle);
                    context.save();
                    context.translate(250,250);
                    box.draw(context);
                    context.restore();
                }
            })(i);
        }
    }

    function createLik() {
        var date=new Date();
        var sec=date.getSeconds();
        var min=date.getMinutes();
        var hour=date.getHours();
        var secAgl=sec/60*Math.PI*2;
        var minAgl=min/60*Math.PI*2;
        var hourAgl=hour/12*Math.PI*2;

        var secLik=new zsj.Draw(0,15,0,-150,5,'black',secAgl);
        var minLik=new zsj.Draw(0,10,0,-110,7,'blue',minAgl);
        var hourLik=new zsj.Draw(0,5,0,-70,9,'grey',hourAgl);

        context.save();
        context.translate(250,250);
        secLik.draw(context);
        context.restore();

        context.save();
        context.translate(250,250);
        minLik.draw(context);
        context.restore();
        context.save();
        context.translate(250,250);
        hourLik.draw(context);
        context.restore();
    }

    function render() {
        context.clearRect(0,0,500,500);
        createBorder();
        createNumber();
        createBox();
        createLik();
        requestAnimationFrame(render);

    }
    
    function init() {
        render();
    }
    
    init();
})();