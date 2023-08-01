<?php
$jsonFile = __DIR__ .'/data.json';
$jsonData = file_get_contents($jsonFile);
$data = json_decode($jsonData, true);

// Get the first entry from the data array
$firstPerson = $data['data'][0];
echo json_encode($firstPerson);
?>
