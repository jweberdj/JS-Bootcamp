const square = (num) => {
    return num * num 
}

const squareLong = (num) => num * num

console.log(square(5))

const people = [
    {
        name: 'Joshua',
        age: 28
    }, {
        name: 'Vikram',
        age: 31
    }, {
        name: 'Jess',
        age: 22
    }
]

// const under30 = people.filter(function() {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

// 1. Find the person with age 22
// 2. Print that person's name

const age22 = people.find((person) => person.age === 22)
console.log(age22.name)