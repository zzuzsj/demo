/**
 * Created by Administrator on 2016/10/12 0012.
 */
(function () {
    var mp3List=[];
    var target = document.querySelector("#target");
    var mp3box=document.querySelector('#mp3Box');
    var playingMp3;
    var playing=false;
    var list=document.createElement('div');
    target.appendChild(list);
    var listInner=document.createElement('div');
    list.appendChild(listInner);
    var index=0;

    target.addEventListener("dragover", function (e) {
        e.preventDefault();

    });

    target.addEventListener("drop", function (e) {
        e.preventDefault();

        // console.log(e.dataTransfer.files);

        var files = e.dataTransfer.files;
        var reader;


        if (files && files.length) {
            var file = files[0];
            // console.log(file);

            switch (file.type) {
                case "text/plain":
                    reader = new FileReader();
                    reader.onload = function () {
                        target.innerHTML = reader.result;
                    };
                    reader.readAsText(file);
                    break;
                case "image/jpeg":
                    reader = new FileReader();
                    reader.onload = function () {
                        target.innerHTML = "<img src='" + reader.result + "'>";
                    };
                    reader.readAsDataURL(file);
                    break;
                case "audio/mp3":
                    reader = new FileReader();
                    reader.onload = function () {

                        listInner.innerHTML='';
                        var mp3Obj={};
                        mp3Obj.name=file.name;
                        mp3Obj.src=reader.result;
                        playingMp3=mp3Obj.src;
                        mp3box.innerHTML = "<audio controls='controls' autoplay='autoplay' src='"+mp3Obj.src+"'></audio>";
                        mp3List.push(mp3Obj);

                        for (var i=0;i<mp3List.length-1;i++){
                            if(mp3List[i].name==mp3List[mp3List.length-1].name){
                                mp3List.splice(i,1);
                            }
                        }
                        // console.log(mp3List);

                        for (var m=0;m<mp3List.length;m++){
                            (function (n) {
                                playing=true;
                                var box=document.createElement('div');
                                box.className='songBox';
                                box.innerHTML=mp3List[n].name;
                                // if(playing&&playingMp3==mp3List[n].src){
                                //     box.style.background='lime';
                                // }
                                listInner.appendChild(box);
                                box.addEventListener('click',function () {
                                    // playingMp3=mp3List[n].src;
                                    // index=n;
                                    mp3box.innerHTML = "<audio controls='controls' autoplay='autoplay' src='"+mp3List[n].src+"'></audio>";
                                });
                            })(m);
                        }
                        list.appendChild(listInner);

                    };
                    // var boxs=document.querySelector('#listInner').querySelectorAll('.songBox');
                    // console.log(boxs);
                    reader.readAsDataURL(file);
                    break;
                default:
                    console.log(file);
                    break;
            }





        }
    });
})();