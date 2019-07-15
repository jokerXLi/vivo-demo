<?php
$username=$_POST['username'];
$pwd=$_POST['password'];

mysql_connect('localhost','root','root');
mysql_query('use sz1904');

$sql="select * from phone where phonenumber='$username' and password='$pwd'";
$result=mysql_query($sql);
$row=mysql_fetch_assoc($result);
if($row){
    $response=[
        "code"=>200,
        "message"=>'登录成功'
    ];
}
else{
    $response=[
        "code"=>-1,
        "message"=>'密码错误'
    ];
}

echo json_encode($response);
?>