var greeting;
var time = new Date().getHours();
if (time => 0 && time < 12){
  greeting = "Good morning";
  } 
else if (time => 12 && time < 16) {
  greeting = "Good afternoon";

}
  greeting = "Good evening";
}
document.getElementById("dog").innerHTML = greeting;
function validateForm() {
  var x = document.forms["myForm"]["password"].value;
  var y = document.forms["myForm"]["pasword"].value;
  if (x != y) {
    document.getElementById("demo").innerHTML = "password missmatch !,please try again";
    return false;
  }
}
