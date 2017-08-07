<?php
    header("Access-Control-Allow-Origin: *");

    // $x=rand(1,10);
    // echo($x);
    session_start();

    
    // if ($x==5) {
    //     $url='http://api.addfriendsapp.com/v1/users/popular?min_age=13&has_snapchat=true&has_instagram=true&max_age=99';
    // }
    // else
    // {
        $url='http://api.addfriendsapp.com/v1/users?min_age=13&has_snapchat=true&has_instagram=true&max_age=99';
    // }

    if (isset($_SESSION['last']) && !empty($_SESSION['last'])) {
        $last=$_SESSION['last'];
        if (isset($_GET['last']) && !empty($_GET['last'])) {
           $last=$_GET['last'];
           $_SESSION['last']=$last;
        }
        // if ($x!=5) {
            $response=file_get_contents($url.'&last='.$last);
        // }
        // else{
        //     $response=file_get_contents($url);
        // } 
    }
    else
    {
        if (isset($_GET['last']) && !empty($_GET['last'])) {
           $last=$_GET['last'];
           $_SESSION['last']=$last;
           // if ($x!=5) {
               $response=file_get_contents($url.'&last='.$last);
           // }
           // else{
               // $response=file_get_contents($url);
           // } 
        }
        else{
            $response=file_get_contents($url);
        }
    	
    }

    // echo('last = '.$last);
    // echo(' x = '.$x);
    
    echo($response);
?>