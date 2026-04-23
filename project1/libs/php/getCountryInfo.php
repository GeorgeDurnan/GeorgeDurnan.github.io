<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);
$executionStartTime = microtime(true);

$country = rawurlencode($_REQUEST['country']);

$url = "https://restcountries.com/v3.1/alpha/$country";
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

$decode = json_decode($result, true);
if (!$decode) {
    $output['status']['code'] = "500";
    $output['status']['description'] = "Internal Server Error - No response from rest countries API";
    $output['data'] = null;
} else if (isset($decode["status"])) {
    $output['status']['code'] = "400";
    $output['status']['name'] = "error";
    $output['status']['description'] = "failure";
    $output['data'] = null;
} else {
    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['data'] = $decode[0];
}
$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";


header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);
