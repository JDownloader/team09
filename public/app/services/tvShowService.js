

angular.module('filters', []).filter('trustThisUrl', ['$sce', function($sce) {
  return function(val) {
    return $sce.trustAsResourceUrl(val);
  };
}]);



angular.module('cornpub')
  .factory('TVshowService', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/tvshows/season/:id', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  })
  .factory('PreviewService', function ($resource) {
    'use strict';
    return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&q=:mediaName+trailer&key=AIzaSyDnPPr6ygLS7nY2YQ7aaMvk47l2OfFNHZI', {}, {
      get: { method: 'GET', params: {mediaName: '@mediaName'}, skipAuthorization: true}
    });
  })
  .filter('trustThisUrl', ['$sce', function($sce) {
    return function(val) {
      return $sce.trustAsResourceUrl(val);
    };
  }])
  .factory('TVshowServiceEpisodes', function($resource, baseURL){
     return $resource(baseURL + '/tvshows/season/:id/episodes', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  });
