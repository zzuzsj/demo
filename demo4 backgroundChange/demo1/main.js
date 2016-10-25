/**
 * Created by Administrator on 2016/9/12 0012.
 */
(function () {
    var redIndex=55;
    var greenIndex=55;
    var blueIndex=55;
    var redInput=document.querySelector('#redInput');
    var red=document.getElementById('redNumber');
    var greenInput=document.querySelector('#greenInput');
    var green=document.getElementById('greenNumber');
    var blueInput=document.querySelector('#blueInput');
    var blue=document.getElementById('blueNumber');
    var number=0;
    // function changeColor(target,color) {
    //
    //     target.addEventListener('mousedown',function () {
    //         this.onmousemove=function () {
    //             var number=target.value;
    //             color.value=number;
    //             // console.log(redIndex);
    //             // box.style.background='rgba('+number+','+greenIndex+','+blueIndex+',1)';
    //
    //         }
    //     });
    //     console.log(number);
    //     return number;
    // }

    redInput.addEventListener('mousedown',function () {
        this.onmousemove=function () {
            redIndex=redInput.value;
            red.value=redIndex;
            // console.log(redIndex);
            box.style.background='rgba('+redIndex+','+greenIndex+','+blueIndex+',1)';
        }
    });
    greenInput.addEventListener('mousedown',function () {
        this.onmousemove=function () {
            greenIndex=greenInput.value;
            green.value=greenIndex;
            // console.log(greenIndex);
            box.style.background='rgba('+redIndex+','+greenIndex+','+blueIndex+',1)';

        }
    });
    blueInput.addEventListener('mousedown',function () {
        this.onmousemove=function () {
            blueIndex=blueInput.value;
            blue.value=blueIndex;
            // console.log(blueIndex);
            box.style.background='rgba('+redIndex+','+greenIndex+','+blueIndex+',1)';

        }
    });

       // console.log(redIndex,greenIndex,blueIndex);
    var box=document.getElementById('box');
    box.style.width='400px';
    box.style.height='400px';
    // box.style.background='rgba('+changeColor(redInput,red)+','+changeColor(greenInput,green)+','+changeColor(blueInput,blue)+',1)';


})();