// 1. Write a script to greet your website visitor using JS alert
// box.
// solution:
// alert("hello World")


// 2. Write a script to display following message on your web page:
// alert( "Error! Please enter a valid password")

// 3. Write a script to display following message on your web
// page: (Hint : Use line break)
// alert( "Welcome to JS Land... \r\n Happy Coding")

// 4. Write a script to display following messages in sequence:
// alert( "Welcome to JS Land... ")
// alert( "Happy Coding")

// 5. Generate the following message through browser’s
// developer console:




// chapter#2 
// 1. Declare a variable called username

// var username = ""

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

// var myName = "Dua jan muhammed"

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// var message = "Hello World"
// alert(message)

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// var Name = "Dua jan Muhammed"
// var age = "19 years old"
// var profession = "web developer"

// alert(Name)
// alert(age)
// alert(profession)

// 5. Write a script to display the following alert using one JS
// variable:
//  var pizza = "pizza \r\npizz \r\npiz\r\npi\r\np"
// alert(pizza)

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// var email = "Duajan181818@gmail.com"
// var message = "my Email Address is " + email
// alert(message)

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// var book = " a smater way to learn Javascript"
// var message = "I am trying to learn from the book"
// alert( message + book)

// 8. Write a script to display this in browser through JS
// document.write("YAH! I can write HTML content through Javascript")

// 9. Store following string in a variable and show in alert and
// browser through JS
// var string = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(string)


// chapter#3
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box

// var age = 19
// alert("I am" + age+ " years old")

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

// var birthYear = 2001
// document.write("My birth year is " + birthYear )
// document.write(" <br> Data type of my Declared Variable is number")

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var Visitorname = "Dua"
// var ProductTitle = " Laptop"
// var Quantity = 1
// document.write(Visitorname + " orderd " + Quantity + ProductTitle + "on XYZ Clothing store.")

// chapter#4
// 1. Declare 3 variables in one statement.
// var a=23,b="4",howdy="Dua"

// 2. Declare 5 legal & 5 illegal variable names.
// legal 
// var a = ""
// var _a = ""
// var $a = ""
// var d8 = ""
// var myVar = ""

// illegal
// var 8ty = ""
// var date of birth = ""
// var (g) = ""
// var pop.up = ""
// var +apple = ""

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// document.write("Rules for naming JS variables <br><br>")
// document.write( "Variable names can only contain numbers,$ and _.For example: $my_1stVariable<br>")
// document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name<br>")
// document.write(" Variable names are case sensitive<br>")
// document.write("Variable names should not be JS Keywords<br>")

// chapter#5
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var num = 3
// var num2 = 5
// var sum = num+num2
// document.write("Sum of " + num + " and " + num2 + " is " + sum )

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// var num = 3
// var num2 = 5
// var subtract = num-num2
// var divide = num / num2
// var multiplication = num * num2
// document.write("Subtraction of " + num + " and " + num2 + " is " + subtract )
// document.write("<br>divition of " + num + " and " + num2 + " is " + divide)
// document.write("<br>muliplication of " + num + " and " + num2 + " is " + multiplication)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// var num = 5
// document.write("<br> initial Value: " + num)
// var num_incre = ++num
// document.write("<br> Value after increment: " + num_incre )
// var add = num_incre + 7
// document.write("<br> Value after addition: " + add )
// var num_decree = --add
// document.write("<br> Value after decrement: "+ num_decree)
// var num_divide = num_decree%3
// document.write("<br> The Remainder is: " + num_divide)

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// var ticketPrice = 600
// var ticketPrice5 = ticketPrice * 5
// document.write("Total cost to buy 5 tickets is "+ ticketPrice5 +" PKR")

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// var num = 5

// document.write("Table Of 5<br>")
// for (var a = 0; a < 10; a++) {
//     document.write("<tr>");
//     for (var b = 0; b < 10; b++) {
//         document.write("<td>" + (a * b) + "</td>");
//     }
//     document.write("</tr>");
// }

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var tempInFarenheit = 70
// var tempInCelsius = 25

// var F_to_C = (tempInFarenheit - 32) * 5/9
// var C_to_F = (tempInCelsius *9/5) + 32

// document.write(tempInFarenheit+"F is "+F_to_C + "C</br>")
// document.write(tempInCelsius+"C is "+C_to_F + "F")

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables.
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var item1 = 500
// var item2 = 300
// var quantityItem1 = 3
// var quantityItem2 = 4
// var shippingCharges = 200
// var total = (item1*quantityItem1) + (item2*quantityItem2) + shippingCharges
// document.write("The total Cost is " + total +"Rs")


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

//  var totalMarks = 100
//  var obtainedMarks = 80
//  document.write("Total Marks: "+totalMarks+" </br>Obtained marks: "+ obtainedMarks + "</br>" )
//  document.write("Percentage: " + (obtainedMarks/totalMarks)*100+" %")

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var dollar = 10
// var riyals = 25
// var total = (dollar*104.80) + (riyals*28)
// document.write("Total currency in PKR: " + total + "Rs")

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var num = 10
// var result = (num + 5) * 10 / 2
// document.write(result)

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// var currentYear = 2021
// var birthYear = 2001
// document.write("currentYear: "+ currentYear + "</br>birthYear: " + birthYear)
// document.write("</br>Age: " + (currentYear-birthYear) )

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius = 20
// var circumference = 2*3.142*(radius)
// var area = 3.142*(radius)**2
// document.write("Radius of circle: " +radius+ "</br>The circumference is: "+ circumference+ "</br>The Area is: " + area )

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// var snack = "Doritoz"
// var age = 20
// var maxAge = 100
// var AmountPerDay = 5 
// var total = (maxAge-age) * 5
// document.write("You Will need " +total+ " to last you the ripe old age of " + maxAge )

// chapter 6 to 9
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// chapter 9 t0 11
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("Your city?");
// if (city.toLowerCase() === "karachi") {
//     alert("welcome to city of lights")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var Gender = prompt("Your Gender?")
// if (Gender.toLowerCase() ==="male"){
//     alert("welcome Sir!")

// }
// else if (Gender.toLowerCase() ==="female"){
//     alert("welcome Maam!!")

// }
// else {
//     alert ("welcome")
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var color = prompt("color?")
// if (color.toLowerCase() ==="red"){
//     alert("Must Stop!")

// }
// else if (color.toLowerCase() ==="yellow"){
//     alert("Ready to move!!")

// }
// else if (color.toLowerCase() ==="green"){
//     alert("Move now!!")
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

//  var fuel = prompt("Remainig fuel?")
// if (fuel < 0.25 ){
//     alert("Please refill the fuel in your car!")
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  var a = 4;
//  if (++a === 5){
//  alert("given condition for variable a is true");
//  }
//  true
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// not true
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// true
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// true
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// true
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// true

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// var sub1 = +prompt("Enter your Math marks ")
// var sub2 = +prompt("Enter your Science marks ")
// var sub3 = +prompt("Enter your English marks ")
// var total = +prompt("Total marks?")
// var obtainedMarks = (sub1 + sub2 + sub3)
// var percentage =obtainedMarks / total *100
// document.write("Total Marks: " + total + "</br>Marks Obtained: " +  obtainedMarks+ "</br>Percentage: " + percentage + "%")
// if (percentage >= 80) {
//     document.write("</br>Grade: A-one</br>Remarks: Excellent")
// }
// else if (percentage >= 70) {
//     document.write("</br>Grade: A</br>Remarks: Good")
// }
// else if (percentage >= 60) {
//     document.write("</br>Grade: B</br>Remarks: You need to improve")
// }
// else if(percentage < 60) {
//     document.write("</br>Grade: Fail</br>Remarks: Sorry")
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
 
// var secretNumber = 5
// var userGuess = +prompt("Guess a number!!!")
// if(userGuess===secretNumber){
//     alert("you guessed correct")

// }
// else if (userGuess === (++secretNumber)){
//     alert("very close")
// }

// 8.Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var num = +prompt("Enter a number:")
// if (num % 3 == 0){
//     alert("Number is dividible by 3")
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var num = +prompt("Enter a number:")
// if (num % 2 == 0){
//     alert("Number is Even")
// }
// else{
//     alert ("Number is Odd")
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp = +prompt("Enter Temperature")

// if (temp >= 40) {
//         document.write("</br>Too hot Outside")
//     }
//     else if (temp >= 30) {
//         document.write("</br>The Weather today is Normal")
//     }
//     else if (temp >= 20) {
//         document.write("</br>Today’s Weather is cool")
//     }
//     else if(temp >= 10) {
//         document.write("OMG! Today’s weather is so Cool")
//     }

11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
    