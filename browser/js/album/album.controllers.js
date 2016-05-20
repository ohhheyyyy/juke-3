'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, $log, PlayerFactory, AlbumFactory, $stateParams) {
  $log.info($stateParams.id)
    AlbumFactory.fetchById($stateParams.id)
    .then(function (album) {
      $scope.album = album;
      $log.info("ALBUM",$scope.album)

    })
    .catch($log.error);


  // main toggle
  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, $log, $rootScope, $stateParams, PlayerFactory, AlbumFactory) {
 
  $scope.showMe = true;

  $scope.$on('viewSwap', function (event, data) {
    $scope.showMe = (data.name === 'allAlbums');
  });

  // $scope.albumId = $stateParams.id
  $scope.viewOneAlbum = function (album) {
    // $rootScope.$broadcast('viewSwap', { name: 'oneAlbum',  id: $stateParams.id}); // id: album.id });
  };

  AlbumFactory.fetchAll()
  .then(function (albums) {
    $scope.albums = albums;

  })
  .catch($log.error); // $log service can be turned on and off; also, pre-bound

});
