class chai {
    flavour: string;
    price: number;

    // constructor
    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new chai("Masala", 250);
masalaChai.flavour = "Ginger Masala";


// Access Modifiers
class Chai {
    public flavor : string = 'masala'

    private secretIngredient : string = 'cardamom'

    reveal(){
        return this.secretIngredient
    }

}

class shop {
    protected shopName ='Tea House'
}

class Branch extends shop {
    getName(){
        return this.shopName
    }
}

// new Branch().getName()

class walet {
    #balance: number = 100;

    getbalance(){
        return this.#balance
    }
}

const w = new walet()
// w.#balance
w.getbalance()

// Readonly modifier
class cup {
    readonly capacity: number = 200;

    constructor(capacity: number){
        this.capacity = capacity
    }
}

class modernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if(value < 0 || value > 5){
            throw new Error('Sugar must be between 0 and 5')
        }
        this._sugar = value
    }
}

const c = new modernChai()
c.sugar = 3

// Static members
class EkChai {
    static shopName = 'Ek Chai'

    constructor(public flavor: string){

    }
}

console.log(EkChai.shopName);

// Abstract Classes
abstract class Drink {
    abstract make() : void
}

class myChai extends Drink {
    make(): void {
        console.log('Making chai');
    }
}

// composition
class Heater {
    heat(){

    }
}

class ChaiMaker {
    constructor(private heater : Heater){

    }

    make() {
        this.heater.heat();
    }
}