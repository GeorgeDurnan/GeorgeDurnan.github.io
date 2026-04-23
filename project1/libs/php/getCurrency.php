<?php
$executionStartTime = microtime(true);
$configs = include('config.php');
$currencyApi = $configs["currencyApi"];

$oxr_url = "https://openexchangerates.org/api/latest.json?app_id=$currencyApi";

$ch = curl_init($oxr_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$result = curl_exec($ch);
$decode = json_decode($result, true);

if (!$decode) {
    $output['status']['code'] = "500";
    $output['status']['description'] = "Internal Server Error - No response from Open Exchange Rates API";
    $output['data'] = null;
} else if (isset($decode["error"])) {
    $output['status']['code'] = "400";
    $output['status']['name'] = "error";
    $output['status']['description'] = "failure";
    $output['data'] = [];
} else {
    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['data'] = $decode['rates'];
}
$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

echo json_encode($output);
