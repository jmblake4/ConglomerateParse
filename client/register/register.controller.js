Conglom.controller('RegisterController', ['$scope', '$http', '$rootScope', '$window', '$cacheFactory',  function($scope, $http, $rootScope, $window, $cacheFactory) {

	$scope.register = function () {
		console.log($scope.user);
		
		var user = new Parse.User();
		user.set("username", $scope.user.username);
		user.set("password", $scope.user.password);
		user.set("email", $scope.user.email);
		
		// other fields can be set just like with Parse.Object
		user.set("somethingelse", "like this!");
		
		user.signUp(null, {
			success: function(user) {
			// Hooray! Let them use the app now.
			alert("success!");
			},
			error: function(user, error) {
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.code + " " + error.message);
			}
		});
		
	}

}]);