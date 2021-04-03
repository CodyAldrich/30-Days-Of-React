// 1. Declare an empty array
let emptyArrap = []

// 2. Declare an array with more than 5 number of elements
let moreThanFive = [1, 2, 3, 4, 5, 6, 7]

// 3. Find the length of your array
console.log("moreThanFive has length " + moreThanFive.length.toString())

// 4. Get the first item, the middle item and the last item of the array
console.log("first item in moreThanFive is " + moreThanFive[0].toString())
console.log("first item in moreThanFive is " + moreThanFive[parseInt(moreThanFive.length/2)].toString())
console.log("last item in moreThanFive is " + moreThanFive[moreThanFive.length-1].toString())

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, '2', [3], false, {5: true}, 6.1]
console.log("mixedDataTypes length is " + mixedDataTypes.length.toString())

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log("there are " + itCompanies.length.toString() + " compaines in the array")

// 9. Print the first company, middle and last company
console.log("first company in itCompanies is " + itCompanies[0].toString())
console.log("first company in itCompanies is " + itCompanies[parseInt(itCompanies.length/2)].toString())
console.log("last company in itCompanies is " + itCompanies[itCompanies.length-1].toString())

// 10. Print out each company
itCompanies.forEach(company => console.log(company))

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()))

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = ""
for (let i = 0; i < itCompanies.length; i++) {
    sentence += itCompanies[i]
    if (i == itCompanies.length-2) { sentence += " and" }
    else if (i < itCompanies.length-2) { sentence += ", " }
    sentence += " "
}
sentence += "are big IT companies."
console.log(sentence)

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function companyExists(company, itCompanies) {
    if (itCompanies.includes(company)) { return company }
    return company + " is not found"
}
console.log(companyExists("Facebook", itCompanies))
console.log(companyExists("Uber", itCompanies))

// 14. Filter out companies which have more than one 'o' without the filter method
filteredCompanies = []
itCompanies.forEach(company => { if((company.match(/o/g) || []).length < 2) { filteredCompanies.push(company) } })
console.log(filteredCompanies)

// 15. Sort the array using sort() method
itCompanies.sort()

// 16. Reverse the array using reverse() method
itCompanies.reverse()

console.log(itCompanies)

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3))

// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(1, itCompanies.length-1))

console.log(itCompanies)

// 20. Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// 21. Remove the middle IT company or companies from the array
itCompanies.splice(parseInt(itCompanies.length/2), 1)
console.log(itCompanies)

// 22. Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

// 23. Remove all IT companies
itCompanies.splice(0)
console.log(itCompanies)