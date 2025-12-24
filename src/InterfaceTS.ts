// INTERFACES => Templates for objects

interface chai {
    flavor : string
    price : number
    milk? : boolean
}

const masala : chai = {
    flavor: "masala",
    price: 250,
    // milk: true,
}

interface Shop {
    readonly id : number
    name : string
}

const s : Shop = {
    id: 1,
    name: "Tea House",
}
// s.id = 2 // Error: Cannot assign to 'id' because it is a read-only property.

interface discountcalculator {
    (price: number) : number
}

const aaply50 : discountcalculator = (p) => p * 0.5

interface Teamachine {
    start() : void;
    stop() : void;
}

const machine : Teamachine = {
    start () {
        console.log("Machine started");
    },
    stop () {
        console.log("Machine stopped");
    }
}

// Index Signature
interface chaiRatings {
    [flavor : string] : number
}

const ratings : chaiRatings = {
    masala: 5,
    ginger: 4,
}

// Library
interface user {
    name : string
}

interface user {
    age : number
}

const u : user = { // Merging Interfaces
    name: "Alice",
    age: 30,
}

interface A {
    x : number
}

interface B {
    y : number
}

interface C extends A, B {
    z : number
}