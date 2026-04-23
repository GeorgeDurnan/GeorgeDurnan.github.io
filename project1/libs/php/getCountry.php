<?php
$configs = include('config.php');
$cageApi = $configs["cageApi"];

$lat = $_REQUEST['lat'];
$long = $_REQUEST['long'];

$executionStartTime = microtime(true);
$url = "https://api.opencagedata.com/geocode/v1/json?q=$lat%2C+$long&key=$cageApi";

$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

$decode = json_decode($result, true);
if (!$decode) {
	$output['status']['code'] = "500";
	$output['status']['description'] = "Internal Server Error - No response from Open Cage API";
	$output['data'] = null;
} else if (!isset($decode["results"][0]["components"]["country"])) {
	$output['status']['code'] = "400";
	$output['status']['name'] = "bad coordinates";
	$output['status']['description'] = "failure";
} else {
	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
}


$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
$output['data'] = $decode['results'];

header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);

?>