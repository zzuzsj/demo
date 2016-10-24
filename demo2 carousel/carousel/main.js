/**
 * Created by Administrator on 2016/9/21 0021.
 */
(function () {
    
    var container=document.getElementById('carousel');
    var currentFace=0;
    var targetFace=1;
    var index=0;

    
    //用函数创建小分块组成的轮播面
    function createFace(imgUrl,className_z,rotateAngel){
        
        for (var i=0;i<20;i++){

            var containerPiece=document.createElement('div');
            containerPiece.style.transition='all 1.5s '+i/20+'s linear';
            containerPiece.className='containerPiece';
            container.appendChild(containerPiece);

            var facePiece=document.createElement('div');
            containerPiece.appendChild(facePiece);

            containerPiece.style.top=0;
            containerPiece.style.left=50*i+'px';

            facePiece.style.background=imgUrl+' '+-50*i+'px 0';
            facePiece.className='piece '+className_z+' piece'+i
            facePiece.style.transform='rotateX('+rotateAngel+') translateZ(300px)';
        }
    }


    //创建轮播面
    createFace('url(31.jpg)','face1','0deg');
    createFace('url(38.jpg)','face2','90deg');
    createFace('url(39.jpg)','face3','180deg');
    createFace('url(44.jpg)','face4','270deg');


    //创造轮播效果
    var timeId=setInterval(function () {
        index++;
        var changeAngel=(targetFace-currentFace)*90;
        currentFace=targetFace;
        targetFace++;
        if(targetFace>=4){
            targetFace=0;
        }

        console.log(currentFace);
        console.log(targetFace);
        console.log(index);


        var cpArray=document.getElementsByClassName('containerPiece');
        for (var i=0;i<cpArray.length;i++){
            (function (n) {
                cpArray[n].style.transform='rotateX('+(-index*90)+'deg)';
            })(i);

        }
    },5000)
    
    
})();