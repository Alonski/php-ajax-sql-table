<?php
// Declare MySQL Variables.
header('Content-Type: application/javascript;');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Pangea";

// Create connection.
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection.
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Choose SQL Query -> Select All Rows from Employee Table Only if the Employee is currently Employed.
//$sql = "SELECT * FROM `employee` WHERE `Start_Date` <= NOW() AND `End_Date` >= NOW()";
$sql = "SELECT * FROM `employee` WHERE `Start_Date` <= NOW() AND `End_Date` >= NOW()";
// Get MySQL result using our SQL Query.
$result = mysqli_query($conn,$sql);

/* function returnEmployees
Gets a MySQL result. 
Checks to see if the Result contains data.
Inputs all Rows from the Result into an array $rows.
Returns $rows.
*/
function returnEmployees($result) {
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$rows[]=$row;
		}
		return $rows;
	} else {
		return null;
	}
}
// $arr contains the array with the employee information.
$arr = returnEmployees($result);
// Echos $arr array as a json object.
echo json_encode($arr);
// Closes MySQL connection.
mysqli_close($conn);
?>