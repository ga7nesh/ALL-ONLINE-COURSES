//var name = "Jack";
//var age = 23;
//var shootingScore = 45.6;
//
//
//var message = "Hi, my name is " + name + " my age is " + age + " years old!";

//alert(message);

//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82";
//var age = 23;
//var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!"; 
//
//console.log(loginWelcomeMessage);

//var age = 23;
//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 3 * 10;
//var div = 9 / 3;
//var mod = 10 % 3;
//
//var msg = "10 / 3 = 3 with a remainder of " + mod;
//
//var result = 10 * ((5 + 3) - 4) - 500;
//
//console.log(result);

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;
//
//if (nikeSBShoes <= myAccountBalance){
//    
//    myAccountBalance -= nikeSBShoes;
//    
//    console.log("Just bought some dope shoes");
//        console.log("Account Balance: " + myAccountBalance);
//
//} else if(nikeSBShoes - coupon <= myAccountBalance){
//        myAccountBalance -= nikeSBShoes;
//        console.log("Just bought some dope shoes");
//        console.log("Account Balance: " + myAccountBalance);
//}else{
//    console.log("You too broke fo shoes bra!");
//}
//
//
//var age = 23;
//var joesAge = "23";
//
//if( age === joesAge){
//    console.log("Im the same age as Joe!");
//}
//
//if(1 === 1 && 2 === 2){
//    console.log("These are both true!");
//}
//
//if(true && true){
//    console.log("True");
//}
//
//if(1 === 1 && 2 === 2 || "joe" = "joe"){
//    console.log("& and |");
//}


// ############# OBJECT ###############//
//var student = {
//    firstName: "John",
//    lastName: "Parker",
//    age: 7;
//};

//var student1 = new Object();
//student1.name = "John";
//student1.name = "Parker";
//student1.age = 7;


//var student0 = new Object();
//student1.name = "Jayne";
//student1.name = "Loo";
//student1.age = 8;
//
//};

//function Student(firstName, lastName, age){
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.age = age;
//    this.greeting = function(){
//    return "Hi, I'm " + this.firstName + " and I'm "+ this.age + " years old." ;
//    }
//}

//var s1 = new student("Jenny", "Laga", 5);

//var students = [];
//
//students.push(new Student("Jenny", "Larga", 5));
//students.push(new Student("Timmy", "Turner", 8));
//students.push(new Student("Carl", "Jr", 4));

//
//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);
//console.log(student0.greeting());

//for( var x = 0; x < students.length; x++){
//    console.log(students[x].greeting());
//}


// Print out the keys in an object
//var student = [0];
//
//for (var key in student){
//    console.log(student[key]);
//}


//var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];
//
//for(var x = 0; x < students.length; x++){
//    console.log(students[x]);
//}

//Solve the following:
//
//1) Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//
//Sample Output :  
//"0 is even" 
//"1 is odd" 
//"2 is even"


//for(var x = 0; x <= 15; x++){
//    if(x%2 === 0){
//        console.log("even");
//    }
//    else{
//        console.log("odd");
//    }
//}


//2) Using loops, create a Javascript program that prints out the following:
//
//*  
//* *  
//* * *  
//* * * *  
//* * * * *  

//var starHolder = ""
//for(var x = 0; x <= 6; x++){
//   console.log(starHolder);
//    starHolder += "* "
//}




//3) Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print Code instead of the number and for the multiples of five print Monkey. For numbers which are multiples of both three and five print CodeMonkey

//for(var x = 0; x <= 100; x++){
//    if(x%3 === 0 && x%5 === 0){
//        console.log("CodeMonkey");
//    }else if(x%3 === 0){
//        console.log("Code");
//    }
//    else if(x%5 === 0){
//        console.log("Monkey");
//    }
//    else{
//        console.log(x);
//    }
//}


// ################ FUNCTIONS ############# //

//function area(length, width){
//    return length * width;
//}
//
//var rectanglesAreas = [];
//rectanglesAreas.push(area(10,15));
//rectanglesAreas.push(area(14,2));
//rectanglesAreas.push(area(4,5));
//
//console.log(rectanglesAreas);
//
//console.log(area);
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    }else{
//        console.log("Insufficient Funds");
//    }
//}
//
//console.log(bankBalance);
//
//makeTransaction(79.00);
//console.log(bankBalance);
//
//makeTransaction(2.32);
//console.log(bankBalance);
//
//makeTransaction(10.45);
//console.log(bankBalance);
//
//makeTransaction(450);
//console.log(bankBalance);
//
//var transaction = function(priceOfSale){
//     if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    }else{
//        console.log("Insufficient Funds");
//    }
//}
//
//transaction(10);
//
//var printCustomerName = function(first,last){
//    console.log("First Name: " + first + " Last Name " + last );
//}
//
//var applyForCreditCard = function(creditScore, soul){
//    //Call some functions to process application
//}
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);


//Exercise - Javascript Ops
//07 SEPTEMBER 2017 by Mark Price
//Let's help you become a master of Javascript.
//
//Perform the following:
//
//Given one or more parameters, create a function that returns the area of a triangle

//function areaOfTriangle(height, base){
//    // A = (h*b)/2
//    return (height * base)/2;
//}



//Given one or more parameters, create a function that returns the area of a circle

//function areaOfCircle(radius){
//    // A = pi*r^2
//    return Math.PI * radius*radius;
//}

//Create a single function that can take one or more parameters, and can return the area regardless of the shape (single function for triangle, circle, or rectangle)

//function return areaOfShape(shapeType, a, b){
//    if(shapeType === "Triangle"){
//        areaOfTriangle(a,b);
//    }
//    else if(shapeType === "circle"){
//        areaOfCircle(a);
//    }
//    else{
//        return a*b;
//    }
//}






