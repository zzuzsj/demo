/**
 * Created by Administrator on 2016/8/23 0023.
 */
(function () {
    function rndBall(speedX,speedY) {
        this._color='#'+Math.ceil((9*Math.random()))+Math.ceil((9*Math.random()))+Math.ceil((9*Math.random()));
        this._speedX=speedX;
        this._speedY=speedY;
    }
    rndBall.prototype.moveRnd=function (target) {
        var X=Math.round(Math.random()*500);
        var Y=Math.round(Math.random()*500);
        var movedX=0;
        var movedY=0;
        var self=this;
        var id=setInterval(function () {
            target.style.left=X+movedX+'px';
            target.style.top=Y+movedY+'px';
            movedX+=self._speedX;
            movedY+=self._speedY;
            // if(Math.abs(movedX)>=300||Math.abs(movedY)>=300){
            //     bg.removeChild(target);
            //     clearInterval(id);
            // }
        },50);
    }
    // rndBall.prototype.moveRnd=function (target) {
    //     var id=setInterval(function () {
    //         target.style.left=300+X+'px';
    //         target.style.top=300+Y+'px';
    //         X+=this._speedX;
    //         Y+=this._speedY;
    //         if(X>=600&&Y>=600){
    //             clearInterval(id);
    //         }
    //     }.bind(this),1000)
    // }
    window.rndBall=rndBall;
})();