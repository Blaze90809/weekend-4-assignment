var lifeStory = angular.module('lifeStory', []);

lifeStory.controller('lifeController', function ($http) {
    var life = this;

    life.pictures = [];

    life.getPhotos = function () {
        $http.get('/pictures').then(function (response) {
            life.pictures = response.data;
        }).catch(function (error) {
            console.log('error', error)
        })

    }
    life.getPhotos();


    life.leaveComment = function (photos) {
        var comment = (photos.commentIn);
        var photosAdd = angular.copy(photos);
        var name = (photosAdd.name);
        life.commentToDom = comment;
        console.log(life.commentToDom);
    }


});