// const add = () => {
//     return arguments[0] + arguments[1]
// }

const add = function() {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
    color: 'red',
    // Cannot use arrow functions here
    getSummary: function() {
        return `the car is ${this.color}`
    }
}

console.log(car.getSummary());