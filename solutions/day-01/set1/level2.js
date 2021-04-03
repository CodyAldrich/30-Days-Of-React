// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
// Err, go look at the js files referenced above
// I'm also pretending this is main.js
console.log(countries)
console.log(webTechs)

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(',', '').replace('.', '').split(' ')
console.log(words)
console.log(words.length)

// 3. In the following shopping cart add, remove, edit items
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']  // side note: 01_javascript_refresher.md declares this as a const, but then asks to manipulate it, so I'm changing it
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) { shoppingCart.unshift('Meat') }
// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) { shoppingCart.push('Sugar') }
// remove 'Honey' if you are allergic to honey
// (I'm going to pretend I'm allergic to honey for the purposes of this exercise)
const allergicToHoney = true  // you can't cure allergies as far as I'm aware
if (allergicToHoney && shoppingCart.includes('Honey')) { shoppingCart.splice(shoppingCart.indexOf('Honey'), 1) }
// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'

console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) { console.log('ETHIOPIA') }  // hint: 'Ethiopia' exists
else { countries.push('Ethiopia') }

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')) { console.log('Sass is a CSS preprocess') }  // hint: 'Sass' does not exist
else { webTechs.push('Sass') }
console.log(webTechs)

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)