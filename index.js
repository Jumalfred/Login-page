var greeting;
var date = new Date();
alfredJuma();
function alfredJuma(){
var time = date.getHours();
if (time <= 12){
  greeting = "Good morning";
  } 
else if (time <= 16) {
  greeting = "Good afternoon";

}
else if(time<19){
  greeting = "Goog evening"
}
else if(time < 24){
  greeting = "Good night";
}
document.getElementById("dog").innerHTML = greeting;
}
function validateForm() {
  var x = document.forms["myForm"]["password"].value;
  var y = document.forms["myForm"]["pasword"].value;
  if (x != y) {
    document.getElementById("demo").innerHTML = "password missmatch !,please try again";
    return false;
  }
}
   function myFunction(){
      var a = new Date();
      var b = a.getFullYear();
      var c = document.getElementById("date").value[0];
      var d = document.getElementById("date").value[1];
      var e = document.getElementById("date").value[2];
      var f = document.getElementById("date").value[3];
      var m = document.getElementById("fname").value;
      var g = c+d+e+f;
      var age = b-g;
            if(age < 18){
              alert("You are too young to create an account to this site,you should be 18 years and above");
              return false;
            }
            else if(age >=18 ){
              alert(m +",Welcome to this site..")
            }
            
        }
function displayName()
 {
     var z=document.getElementById("usname").value;
     if(z=="" || z == null){
       alert("Please enter your username!");
     }else{
       alert(z +",welcome to this site");
         }
      }
function sign(){
  window.location.replace("sign.html");
}
function login(){
  window.location.replace("login.html");
}