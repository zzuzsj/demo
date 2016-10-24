/**
 * Created by Administrator on 2016/8/23 0023.
 */
(function(){
    var bg=document.getElementById('bg');
    bg.style.overflow='hidden';
    function createBall() {
        var ball=document.createElement('div');
        ball.style.width='10px';
        ball.style.height='10px';
        ball.style.borderRadius='100%';
        // ball.style.transformOrigin='300px 300px';
        ball.style.background=R._color;
        ball.style.position='absolute';
        bg.appendChild(ball);
        return ball;
    }
    
    for(var i=0;i<200;i++){
        var X=Math.round(Math.random()*40)-20;
        var Y=Math.round(Math.random()*40)-20;
        var R=new rndBall(X,Y);
        // console.log(X);
        // console.log(R._speedX);
        R.moveRnd(createBall());
    }
})();