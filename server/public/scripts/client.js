var lifeStory = angular.module('lifeStory', []);

lifeStory.controller('lifeController', function($http) {
    var life = this;


var ski = {name: 'ski', location: 'public/images/skiing.jpg', description: 'A great day to ski.'}
var couple = {name: 'couple', location: 'public/images/couple.jpg', description: 'A lovely couple.'}
var mercury = {name: 'Mercury', location: 'public/images/mercury.jpg', description: 'My old dog Mercury.'}
var twinsgame = {name: 'Twins', location: 'public/images/twinsgame.jpg', description: 'Play ball!'}
var fall = {name: 'Fall', location: 'public/images/fall.jpg', description: 'Nice day for a run.'}
var wild = {name: 'Wild', location: 'public/images/wild.jpg', description: 'Let\'s play hockey.'}

life.photosIn = [ski, couple, mercury, twinsgame, fall, wild];

console.log(life.photosIn);
// function getPhotos(){
});