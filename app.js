/*
var firstName = "Leen" 

console.log(firstName)

console.log("hello")

var x = '123 ! @ leemjtbd'

console.log(x)
console.log(1+1 , 2>5 , 7<10)

var num = 10
var num2 = 20
var concat = firstName + " " + num
var sum = num + num2 
 console.log(concat , "sum result" , sum)

var isCreater = true 


var z =5

var y = z + 10 

console.log(z , "y=" , y) 

console.log(1==1 , 1=='1', 1=='12')

console.log(1===1, 1==='1')

alert("hi, welcome")

var name = "hala"




alert("hi, welcome " + name)

alert("hi, welcome hala" + name)



var name = prompt("what is your name")

var favCar = prompt("what is your fav car")

document.write('<p>' + favCar + '</p>')

document.write("welcome to javascript")

console.log(1 == 1 && 1>0)
console.log(1 == 9 && 1>0)
console.log(1 == 9 || 1>0)

*/


var name = prompt("what is your name")

alert("welcome to my website  " + name)

var favCar = prompt("what is your fav car, plese choose one of these: tesla, mazda, mercedes")

while(favCar != "tesla" && favCar != "mazda" && favCar != "mercedes"){

   favCar = prompt("what is your fav car, plese choose one of these : tesla,mazda,mercedes")
}

var numberOfPic = prompt("how many times you wish to see it")

while(numberOfPic > 5){

numberOfPic = prompt ("please enter number less than 5")
}

if(favCar == "tesla"){

for(var i =0; i< numberOfPic; i++)


 {document.write("<div>" + "<h4>" + favCar + "</h4>" + "<img src='https://www.teslarati.com/wp-content/uploads/2020/06/tesla-model-s-plaid-3-1024x670.jpg' 'alt=tesla' 'width=300' 'height=200' 'title=tesla'>"  + "</div")}
}
else if(favCar == "mazda"){

  for(var i =0; i< numberOfPic; i++)

  {document.write("<div>" + "<h4>" + favCar + "</h4>" + "<img src='https://images.hgmsites.net/lrg/2021-mazda-mazda6_100770171_l.jpg' 'alt=Mazda' 'width=300' 'height=200' 'title=mazda'>" + "</div>")}

}
else if(favCar == "mercedes"){

  for(var i =0; i< numberOfPic; i++)
 
 {document.write("<div>" + "<h4>" + favCar + "</h4>" + "<img src='https://www.mercedes-benz.com/en/company/_jcr_content/root/slider/sliderchilditems/slideritem/image/MQ3-0-tabletImage-20191025121730/01-mercedes-benz-ag-company-3400x1440.jpeg' 'alt=mercedes' 'width=300' 'height=200' 'title=mercedes'>" + "</div>")}
}
else{
 confirm("Your fav car is not here")


}


/* for loops*/
/*
for(var i =0; i <= 100; i++){

//odd numbers 
if(i%2 != 0)
  {console.log(i)}
}
// even numbers
if(i%2 == 0)
  {console.log(i)}

// print all number
  console.log(i)
}
*/

/*while loop*/

/*var i = 1;

while(i <= 100){
  console.log(i)
  i++
}*/


