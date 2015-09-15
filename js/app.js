angular.module('flickrApp', [ 'ui.router', 'ui.bootstrap', 'ngTagsInput', '720kb.datepicker',
											'httpServices',
											'navigationCtrls', 'filterCtrls', 'pictureCtrls',
											'navigationDirectives', 'loadingDirectives' ])
				.controller('MainCtrl', function($rootScope, $scope) {})
				.controller('ModalInstanceCtrl', function ($scope, $modalInstance, pic) {
					$scope.pic = pic;
				})
				.config(function($stateProvider, $urlRouterProvider) {
					$urlRouterProvider.otherwise("/");
					$stateProvider
						.state('filter', {
							url: "/",
							views: {
				                "mainView": {
				                    templateUrl: "html/filter.html",
				                    controller: "FilterCtrl"
				                }
				            }
						})
						.state('result', {
							url: "/result?tags",
							views: {
				                "mainView": {
				                    templateUrl: "html/pictures.html",
				                    controller: "PictureCtrl"
				                }
				            }
						});
				});
