// 1. Write a program which tells the number of days in a month.
let numDays = {
    'JANUARY': 31, 
    'FEBRUARY': 28,  // no leap years ;)
    'MARCH': 31, 
    'APRIL': 30, 
    'MAY': 31, 
    'JUNE': 30, 
    'JULY': 31, 
    'AUGUST': 31, 
    'SEPTEMBER': 30, 
    'OCTOBER': 31, 
    'NOVEMBER': 30, 
    'DECEMBER': 31
}
let month = ''
while (!numDays.hasOwnProperty(month.toUpperCase())) {
    month = prompt('Enter a month')
}
console.log(month + ' has ' + numDays[month.toUpperCase()] + ' days.')