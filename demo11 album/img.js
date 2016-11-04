/**
 * Created by Administrator on 2016/10/21 0021.
 */
(function () {
    window.zsj=window.zsj||{};
    function createImg(Url,x,y,width,height,startIndex) {
        this._x=x;
        this._y=y;
        this._height=height;
        this._width=width;
        this._url=Url;
        this._startIndex=startIndex;
        this._changeX=Math.random()*600-300;
        this._changeY=Math.random()*600-300;
        this._angle=(Math.random()*4-2)*Math.PI;
        this._styleIndex=Math.floor(Math.random()*3);
        this._endIndex=(startIndex/800+1)*800;
    }
    var p=createImg.prototype;
    p.drawImg=function (context,index) {
        // console.log(1);
        var img=new Image();
        img.src=this._url;
            switch (this._styleIndex){
                case 0:
                    if (index-this._startIndex>=0&&index-this._startIndex<=60){
                        context.save();
                        context.translate(this._x-this._changeX,this._y-this._changeY);
                        context.rotate(this._angle*(60+this._startIndex-index)/60);
                        context.drawImage(img,this._changeX,this._changeY,this._width,this._height);
                        context.restore();
                    }else if(index-this._startIndex>60&&index-this._startIndex<this._endIndex){
                        context.save();
                        context.translate(this._x-this._changeX,this._y-this._changeY);
                        context.drawImage(img,this._changeX,this._changeY,this._width,this._height);
                        context.restore();
                    }
                    break;
                case 1:
                    if (index-this._startIndex>=0&&index-this._startIndex<=60){
                        context.save();
                        context.translate(this._x,this._y);
                        context.globalAlpha=(index-this._startIndex)/60;
                        context.drawImage(img,this._changeX*(this._startIndex+60-index)/60,this._changeY*(this._startIndex+60-index)/60,this._width,this._height);
                        context.restore();
                    }else if(index-this._startIndex>60&&index-this._startIndex<this._endIndex){
                        context.save();
                        context.translate(this._x,this._y);
                        context.globalAlpha=(index-this._startIndex)/60;
                        context.drawImage(img,0,0,this._width,this._height);
                        context.restore();
                    }
                    break;
                case 2:
                    if (index-this._startIndex>=0&&index-this._startIndex<=60){
                        context.save();
                        context.translate(this._x-this._width/2,this._y-this._height/2);
                        context.scale(60/((index-this._startIndex)/3+40),60/((index-this._startIndex)/3+40));
                        context.drawImage(img,this._width/2,this._height/2,this._width,this._height);
                        context.restore();
                    }else if(index-this._startIndex>60&&index-this._startIndex<this._endIndex){
                        context.save();
                        context.translate(this._x-this._width/2,this._y-this._height/2);
                        context.drawImage(img,this._width/2,this._height/2,this._width,this._height);
                        context.restore();
                    }
                    break;
                default:
                    break;


        }
    }
    zsj.createImg=createImg;
})();