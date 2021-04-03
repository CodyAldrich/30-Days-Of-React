const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// 1. Find the person who has many skills in the users object.
// (I'm interpretting this to mean find the user with the most skills)
// (doing 1-3 at the same time since they all involve iterating over each user; trying to reduce redundant code)
let highSkillCount = 0
let mostSkilled = null
let loggedInCount = 0
let has50Points = 0
for (const [name, user] of Object.entries(users)) {
    if (user.skills.length > highSkillCount) {
        highSkillCount = user.skills.length
        mostSkilled = name
    }

    // 2. Count logged in users,count users having greater than equal to 50 points from the following object.
    if (user.isLoggedIn) loggedInCount++  
    if (user.points >= 50) has50Points++

    // 3. Find people who are MERN stack developer from the users object
    if (user.skills.includes('MongoDB') && user.skills.includes('Express') && user.skills.includes('React') && user.skills.includes('Node')) 
        console.log(name + ' is a MERN stack dev')
}
console.log(mostSkilled + ' is the most skilled with ' + highSkillCount + ' skills')
console.log('There are ' + loggedInCount + ' users logged in')
console.log(has50Points + ' users have at least 50 points')

// 4. Set your name in the users object without modifying the original users object
let usersCopy = {...users, 
    Dude: {
        email: 'dude@dude.com',
        skills: [],
        age: 103,
        isLoggedIn: false,
        points: 0
    }
}
console.log(usersCopy)

// 5. Get all keys or properties of users object
console.log(Object.keys(users))

// 6. Get all values of users object
Object.keys(users).forEach(name => console.log(users[name]))