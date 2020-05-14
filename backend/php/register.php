<html>

<?php

function process_data($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function save_as_json($data_json)
{
    $F_PATH = "/request/signup_" . time() . ".json";
    echo $F_PATH;
    $json_file = fopen($F_PATH, "x+");
    file_put_contents($json_file, $data_json);
    fclose($json_file);
}

$fname = $lname = $email = $password = "";
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $server_add = process_data($_SERVER["SERVER_ADDR"]);
    $server_name = process_data($_SERVER["SERVER_NAME"]);
    $host = process_data($_SERVER["HTTP_HOST"]);
    $fname =  process_data($_POST["fname"]);
    $lname = process_data($_POST["lname"]);
    $email =  process_data($_POST["email"]);
    $pass = process_data($_POST["pass"]);

    $server_json =  json_encode(array("server_address"=>$server_add,
                                      "server_name"=>$server_name,
                                      "host"=>$host),
                                      JSON_PRETTY_PRINT);

    $data_json = json_encode(array("first_name"=>$fname,
                                   "last_name"=>$lname,
                                   "email"=>$email, 
                                   "pass"=>$pass), 
                                   JSON_PRETTY_PRINT);
    // save_as_json($data_json);
    print("<h2>Server Information JSON</h2>");
    print($server_json);

    print("<h2>Request JSON</h2>");
    print($data_json);
}
?>

</html>