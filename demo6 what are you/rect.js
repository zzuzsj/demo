/**
 * Created by Administrator on 2016/10/8 0008.
 */
window.zsj=window.zsj||{};
(function () {
    function Rect(width,height) {
        this._width=width;
        this._height=height;
        zsj.GameShape.call(this);
    }

    var r=Rect.prototype=new zsj.GameShape();

    Object.defineProperties(r,{
        width:{
            set:function (value) {
                this._width=value;
            },
            get:function () {
                return this._width;
            }
        },
        height:{
            set:function (value) {
                this._height=value;
            },
            get:function () {
                return this._height;
            }
        }
    });

    r.Draw=function (context) {
        context.beginPath();
        context.fillRect(-this.width/2,-this.height/2,this.width,this.height);
        context.closePath();
    };
    r.Write=function (context,word) {
        context.beginPath();
        context.fillStyle='#000';
        context.font='25px Arial';
        context.fillText(word,-this.width/2+15,-this.height/2+23);
        context.closePath();
        
    };
    // r.Update=function () {
    //     this.x++;
    // }
        

    zsj.Rect=Rect;
})();