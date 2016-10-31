/**
 * Created by Administrator on 2016/10/11 0011.
 */
window.zsj=window.zsj||{};
(function () {


    function CreateBoard(width,height,boardColor) {
        this._width=width;
        this._height=height;
        this._boardColor=boardColor;
    }
    var p=CreateBoard.prototype;

    p.drawBoard=function () {
        console.log(this._width,this._height);
        var canvas=document.createElement('canvas');
        canvas.width=this._width;
        canvas.height=this._height;
        canvas.style.background=this._boardColor;
        document.body.appendChild(canvas);
        return canvas;
    };

    zsj.CreateBoard=CreateBoard;
})();