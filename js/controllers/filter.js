angular.module('filterCtrls', ['httpServices'])
				.controller('FilterCtrl', ['HttpQuery', '$scope', function(httpQuery, $scope) {
					$scope.tags = [];

					$scope.tagsFormatted = function() {
						return _.pluck($scope.tags, 'text').join(',');
					};

				}]);
