<?php
$executionStartTime = microtime(true);
$configs = include('config.php');
$weatherApi = $configs["weatherApi"];

$lat = urlencode($_REQUEST['lat']);
$long = urlencode($_REQUEST['long']);

$url = "https://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$long&appid=$weatherApi";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$result = curl_exec($ch);
$decode = json_decode($result, true);

if (!$decode) {
    $output['status']['code'] = "500";
    $output['status']['description'] = "Internal Server Error - No response from Open Weather API";
    $output['data'] = null;
} else if ($decode["cod"] !== 200) {
    $output['status']['code'] = "400";
    $output['status']['name'] = "error";
    $output['status']['description'] = "failure";
    $output['data'] = [$url];
} else {
    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['data'] = $decode;
}
$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

echo json_encode($output);
