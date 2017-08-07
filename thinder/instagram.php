<?php
    header("Access-Control-Allow-Origin: *");
    $username=$_GET['username'];
    $response=file_get_contents('https://www.instagram.com/'.$username.'/media');
    echo($response);
?>