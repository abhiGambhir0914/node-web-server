<?php
	function Connect(){
		$dbhost = "148.72.232.173:3306";
		$dbuser = "kashish";
		$dbpass = "kash123#";
		$dbname = "webenner_ak_";
		$conn = new mysqli($dbhost,$dbuser,$dbpass,$dbname) or die ($conn -> connect_error);
		return  $conn;
	}
?>