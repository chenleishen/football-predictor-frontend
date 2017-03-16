exports.NavBarController = function($scope, $user) {
  $scope.user = "chenlei";

  setTimeout(function() {
    $scope.$emit('NavBarController');
  }, 0);
};

exports.SayHello = function () {
	console.log('Hello World');
}