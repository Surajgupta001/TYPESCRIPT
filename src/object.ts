const chai = {
    name: 'Masala chai',
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

let tea : {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: 'Ginger tea',
    price: 15,
    isHot: false
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

let greenTea: Tea = {
    name: 'Green Tea',
    price: 25,
    ingredients: ['green tea leaves', 'lemon', 'honey']
}

type Cup = {size: string};
let smallCup: Cup = {size: '200ml'};

let bigCup = {size: '500ml', material: 'steel'}

smallCup = bigCup; // valid because bigCup has at least the properties of smallCup

// bigCup = smallCup; // invalid because smallCup lacks the 'material' property

type Brew = {brewType: number};
const coffee = {brewType: 1, origin: 'Colombia'};
const chaiBrew: Brew = coffee; // valid because chaiBrew has at least the properties of Brew

type user = {
    username: string;
    email: string;
    password: string;
}

const u : user = {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'securepassword123'
}

type item = {name: string; quantity: number};
type Address = {street: string; city: string; zipCode: string};

type Order = {
    orderId: number;
    items: item[];
    shippingAddress: Address;
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => {
    console.log('Updating chai with the following properties:', updates);
};

updateChai({price: 22});
updateChai({isHot: false});
updateChai({});

type chaiorder = {
    name? : String;
    quantity? : number;
}

const placeOrder = (order: Required<chaiorder>) => {
    console.log(`Placing order for ${order.quantity} of ${order.name}`);
}

placeOrder({
    name: 'Masala chai',
    quantity: 2
})

type ChaiDetails = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type ChaiPreview = Pick<ChaiDetails, 'name' | 'price'>;

const previewChai: ChaiPreview = {
    name: 'Cardamom Chai',
    price: 30
}

type ChaiInfo = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type ChaiSummary = Omit<ChaiInfo, 'ingredients' | 'isHot'>;

const summaryChai: ChaiSummary = {
    name: 'Ginger Chai',
    price: 18
}