// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let yourAge = null
while (isNaN(parseInt(yourAge))) {
    yourAge = prompt("Enter your age:")
}
if (yourAge >= 16) {  // in America, you can drive at 16, so I changed it
    console.log('You are old enough to drive.')
} else { console.log('You are left with ' + (16-yourAge).toString() + ' years to drive.') }

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 10
if (yourAge > myAge) { console.log('You are ' + (yourAge-myAge).toString() + ' years older than me.') }
else if (yourAge < myAge) { console.log('You are ' + (myAge-yourAge).toString() + ' years younger than me.') }
else { console.log("We're the same age.") }

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = 4
let b = 3
// using if else
if (a > b) { console.log(a.toString() + ' is greater than ' + b.toString()) }
else { console.log(a.toString() + ' is less than ' + b.toString()) }
// ternary operator.
a > b ? console.log(a.toString() + ' is greater than ' + b.toString()) : console.log(a.toString() + ' is less than ' + b.toString())

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = null
while (isNaN(parseInt(number))) {
    number = prompt("Enter a number:")
}
number % 2 == 0 ? console.log(number + ' is an even number') : console.log(number + ' is an odd number.')