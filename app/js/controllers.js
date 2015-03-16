'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('phones/phones.json').success(function(data) {
            $scope.phones = data;
        });
        $scope.orderProp = 'age';
    }
]);


//https://github.com/nervgh/angular-file-upload
angular
    .module('app', ['angularFileUpload'])
    .controller('AppController', function($scope, FileUploader) {
        $scope.uploader = new FileUploader({
            url: 'http://192.168.7.112/merchant/merchant/haier_retails/ninjauploadfile'
        });
        console.log($scope.uploader);
        // var url = 'http://localhost/merchant/merchant/haier_retails/ninjauploadfile';
        // $scope.uploader.url = url;
        // $scope.uploader.alias = 'trackdata';
        $scope.ninjaupload = function(uploadingfile) {
            console.log("uploadingfile is a file ");
            console.log("12312");
            var item = {
                url: '/',
                alias: 'file',
                headers: {},
                formData: [],
                file: x.image, // https://developer.mozilla.org/en-US/docs/Web/API/FormData,
                isUploaded: false,
                uploader: $scope.uploader
            };
            $scope.uploader.queue.push(item);
            $scope.uploader.clearQueue();
            $scope.uploader.addToQueue(uploadingfile);
            $scope.uploader.uploadAll();
        };
    });


//https://github.com/danialfarid/ng-file-upload
/*var app = angular.module('fileUpload', ['angularFileUpload']);
  app.controller('MyCtrl', ['$scope', '$upload', function($scope, $upload) {
  $scope.$watch('files', function() {
  $scope.upload($scope.files);
  });

  $scope.upload = function(files) {
  if (files && files.length) {
  for (var i = 0; i < files.length; i++) {
  var file = files[i];
  $upload.upload({
url: 'http://192.168.7.112/merchant/merchant/haier_retails/ninjauploadfile',
fields: {
'username': $scope.username
},
file: file
}).progress(function(evt) {
var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
}).success(function(data, status, headers, config) {
console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
});
}
}
};
}]);*/
