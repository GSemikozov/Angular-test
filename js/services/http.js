angular.module('httpServices', [])
				.service('HttpQuery', ['$http', function($http) {

					this.flickrData = function(tagList) {
						var flickrUrl = '//www.flickr.com/services/feeds/photos_public.gne?tags=';
						flickrUrl += tagList.join(',') + '&format=json&jsoncallback=JSON_CALLBACK';
						return $http.jsonp(flickrUrl);
					};

				}]);