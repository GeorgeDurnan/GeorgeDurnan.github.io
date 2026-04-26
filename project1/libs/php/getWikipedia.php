<?php
$configs = include('config.php');

$country = urlencode($_REQUEST['country']);

$executionStartTime = microtime(true);
//The media wiki api 
//Search wikipedia for articles with country name, full url, description (200 characters, beginning of article and no html tags) and image (max 500px) 
$url = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=$country&gsrlimit=5&prop=pageimages|extracts|info&inprop=url&pithumbsize=500&exchars=200&exintro=1&explaintext=1&format=json";
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//Requirement for Media wiki
curl_setopt($ch, CURLOPT_USERAGENT, 'Gazetteer App/1.0 (gfjdurnan@gmail.com)');
curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

$decode = json_decode($result, true);
if (!$decode) {
	$output['status']['code'] = "500";
	$output['status']['description'] = "Internal Server Error - No response from Wikipedia API";
	$output['data'] = null;
} else if (!isset($decode["query"])) {
	$output['status']['code'] = "404";
	$output['status']['name'] = "No wikipedia articles";
	$output['status']['description'] = "failure";
} else {
	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['data'] = array_values($decode['query']['pages']);
}

$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";


header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);