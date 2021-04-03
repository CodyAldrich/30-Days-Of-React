// 1. Create an object literal called personAccount. 
// It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
    firstName: 'John', 
    lastName: 'Doe', 
    incomes: [12384, 192],
    expenses: [131, 2903, 31, 89],
    totalIncome: function() { return this.incomes.reduce((sum, curr) => sum += curr)},
    totalExpense: function() { return this.expenses.reduce((sum, curr) => sum += curr)},
    accountInfo: function() { console.log(`${this.firstName} ${this.lastName}: ${this.totalIncome()} income, ${this.totalExpense()} expense, ${this.accountBalance()} balance`)},
    addIncome: function(newIncome) { this.incomes.push(newIncome) }, 
    addExpense: function(newExpense) { this.expenses.push(newExpense) },
    accountBalance: function() { return this.totalIncome() - this.totalExpense() }
}
console.log(personAccount.accountInfo())
personAccount.addIncome(1000000)
personAccount.addExpense(999999)
console.log(personAccount.accountInfo())

const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// makeid shamelessly stolen from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

const signUp = (username, email, password) => {
    users1.forEach(user => {
        if (user.name == username) {
            console.log('Username taken')
            return
        }
        if (user.email == email) {
            console.log('Email taken')
            return
        }
        
    })
    return {
        _id: makeid(7),
        username: username,
        email: email,
        password: password,
        createdAt: Date.now(),
        isLoggedIn: false,
    }
}

let bingus = signUp('Bingus', 'bingus@aol.net', 'bologna1')
console.log(bingus)

// b. Create a function called signIn which allows user to sign in to the application
function signIn(user) { user.isLoggedIn = true }
signIn(bingus)
console.log(bingus)

// This is the longest "day" of exercises ever... I'm moving on...