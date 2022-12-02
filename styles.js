function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "mtc" && password == "mtc2022"){
    window.location="dashboard-1.html"; 
return false;
}

}