'use strict';

app.factory('loginService',function($http,$timeout){
	return{
		loginUser:function(user,message){
			var $promise = $http.post('data/user.php',user);
			$promise.then(function(msg){
				if(msg.data=='success') {
					message.message="Login Success";
					$timeout(function(){ message.message='';}, 3000);
				}
				else{
					message.message="Login Failed";
					$timeout(function(){ message.message='';}, 3000);
				}
			})
		}
	}
})