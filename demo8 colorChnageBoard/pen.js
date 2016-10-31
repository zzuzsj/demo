/**
 * Created by Administrator on 2016/10/11 0011.
 */
window.zsj=window.zsj||{};
(function () {
    function CreatePen(lineWidth,color) {
        this._lineWidth=lineWidth;
        this._color=color;
        zsj.CreateBoard.call(this,500,500,'grey');
    }

    var g=CreatePen.prototype=new zsj.CreateBoard();

    g.paint=function (context,x,y) {
        context.lineWidth=this._lineWidth;
        context.strokeStyle=this._color;
        context.lineTo(x,y);
        context.stroke();
    };

    zsj.CreatePen=CreatePen;
})();