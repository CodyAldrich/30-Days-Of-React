// 1. Write a code which can give grades to students according to theirs scores:
const getGrade = grade => {
    if (isNaN(grade)) return null
    if (grade <= 49) return 'F'
    if (grade <= 59) return 'D'
    if (grade <= 69) return 'C'
    if (grade <= 89) return 'B'
    if (grade <= 100) return 'A'
    return null
}
console.log(getGrade(90))
console.log(getGrade(80))
console.log(getGrade(60))
console.log(getGrade(50))
console.log(getGrade(40))

// 2. Check if the season is Autumn, Winter, Spring or Summer
let seasons = {
    'January': 'Winter', 
    'February': 'Winter', 
    'March': 'Spring', 
    'April': 'Spring', 
    'May': 'Spring', 
    'June': 'Summer', 
    'July': 'Summer', 
    'August': 'Summer', 
    'September': 'Autumn', 
    'October': 'Autumn', 
    'November': 'Autumn', 
    'December': 'Winter'
}
let month = ''
while (!seasons.hasOwnProperty(month)) {
    month = prompt('Enter a month')
}
console.log(month + ' is during ' + seasons[month])

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let isWeekday = {
    'SUNDAY': false,
    'MONDAY': true,
    'TUESDAY': true,
    'WEDNESDAY': true,
    'THURSDAY': true,
    'FRIDAY': true,
    'SATURDAY': false
}
let day = ''
while (!isWeekday.hasOwnProperty(day.toUpperCase())) {
    day = prompt('What is the day today?')
}
isWeekday[day.toUpperCase()] ? console.log(day + ' is a weekday.') : console.log(day + ' is a weekend.')