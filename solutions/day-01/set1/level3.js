// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort()
let minAge = ages[0]
let maxAge = ages[ages.length-1]
console.log(ages)
console.log(minAge)
console.log(maxAge)
// Find the median age(one middle item or two middle items divided by two)
let medianAge = ages[parseInt(ages.length/2)]
if (ages.length%2 == 0) { medianAge = (medianAge + ages[parseInt(ages.length/2)-1])/2 }
console.log(medianAge)
// Find the average age(all items divided by number of items)
let avgAge = ages.reduce((a, c) => a+c)/ages.length
console.log(avgAge)
// Find the range of the ages(max minus min)
let ageRange = maxAge - minAge
console.log(ageRange)
// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(minAge-avgAge).toString() + " vs " + Math.abs(maxAge-avgAge).toString())

// Slice the first ten countries from the countries array
console.log(countries.slice(0, 10))

// Find the middle country(ies) in the countries array
console.log(countries[parseInt(countries.length/2)])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries.length%2 == 0) { 
    console.log(countries.slice(0, countries.length/2))
    console.log(countries.slice(countries.length/2))
} else {
    console.log(countries.slice(0, parseInt(countries.length/2)+1))
    console.log(countries.slice(parseInt(countries.length/2)+1))
}