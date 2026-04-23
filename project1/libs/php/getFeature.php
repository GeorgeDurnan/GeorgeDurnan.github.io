<?php
$configs = include('config.php');
$geonamesUsername = $configs["geonamesUsername"];
//By using feature instead of one for each type of feature I allow expandability and only have to use one file
$code = $_REQUEST['code'];
$feature = $_REQUEST['feature'];
$limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 100;
$executionStartTime = microtime(true);
$url = "https://secure.geonames.org/searchJSON?country=$code&q=$feature&maxRows=$limit&username=$geonamesUsername";

$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

$decode = json_decode($result, true);
if (!$decode) {
	$output['status']['code'] = "500";
	$output['status']['description'] = "Internal Server Error - No response from GeoNames search endpoint API";
	$output['data'] = null;
} else if (($decode["totalResultsCount"] == 0)) {
	$output['status']['code'] = "400";
	$output['status']['name'] = "bad feature";
	$output['status']['description'] = "failure";
} else {
	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
}

$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
$output['data'] = $decode['geonames'];

header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);
