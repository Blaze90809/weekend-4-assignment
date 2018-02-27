var lifeStory = angular.module('lifeStory', []);

lifeStory.controller('lifeController', function($http) {
    var life = this;

//Group of photos for the site
life.ski = {name: 'ski', location: '../images/skiing.jpg', description: 'A great day to ski.'}
life.couple = {name: 'couple', location: '../images/couple.jpg', description: 'A lovely couple.'}
life.mercury = {name: 'mercury', location: '../images/mercury.jpg', description: 'My family\'s dog.'}
life.twinsgame = {name: 'Twins', location: '../images/twinsgame.jpg', description: 'Play ball!'}
life.fall = {name: 'Fall', location: '../images/fall.jpg', description: 'A beautiful fall day.'}
life.wild = {name: 'Wild', location: '../images/wild.jpg', description: 'A fun day to watch the Wild.'}
//Object to send.
life.photosIn = [life.couple, life.ski, life.mercury, life.twinsgame, life.fall, life.wild];
//Function to count likes.



life.leaveComment = function(photos){
    var comment = (photos.commentIn);
    var photosAdd = angular.copy(photos);
    var name = (photosAdd.name);
    life.commentToDom = comment;
    console.log(life.commentToDom);
}
// life.pushObject = function(name, sendData){

// }


console.log(life.photosIn);
});