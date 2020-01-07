<?php
$data = json_decode(file_get_contents('php://input'));
print(date($data->format));