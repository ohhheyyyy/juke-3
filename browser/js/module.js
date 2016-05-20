'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function ($stateProvider) {
  $stateProvider.state('albumsList', {
    url: '/albums/',
    templateUrl: '../albums.html',
    controller: 'AlbumsCtrl'
  });
  $stateProvider.state('artistsList', {
    url: '/artists/',
    templateUrl: '../artists.html',
    controller: 'ArtistsCtrl'
  });
  $stateProvider.state('albumList',{
    url:'/albums/:id',
    templateUrl: '../album.html',
    controller: 'AlbumCtrl'
  });
  $stateProvider.state('artistList',{
    url:'/artists/:id',
    templateUrl: '../artist.html',
    controller: 'ArtistCtrl'
  });
});
