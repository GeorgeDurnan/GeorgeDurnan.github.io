<?php
$configs = include('config.php');
$geonamesUsername = $configs["geonamesUsername"];

$country = urlencode($_REQUEST['country']);

$executionStartTime = microtime(true);

$url = "http://api.geonames.org/wikipediaSearchJSON?q=$country&maxRows=10&username=$geonamesUsername";

$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

$decode = json_decode($result, true);
if (!$decode) {
	$output['status']['code'] = "500";
	$output['status']['description'] = "Internal Server Error - No response from Geonames Wikipedia Endpoint API";
	$output['data'] = null;
} else if (!isset($decode["geonames"][0])) {
	$output['status']['code'] = "400";
	$output['status']['name'] = "bad coordinates";
	$output['status']['description'] = "failure";
} else {
	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['data'] = $decode['geonames'];
}
$output["url"] = $url;

$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";


header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);