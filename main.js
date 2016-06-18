/*Main.js
Contains functions showEmployees() and createTable(array)
Pulls a JSON Object from a php file and displays the contents of it in a table
*/

/* function showEmployees()
Gets a JSON Object of type Array from a PHP file.
While processing writes "Please Wait".
Uses Try - Catch.
If an error is caught prints the error message.
If there is no error it creates a table using the Array Data on the Page which called this function.
*/
function showEmployees() {
        document.getElementById("toChange").innerHTML = "Please Wait";
        try {
    		$.getJSON('list.php', function(data) {
                console.log(data);
                	/* data will hold the php array as a javascript object */
        		document.getElementById("toChange").innerHTML = createTable(data);
        	});
	}
	catch(err) {
	    	document.getElementById("toChange").innerHTML = "Error: " + err.message;
	}
}

/*function createTable(array)
Gets Passed an array. Uses this Array to build a table for the Employees DataBase.
Passes through each first dimension of the Array.
Returns the complete html code needed to show the table.
*/
function createTable(data) {
	var result = "<h3>Current Employees</h3>";
    	result += "<table border=1 align=center>";
    	result += "<tr>";
    	$.each(data[0], function(val) {
    			result += "<th>"+val+"</th>";
    	});
    	result += "</tr>";
    	$.each(data, function(key,val) {
    		result += "<tr>";
    		$.each(val, function(n,x) {
    			result += "<td>"+x+"</td>";
    		});
    		result += "</tr>";
    	});
    	result += "</table>";

    	return result;
}