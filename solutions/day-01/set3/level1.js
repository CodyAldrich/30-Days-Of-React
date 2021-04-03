// 1. Create an empty object called dog
let dog = {}

// 2. Print the the dog object on the console
console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Fido'
dog.legs = 4  // ???
dog.color = 'Purple'
dog.age = 98
dog.bark = () => console.log('Bark!')

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark)

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'Corgi'
dog.getDogInfo = () => {
    console.log(dog.name)
    console.log(dog.age + ' year old ' + dog.color + ' ' + dog.breed)
    console.log('Legs: ' + dog.legs)
    dog.bark()
}
dog.getDogInfo()