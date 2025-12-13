type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

/*
function makeChai (order : {type: string; sugar: number; strong: boolean}) {
    console.log(order);
}
*/ 

function makeChai (order : ChaiOrder) {
    console.log(order);
}

function serverChai(order : ChaiOrder) {
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water: number;
    milk: number;

    constructor() {
        this.water = 100;
        this.milk = 50;
    }
}

interface cupeSize {
    size: 'small' | 'medium' | 'large';
}

class Chai implements cupeSize {
    size: "small" | "medium" | "large" = 'medium';
}

// type Response = {ok : true} | {ok : false};
// class myRes implements Response {
//     ok: boolean = true;
// }

type teaType = 'black' | 'green' | 'herbal'; // literal types

function prepareTea(type: teaType) {
    console.log(`Preparing a cup of ${type} tea.`);
}

type baseChai = {teaLeaves : number};
type extra = {masala : number};

type specialChai = baseChai & extra;

const cup : specialChai = {
    teaLeaves: 5,
    masala: 3
}

type user = {
    username: string;
    bol?: boolean;
}

const u1 : user = {
    username: 'john_doe'
};

const u2 : user = {
    username: 'jane_doe',
    bol: true
};

type config = {
    readonly appName: string;
    version: string;
}

const cfg : config = {
    appName: 'TeaApp',
    version: '1.0.0'
}

// cfg.appName = 'NewTeaApp'; // Error: Cannot assign to 'appName' because it is a read-only property.