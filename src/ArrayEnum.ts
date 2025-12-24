const chaiFlavours : string[] = ["Assam","Darjeeling",]

const chaiPrice : number[] = [200, 300,]

const rating : Array<number> = [4.5, 4.7,]

// Arrays of obejct
type chai = {
    name: string,
    price: number,
}

const menu : chai[] = [
    {name: "Assam", price: 200},
    {name: "Darjeeling", price: 300},
]

// Read only arrays
const cities : ReadonlyArray<string> = ["Pune", "Mumbai", "Banglore"]

// Multi-dimensional arrays
const matrix : number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

// Tuple => follow order and type
let chaiTuple : [string, number, boolean] = ["Assam", 200, true]

// Read only tuple
let chaiTupleReadOnly : readonly [string, number, boolean] = ["Darjeeling", 300, false]

// Named Tuple
type ChaiTuple = [name: string, price: number, isAvailable: boolean]
let namedChaiTuple : ChaiTuple = ["Earl Grey", 400, true]

// Enum => collection of related values
enum ChaiSize {
    SMALL,
    MEDIUM,
    LARGE,
}

const size = ChaiSize.MEDIUM

// Auto incremented enum
enum status {
    STATUS = 100,
    PENDING, // 101 => auto incremented
    COMPLETED, // 102 => auto incremented
}

enum ChaiType {
    MASALA = "MASALA",
    GREEN = "GREEN",
    BLACK = "BLACK",
}

function getChaiType(type: ChaiType) {
   console.log(`Chai Type: ${type}`);
}

getChaiType(ChaiType.GREEN);

// Heterogeneous Enum
enum MixedEnum {
    NO = 0,
    YES = "YES",
}

// NOTE : Always try to use single type enums (either all numeric or all string) to maintain consistency and avoid confusion.

// const enum
const enum ChaiFlavor {
    MINT = "MINT",
    GINGER = "GINGER",
    CARDAMOM = "CARDAMOM",
}

let t: [string, number] = ["Test", 123]
t.push(456) // Allowed
// t.push("Hello") // Not Allowed