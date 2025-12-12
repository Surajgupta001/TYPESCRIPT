let subs : number | string | boolean;

subs = 123;
subs = "Hello";
subs = true;

let apiRequestStatus : "pending" | "success" | "error" = "pending";

let airLinesSeats : "aisle" | "middle" | "window" = "aisle";

const orders = ['12', '23', '34']

let currentorder : string | undefined;

for(let order of orders){
    if (order === '12'){
        currentorder = order;
        break;
    }
}

console.log(currentorder);