/**
 * Created by Administrator on 2016/10/14 0014.
 */
window.zsj=window.zsj||{};
(function () {
    function Draw(x1,y1,x2,y2,width,color,angle) {
        this._x1=x1;
        this._y1=y1;
        this._x2=x2;
        this._y2=y2;
        this._width=width;
        this._color=color;
        this._angle=angle;
    }
    
    var d=Draw.prototype;
    
    d.draw=function (context) {
        context.beginPath();
        context.lineWidth=this._width;
        context.strokeStyle=this._color;
        context.rotate(this._angle);
        context.moveTo(this._x1,this._y1);
        context.lineTo(this._x2,this._y2);
        context.stroke();
        context.closePath();
    };
    d.write=function (context,str) {
        var x=this._y1*Math.sin(-this._angle);
        var y=this._y1*Math.cos(-this._angle);
        context.beginPath();
        context.font='25px Arial';
        context.fillStyle=this._color;
        // context.rotate(this._angle);
        context.fillText(str,x-7,y+7);
        context.closePath();
    };
    
    zsj.Draw=Draw;
})();