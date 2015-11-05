Conglom.controller('DeckController', ['$scope', '$http', '$rootScope', '$window', '$cacheFactory',  function($scope, $http, $rootScope, $window, $cacheFactory) {

	$scope.stream1Hide = false;
	$scope.stream2Hide = false;
	$scope.stream3Hide = false;
	$scope.stream4Hide = false;
	var visibleStreams = 1;	
	$scope.widthClass = 'inner-' + visibleStreams.toString() + '-width';

	var vm = this;

	vm.user = null;
	
	$scope.addStream = function() {
		console.log('adding stream');
		if ( visibleStreams === 4 ) {
			alert('Maximum number of streams already visible!')
		} else {
			visibleStreams++;
			$scope.widthClass = 'inner-' + visibleStreams.toString() + '-width';
			eval('$scope.stream' + visibleStreams.toString() + 'Hide = false;');
		}
	}
	
	$scope.removeStream = function() {
		if ( visibleStreams === 1 ) {
			alert('Only one stream remaining!')
		} else {
			eval('$scope.stream' + visibleStreams.toString() + 'Hide = true;');
			visibleStreams--;
			$scope.widthClass = 'inner-' + visibleStreams.toString() + '-width';
		}
	}
	
	$scope.logout = function() {
		$window.location.href = '#login';
	}

}]);