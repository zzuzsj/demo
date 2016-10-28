/**
 * Created by Administrator on 2016/10/8 0008.
 */
window.zsj=window.zsj||{};
(function () {
    function GameShape(x,y) {
        this._x=x;
        this._y=y;
    }

    var g=GameShape.prototype;

    Object.defineProperties(g,{
        x:{
            set:function (value) {
                this._x=value;
            },
            get:function () {
                return this._x;
            }
        },
        y:{
            set:function (value) {
                this._y=value;
            },
            get:function () {
                return this._y;
            }
        },
        color:{
            set:function (value) {
                this._color=value;
            },
            get:function () {
                return this._color;
            }
        }
    });

    g.paint=function (context,word) {
        this.Update();
        
        
        context.save();
        context.translate(this.x,this.y);
        context.fillStyle=this.color;
        context.fill();
        this.Draw(context);
        if(word){
            this.Write(context,word);
        }
        

        context.restore();
    };
    g.Draw=function (context) {
    };
    g.Update=function () {
    };
    g.Write=function (context,word) {
    };
    
    zsj.GameShape=GameShape;

})();