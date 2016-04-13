'use strict';
app.controller('loginCtrl',function($scope, loginService){
	$scope.message = '';
	$scope.login=function(userinfo){
		loginService.loginUser(userinfo,$scope);
	}
})
