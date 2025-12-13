function makeChai(type: string, cups: number) {
    console.log(`Making a ${type} chai with ${cups} cups.`);
}

makeChai("masala", 2);

function makeCoffee(type: string, shots: number) : void {
    console.log(`Making a ${type} coffee with ${shots} shots.`);
}

makeCoffee("espresso", 2);

function makeOrder(order: string) : string | null {
    if (!order) return null;
    return order;
}
const myOrder = makeOrder("latte");
console.log(`Order received: ${myOrder}`);

// function orderChai(type? : string) {
    
// }

function orderChai(type : string = "masala") {
    console.log(`Chai order placed for: ${type}`);
}

function createCoffe(order: {
    type: string,
    sugar: 'small' | 'medium' | 'large',
}) : number {
    console.log(`Creating a ${order.type} coffee with ${order.sugar} sugar.`);
    return 1;
}