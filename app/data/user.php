<?php

	$user = json_decode(file_get_contents('php://input'));
	if($user->email =="shiva@gmail.com" && $user->password=="1234")
	print_r("success");
	else print_r("Login failed");
?>