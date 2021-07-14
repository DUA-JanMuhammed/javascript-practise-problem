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
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// firstName = prompt("Enter your First Name:")
// lastName = prompt("Enter your Last Name:")
// alert("Welcome "+firstName +" " + lastName)

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// a = prompt("Enter your favourite Mobile Brand:")

// document.write("My Favourite Phone is: " + a )

// document.write("</br>Length of String: " + a.length)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// var Name = "Pakistani"
// document.write("String: " + Name + "</br>")

// for (let i = 0; i < Name.length; i++) {
//     if(Name[i] == "n"){
//         document.write("Index of 'n' : "+i)
//     }

// }

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var a = "Hello World"
// document.write("String: " + a)
// document.write("</br>Last index of 'l' : " + a.lastIndexOf("l"))

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
//  var a = "Pakistani"
//  document.write("Srting: " + a)
//  document.write("</br>Character at index '3' : " + a[3])

// 6. Repeat Q1 using string concat() method.
// firstName = prompt("Enter your First Name:")
// lastName = prompt("Enter your Last Name:")
// alert("Welcome "+firstName.concat(lastName))

// 7.Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// var a = "Hyderabad"
// document.write("City : " + a)
// a = a.replace("Hyder", "Islam");
// document.write("</br>After replacement: " + a)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together."
// message = message.replace(/and/g , "&")
// document.write(message)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var num = "472"
// document.write("Value: " + num + "</br>"+"Type : " + typeof(num))
// var num2 = Number(num)
// document.write("</br>Value: " + num2 + "</br>"+"Type : " +typeof(num2))

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// a = prompt("Enter any String: ")
// document.write("User input: " + a + "</br>Upper case: " + a.toUpperCase())

// 11. Write a program that takes user input. Convert and
// show the input in title case.
//  a = prompt("Enter any String: ")
//  document.write("User input: " + a + "</br>Title case: " + a.charAt(0).toUpperCase() + a.substr(1).toLowerCase())

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var a = 35.36
// a = String(a)
// document.write("Number: " + a)
// a = parseInt(a)
// document.write("</br>Result: " + a)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.

// var userName = prompt("Enter a Username: ")
// for (var i = 0; i < userName.length; i++) {
//     if (userName[i] == "!" || userName[i] == "," || userName[i] == "." || userName[i] == "@" ) {
//         alert("Please Enter a Correct usename!!!")

//     }

// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
// var customerDemand = prompt("Welcome to the pearl Bakery!!! What would you like to have?")
// customerDemand = customerDemand.toLowerCase()
// for (var i=0; i < items.length; i++) {
//     if (items[i] === customerDemand) {
//         alert ("found")
//     }
// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.










// chapter# 26 - 30
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var input = +prompt("Enter a decimal number:")
// document.write("Number: " + input)
// document.write("</br>Round Off Value: " + Math.round(input) )
// document.write("</br>Ceil Value: " + Math.ceil(input))
// document.write("</br>Floor Value: " + Math.floor(input))

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var input = +prompt("Enter a decimal number:")
// document.write("Number: " + input)
// document.write("</br>Round Off Value: " + Math.round(input) )
// document.write("</br>Ceil Value: " + Math.ceil(input))
// document.write("</br>Floor Value: " + Math.floor(input))


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = prompt("Enter a negative number:")
// document.write("The Absolute value of "  + num + " is " + Math.abs(num))

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var dice1 = Math.random()
// var improvedNum = (dice1 * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// var dice2 = Math.random()
// var improvedNum2 = (dice2 * 6) + 1;
// var numberOfStars2 = Math.floor(improvedNum2);

// document.write("Random dice value: " + numberOfStars )
// document.write("</br>Random dice value: " + numberOfStars2 )

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var dice1 = Math.random()
// var improvedNum = (dice1 * 2) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write(numberOfStars)
// if(numberOfStars == 1){
//         alert('Hat')
//     }else{
//         alert('Tail')
//     }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNumber = Math.random()
// var improvedNum = (randomNumber * 100) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("Random Value Between 1 to 100 : " + numberOfStars)

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("Enter Your Weight:")
// weight = parseFloat(weight)
// document.write("The Weight of the user is: "+ weight + " kilograms" )

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var num = 8
// var guessedNumber = prompt("Enter a number between 1 till 10")
// if (num == guessedNumber) {
//     alert("you guessed correct!!")

// }else{
//     alert("Try Again!!!!!!!")
// }

// 1. Write a program that displays current date and time in
// your browser.
// var a = new Date()
// document.write(a)

// Write a program that alerts the current month in words.
// For example December.

// var a = new Date()
// var b = a.getMonth()
// var months = ["January" , "Februaury" , "March" , "April ", "May" , "June" , "July","August", "September" , "October" , "November", "December"]
// document.write("Current Month: " + months[b])

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var a = new Date()
// var day = a.getDay()
// var days = ["Sun","Mon","Tue","wed","Thu" , "Fri","Sat"] 
// document.write("Current Day: " + days[day])

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var a = new Date()
// var day = a.getDay()
// var days = ["Sun","Mon","Tue","wed","Thu" , "Fri","Sat"] 
// if (days[day]== "Sun" ||days[day]== "Sat" ) {
//     alert("It's a fun day!!!!")
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var a = new Date()
// var date = a.getDate()
// if (date <= 15) {
//     alert("First Fifteen Days of the Month")

// }else{
//     alert("Last Fifteen Days of the month")
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var a = new Date()
// document.write("Current Date: " , a)
// var b = a.getTime()
// document.write("</br>Elapsed millisecond since January 1, 1970: " + b)
// document.write("</br>Elapsed minutes since January 1, 1970:  " + (b/1000/60))

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var a = new Date()
// var b = a.getHours()
// if (b>12) {
//     alert("It's PM")

// }else(
//     alert("It's AM")
// )
// console.log(b)
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date ("dec,31 2020")
// document.write(laterDate)

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var date1 = new Date();
// var date2 = new Date("04/14/2021");

// // To calculate the time difference of two dates
// var Difference_In_Time = date1.getTime() - date2.getTime();

// // To calculate the no. of days between two dates
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// //To display the final no. of days (result)
// document.write("Total number of days between dates  <br>"
//                + date1 + "<br> and <br>"
//                + date2 + " is: <br> "
//                + Math.floor(Difference_In_Days));

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var date1 = new Date();
// var date2 = new Date("01/01/2015");

// // To calculate the time difference of two dates
// var Difference_In_Time = date1.getTime() - date2.getTime();

// //To display the final no. of days (result)
// document.write("Total seconds between dates  <br>"
//                + date1 + "<br> and <br>"
//                + date2 + " is: <br> "
//                + Math.floor(Difference_In_Time));

// 11.Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser. 

// var dt = new Date();
// document.write("Current date :" + dt )
// dt.setHours( dt.getHours() - 1 );
// document.write( "</br>1 hour ago, it was " +dt );


// 12.write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var dt = new Date();
// document.write("Current date :" + dt )
// dt.setFullYear( dt.getFullYear() - 100 );
// document.write( "</br>100 years ago, it was " +dt );

// 13.Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var a = +prompt("Enter you Age")
// document.write("Your Age is : " + a)
// var date = new Date()
// var currentDate = date.getFullYear()
// var birthYear = currentDate - a
// document.write("</br> Your Birth Year is : " + birthYear)

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// var Name =  prompt("Enter your Name: ")
// var  Month=  prompt("Enter your Month: ")
// var NoOfUnits =  prompt("Enter your No of Units: ")
// var ChargesPerUnit =  prompt("Enter your Charges Per Unit: ")
// var surcharges = 350
// var netAmount = NoOfUnits*ChargesPerUnit
// var GrossAmount = netAmount + surcharges
// document.write("<h1>" + "K-ELECTRIC BILL" + "</h1>")
// document.write("Customer Name : " + Name)
// document.write("</br>Month : " + Month)
// document.write("</br>No of Units : " + NoOfUnits)
// document.write("</br>Charges Per Unit : " + ChargesPerUnit)
// document.write("</br></br>Net Amount payable(within due date): "+ netAmount)
// document.write("</br>Late Payment surcharges : " + surcharges)
// document.write("</br></br>Gross Amount payable(after due date): "+ GrossAmount)

// chapter#35-38
// 1. Write a function that displays current date & time in your
// browser.
// function tellTime() {
//      var now = new Date();
//     document.write("Now: " + now);
//     }
// tellTime()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name

// var firstName = "Dua"
// var lastName = "Jan Muhammed"
// function fullName() {
//     fullName = firstName.concat(lastName)
//     alert("Welcome " + fullName)
// }

// fullName()

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var num1 = +prompt("Enter 1st number:")
// var num2 = +prompt("Enter 2nd number:")
// function sum() {
//     return (num1 + num2)
// }
// document.write("The sum of both number is : " + sum())

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// var num1 = +prompt("Enter 1st number: ")
// var num2 = +prompt("Enter 2nd number: ")
// var operator = prompt("Enter a Operator")

// function calculator(num1, num2, operator) {
//     if (operator == "+") {
//         var c = num2 + num1
//     } else if (operator == "-") {
//         c = num1 - num2
//     } else if (operator == "*") {
//         c = num1 * num2
//     } else if (operator == "/") {
//         c = num1 / num2
//     } else {
//         alert("Enter a Correct Operator")
//     }
//     return c

// }
// document.write("</br>Number1 : " + num1) 
// document.write("</br>Number2 : " + num2) 
// document.write("</br>operator : " + operator) 

// document.write("</br>Answer : " + calculator(num1, num2, operator)) 

// 5. Write a function that squares its argument.
// a = +prompt("Enter a number")
// function square(a) {
//     return a*a  
// }
// document.write(square(a))

// 6. Write a function that computes factorial of a number.
// function factorial(n){
//     //base case
//     if(n == 0 || n == 1){
//         return 1;
//     //recursive case
//     }else{
//         return n * factorial(n-1);
//     }
// }
// var n = +prompt("Enter a number")
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var a = +prompt("Enter a Starting Point:")
// var b = +prompt("Enter a Ending Point:")
// function counting() {
//     for (let i = a; i < b+1; i++) {
//         document.write("</br>"+i)

//     }
// }
// counting();
    
// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// var a = +prompt("Enter Base: ")
// var b = +prompt("Enter perpendicular: ")

// function hypotenuse(a, b) {
//     function square(c) { return c*c; }
//     return Math.sqrt(square(a) + square(b));
//  }
//  function secondFunction() {
//     var result = hypotenuse(a,b)
//     document.write ( result )
//  }
//  secondFunction()

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(a,b) {
//     return a*b
    
// }
// var c = 3
// var d = 4
// document.write("Area : "+area(c,d))
// document.write("</br> Area : "+area(8,9))

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// function checkPalindrome(string) {
//     var arrayValues = string.split('');
//     var reverseArrayValues = arrayValues.reverse();
//     var reverseString = reverseArrayValues.join('');
    
//     if(string.toLowerCase() == reverseString.toLowerCase()) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }

// checkPalindrome("Madam")
// checkPalindrome("sir")

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function upperCase(string) {
//     return string.toUpperCase()
// }
// console.log(upperCase("dua"))

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longestString() {
    var String = "Web Development classes"
}
    
