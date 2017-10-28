var lifeStory = angular.module('lifeStory', []);

lifeStory.controller('lifeController', function($http) {
    var life = this;


var ski = {name: 'ski', location: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/10341674_10204457927307844_7690682086744830035_n.jpg?oh=a3c78f8951f5796bfea4d8b9af5f047b&oe=5A6C5CF9', description: 'A great day to ski.'}
var couple = {name: 'couple', location: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/18342271_10213705446290039_4368366977028911396_n.jpg?oh=062055e0965429f22b0473c176869291&oe=5A6EA8BE', description: 'A lovely couple.'}
var outdoors = {name: 'Outdoors', location: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/10426139_10202458491085234_4057130085187235382_n.jpg?oh=94a7f789a539900e2dbf667ddcb6dfcc&oe=5A796543', description: 'A nice day to be outside.'}
var twinsgame = {name: 'Twins', location: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/553780_3519276702284_146391418_n.jpg?oh=494c495d545b933be658f29af86bab37&oe=5A6EC030', description: 'Play ball!'}
var snow = {name: 'Fall', location: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/13669680_10206711073597139_8722572349433687400_n.jpg?oh=c0275fcaba19896503d63a0bcf6187e7&oe=5A736B2A', description: 'Winter is my favorite season.'}
var snowboard = {name: 'Wild', location: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/18033247_10158481685065363_2045229412394484744_n.jpg?oh=9c17d6f5184abec74d30499fbe9f51f7&oe=5A74295A', description: 'Snowboarding at Big Sky.'}

life.photosIn = [couple, ski, snowboard, outdoors, twinsgame, snow];

life.increment = function(){
    life.item += 1;
}

console.log(life.photosIn);
// function getPhotos(){
});