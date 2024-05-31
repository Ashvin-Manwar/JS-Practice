// let myName = "ashvin     "
// let mychannel = "chai     "

// console.log(myName.trim().length);
// console.log(myName.trueLength); TODO

let myHeros = ['thor', 'spiderman','superman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    superman:'almighty',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ashvin = function(){
    console.log(`ashvin is present in all objects`);
}

Array.prototype.heyashvin = function(){
    console.log(`ashvin says hello`);
}

// heroPower.ashvin()
myHeros.ashvin()
myHeros.heyashvin()
// heroPower.heyashvin()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ashvin".trueLength()
"iceTea".trueLength()