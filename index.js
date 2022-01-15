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

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForSale arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/