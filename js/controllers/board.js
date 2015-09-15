angular.module('pictureCtrls', ['httpServices', 'ui.router'])
				.controller('PictureCtrl', ['$scope', 'HttpQuery', '$stateParams', '$timeout', '$modal',
												function($scope, httpQuery, $stateParams, $timeout, $modal) {

					$scope.picsList = [];
					$scope.loading = true;
					$scope.validResult = true;

					var tags = $stateParams.tags;
					tags = tags.split(',');
					httpQuery.flickrData(tags)
						.success(function(data) {
							$timeout(function() {
								displayResult(data.items);
							});
						})
						.error(function() {
							displayResult([]);
						});

					function displayResult(pics) {
						$scope.picsList = pics;
						$scope.loading = false;
						if ($scope.picsList.length === 0) $scope.validResult = false;
						$scope.picsList = _.map($scope.picsList, function(pic) {
							if (typeof pic.tags === 'string') pic.tags = pic.tags.split(' ');
							pic.score = Math.floor(Math.random() * 6);
							return pic;
						});
					}

					// MODAL WINDOW
					$scope.open = function (_pic) {

						var modalInstance = $modal.open({
							controller: "ModalInstanceCtrl",
							templateUrl: 'myModalContent.html',
							resolve: {
								pic: function() {
									return _pic;
								}
							}
						});
					};
				}]);