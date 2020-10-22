<?php
header('Content-Type: application/json');

 
date_default_timezone_set('America/Mexico_City');

$response = array('status' => "FAIL", 'msj' => "No se ha realizado ninguna acción");


$users = array('Paul' => "abc123",
			  'Selena' => "123abc",
			  'Daniel' => "abcdefg",
			  'Yadira' => "123456",
			  'Francisco' => "mopqrs",
			  'Jose' => "srqpom");
			  
$username = "";
if(isset($_REQUEST['username']) && $_REQUEST['username'] != ""){
    $username = $_REQUEST['username'];
}

$password = "";
if(isset($_REQUEST['password']) && $_REQUEST['password'] != ""){
	$password = $_REQUEST['password'];
}

$role = "";
if(isset($_REQUEST['role']) && $_REQUEST['role'] != ""){
	$role = $_REQUEST['role'];
}

if($username == ""){
	$response["msj"]    = "Debe indicar el username";
	echo json_encode($response);
	return false;
}
if($password == ""){
	$response["msj"]    = "Debe indicar el password";
	echo json_encode($response);
	return false;
}

/*
if($role == ""){
	$response["msj"]    = "Debe indicar un rol";
	echo json_encode($response);
	return false;
}*/



function selectAllByUsernamePassword($username,$users,$pass) {		
		
		if(array_key_exists($username,$users)){
			if ($users[$username] == $pass) {			
				return true;
			} else {
				return false;
			}
		}
	}

if(selectAllByUsernamePassword($username,$users,$password)){
	$response["status"] = "SUCCESS";
	$response["msj"]    = "Usuario encontrado, bienvenido";	
	
}else{
	$response["status"] = "FAIL";
	$response["msj"]    = "Usuario no encontrado, vuelve a intentar";
	
}

echo json_encode($response);
?>