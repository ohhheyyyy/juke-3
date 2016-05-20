'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function ($stateProvider) {
  $stateProvider.state('albumsList', {
    url: '/albums/',
    templateUrl: '../albums.html',
    controller: 'AlbumsCtrl'
  });
  $stateProvider.state('artistsList', {
    url: '/artists/:id',
    templateUrl: '../artists.html',
    controller: 'ArtistsCtrl'
  });
  $stateProvider.state('albumList',{
    url:'/albums/:id',
    templateUrl: '../album.html',
    controller: 'AlbumCtrl'
  })
});
