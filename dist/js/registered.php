<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $conn = mysqli_connect('localhost','root','root','user');
    $sql = "SELECT * FROM `info` WHERE `username`= '$username'";
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_assoc($result);
    if($data){
        $arr = array('code'=>0,'mag'=>'用户已被注册');
    }else{
        $sql = "INSERT INTO `info` (`username`,`password`) VALUES ('$username','$password')";
        $result = mysqli_query($conn,$sql);
        if($result){
            $arr = array('code'=> 1,'data'=> array('username'=>$username));

        }else{
            $arr = array('code'=> 0,'mag'=>'服务器出错请稍后');

        }
    }

    echo json_encode($arr);
    


?>