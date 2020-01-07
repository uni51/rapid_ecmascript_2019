<?php
$format = $_GET['format'] ?: 'Y/m/d H:i:s';
print(date($format));