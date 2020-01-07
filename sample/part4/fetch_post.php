<?php
$format = $_POST['format'] ?: 'Y/m/d H:i:s';
print(date($format));