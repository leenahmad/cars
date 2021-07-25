

alert("must your age be +18 to drive a car")

var age = parseInt(prompt('Enter your age'));



function ShowMessage(firstName)
{
    function SayHello() {
        alert("Hello " + firstName);
    }

    return SayHello();
}


var name = prompt("what is your name")

ShowMessage(name);

var b =  parseInt(prompt('Enter current year'));
var c = parseInt(prompt('Enter your birth year'));

function yourAge(){
  var a = b - c; 

  return a;

}
 
 var result = parseInt(yourAge())
  alert(result);
