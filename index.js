/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */

let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

let getEvenNumber = function(){

    

    let evens = numArray.filter(number => number % 2 === 0);
    return evens
}
console.log(getEvenNumber())





/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/


let student = {

    firstName : "Sumrooz",
    surName : "Zia",
    age : 28,
    email : "Sumrooz.zia@gmail.conm"



}

console.log(student)


student.nickName = "Summer"

console.log(student)



console.log(student)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

student.hasDrivingLicense = true ;

console.log(student)



/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete student.surName 
console.log(student)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let profile = {

    firstName : "Sumer",
    surName : "rajput",
    age : 28,
    email : "Summerrajput@gmail.com.conm"

}

console.log(profile)


let isEmailDifferent = student.email === profile.email
    


console.log(isEmailDifferent)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */


let shoppingCart = 100 

let shippingCost = (shoppingCart > 50) ? 0 : 10

let totalCost =  shoppingCart + shippingCost 

console.log("you have free shipping " + totalCost)




/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

let fridaySalePrice = totalCost - (totalCost*0.2)

console.log(fridaySalePrice)

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let cars = {

    brand: "Ford KA",
    LicenseNo : 123,
    Model : 2008,



}

let car2 = {}
Object.assign(car2,cars)
car2.LicenseNo = 1245 ;

console.log(car2)

let car3 = {}
Object.assign(car3,cars)
car3.LicenseNo = 265 ;
console.log(car3)

let car4 = {}
Object.assign(car4,cars)
car4.LicenseNo = 4444 ;
console.log(car4)

let car5 = {}

Object.assign(car5,cars)
car5.LicenseNo = 5555 ;
console.log(car5)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/


let carsForRent = [cars,car2,car3,car4,car5]

console.log(carsForRent)


/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
carsForRent.shift()
carsForRent.pop()

console.log(carsForRent)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log( typeof cars)
console.log("What type of data is used for licensePlate property?", typeof cars.LicenseNo)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForSale arrays.
*/



let carsAvailable = [];

carsAvailable.push(cars,car2,car3,car4,car5)

console.log(carsAvailable)
console.log("---------------------------------------------")
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */


for(let i = 0; i < carsAvailable.length ; i++){

    let car = carsAvailable[i]
    console.log(car)
}



/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/


/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

let area = function(l1,l2){

    console.log("Total Area of rec is :" + l1*l2)

}

area(12,11)
console.log("-----------------------------------------------")
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = function(num1,num2){
    
    if(num1===num2){
        console.log(num1*num2)
    }else{
        console.log(num1+num2)
    }

}

crazySum(12,24)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

let crazyDiff = function(int1){
    if(int1 > 19 ){
        console.log((int1 - 19) * 3)

    }else{
        console.log(19 - int1)
    }
}

crazyDiff(10)



/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

let boundary = function(n){

    if(n >= 20 && n <= 100 || n === 400){
        console.log("Number is between Boundry")
    }else{
        console.log("Number is not Valid in Boundry")
    }

}

boundary(400)

console.log("-------------------    ex 5   -------------------------")
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let strivify = function(string){

    if(string === string.indexOf("Strive")){
        console.log(string)
    }else{
        console.log(" Strive "+ string)
    }

}

strivify("Strive")

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
let check3and7 = function(n){
    if( n < 0 ){
        console.log("Only Positive Number Accept ")
    }else if(n % 3 === 0 && n % 7 === 0 ) {
        console.log('${n} is a multiple of 3 and 7 ')

    }else if(n % 3 === 0  ) {
        console.log('${n} is a multiple of 3  ')}
        else if(n % 7 === 0  ) {
            console.log('${n} is a multiple of  7 ')}
    else{
        console.log("Neither divided  by both ")
    }

    
}


check3and7(49)

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
console.log("-----------------------------")


   
   

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/