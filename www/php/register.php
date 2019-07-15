<?php
// sleep(1);
$username=$_POST['username'];
$password=$_POST['password'];

mysql_connect('localhost','root','root');
mysql_query('use sz1904');

$sql1="select * from user where unsername='$username'";
$result=mysql_query($sql1);
$row=mysql_fetch_assoc($result);
if($row){
    $response=[
        "code"=>-1,
        "message"=>"用户名已存在"
    ];
    echo json_encode($response);
    exit;
}
$sql2="insert into user(unsername,password) values('$username','$password')";
mysql_query($sql2);
$num=mysql_affected_rows();
if($num>0){
    $response=[
        "code"=>200,
        "message"=>"注册成功"
    ];
}
else{
    $response=[
        "code"=>-2,
        "message"=>"网络异常，请稍后重试"
    ];
}

echo json_encode($response);
?>