/**
 * Created by Administrator on 2016/10/17 0017.
 */
window.zsj=window.zsj||{};
(function () {
    function xmlToJson(url) {
        var loadXML = function (xmlFile) {
        var xmlDoc;
        if (window.ActiveXObject) {
            xmlDoc = new ActiveXObject('Microsoft.XMLDOM');//IE浏览器
            xmlDoc.async = false;
            xmlDoc.load(xmlFile);
        }
        else if (isFirefox=navigator.userAgent.indexOf("Firefox")>0) { //火狐浏览器
            //else if (document.implementation && document.implementation.createDocument) {//这里主要是对谷歌浏览器进行处理
            xmlDoc = document.implementation.createDocument('', '', null);
            xmlDoc.load(xmlFile);
        }
        else{ //谷歌浏览器
            var xmlhttp = new window.XMLHttpRequest();
            xmlhttp.open("GET",xmlFile,false);
            xmlhttp.send(null);
            if(xmlhttp.readyState == 4){
                xmlDoc = xmlhttp.responseXML.documentElement;
            }
        }

        return xmlDoc;
    };
        var xmlDoc=loadXML(url);
        var xmlJson=[];
        var page=xmlDoc.getElementsByTagName('PAGE');
        for (var i=0;i<page.length;i++){
            var pageObj={};
            var title=page[i].getElementsByTagName('TITLE');
            var width=page[i].getElementsByTagName('WIDTH');
            var height=page[i].getElementsByTagName('HEIGHT');

            var itemArray=[];
            var item=page[i].getElementsByTagName('ITEM');

            for(var m=0;m<item.length;m++){
                var itemObj={};
                for(var n=0;n<item[m].children.length;n++){
                    var Value=item[m].children[n].textContent;
                    var Atr=item[m].children[n].nodeName.toLowerCase();
                    itemObj[Atr]=Value;
                }
                itemArray.push(itemObj);
            }
            pageObj.title=title[0].childNodes[0].data;
            pageObj.width=width[0].childNodes[0].data;
            pageObj.height=height[0].childNodes[0].data;
            pageObj.item=itemArray;
            xmlJson.push(pageObj);
        }
        return xmlJson;
    }
    zsj.xmlToJson=xmlToJson;
})();
