/*// 'use strict';

phonecatApp.directive("fileread", [function () {
    return {
        scope: {
            fileread: "=",
            filetype : '=fileType'
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                //console.log("got image file");
                console.log("fileTyps="+scope.filetype);
                reader.onload = function (loadEvent) {
                    if(scope.filetype!='2140'){
                        var img = new Image();
                        img.src = loadEvent.target.result;
                        img.onload = function() {
                            scope.$apply(function () {
                                var canvas = document.createElement('canvas');
                                canvas.width=1024;//img.width;//2048;
                                canvas.height=(img.height/img.width)*1024;//img.height;//(img.height/img.width)*2048;
                                var ctx = canvas.getContext('2d');
                                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
                                //ctx.drawImage(img, 0, 0, img.width, img.height);
                                //
                                scope.fileread = canvas.toDataURL('image/jpeg' , 0.8);
                            });
                        }
                    }else{
                        scope.$apply(function () {
                            //console.log(loadEvent.target);
                            scope.fileread = loadEvent.target.result;
                            //console.log("got image:");
                        });
                    }
                    
                    var img = new Image();
                    img.src = loadEvent.target.result;
                    img.onload = function() {
                        scope.$apply(function () {
                            var canvas = document.createElement('canvas');
                            //canvas.width=img.width;//2048;
                            //canvas.height=img.height;//(img.height/img.width)*2048;
                            ctx = canvas.getContext('2d');
                            //ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
                            ctx.drawImage(img, 0, 0, img.width, img.height);
                            //
                            scope.fileread = canvas.toDataURL('image/jpeg' , 0.8);
                        });
                    }
                    
                };
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    };
}]);

phonecatApp.directive("filereader", [function () {
    return {
        scope: {
            filereader: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.filereader = changeEvent.target.files[0];
                    // or all selected files:
                    // scope.fileread = changeEvent.target.files;
                    //var reader = new FileReader();
                    //scope.filereader = reader.readAsDataURL(changeEvent.target.files[0]);

                });
            });
        }
    };
}]);

phonecatApp.directive('topbar', function(){
    return {
        restrict: 'EA',//E:元素，A：属性，C：样式表，M：注释
        replace: true,
        scope : {
            title : '=barTitle'
        },
        template:
            '<div>'+
            '<div style="background-color:#116CAE;width:100%;height:40px;margin:0;padding:20px 0px 5px 0px; color:#ffffff;text-align: center">'+
            '<a href="#home" style="color:#fff;float:left;"><img src="img/tabbar/tabbar_home@2x.png" style="width:30px;">首页</a>'+
            '<span>{{title}}</span>'+
            '<a href="#apply"><img src="img/tabbar/tabbar_apply_h@2x.png" style="width:30px;float:right;margin-right: 20px;"></a>'+
            '<a href="#status"><img src="img/tabbar/tabbar_shop_h@2x.png" style="width:30px;float:right;margin-right: 20px;"></a>'+
            '<a href="#about"><img src="img/tabbar/tabbar_user_h@2x.png" style="width:30px;float:right;margin-right: 20px;"></a>'+
            '</div></div>'
    }
});

*/