function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `making tea with ${kind} chai`;
    }
    return `making tea with ${kind} ml chai`;
}

function serveChai(msg?: string) {
    if (msg) {
        return `Serving chai: ${msg}`;
    }
    return "Serving plain chai";
}

function orderChai(size: 'small' | 'medium' | 'large' | number) {
    if (size === 'small') {
        return 'Small chai ordered';
    }
    if (size === 'medium' || size === 'large') {
        return `make extra chai`
    }
    return `Chai of size ${size} ml ordered`;
}

class KulhadChai {
    serve() {
        return 'Serving chai in kulhad';
    }
}

class CuttingChai {
    serve() {
        return 'Serving cutting chai in glass';
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}

type ChaiOrder = {
    type: string;
    sugar: number;
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serverOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`;
    }
    return `Serving ${item} chai`;
}

type MasalaChai = {
    type: 'masala';
    spiceLevel: number;
}

type GingerChai = {
    type: 'ginger';
    gingerSlices: number;
}

type ElaichiChai = {
    type: 'elaichi';
    elaichiPods: number;
}

type chai = MasalaChai | GingerChai | ElaichiChai;

function makeOrder(order: chai) {
    switch (order.type) {
        case "masala":
            return `Making masala chai with spice level ${order.spiceLevel}`;
            break;
        case "ginger":
            return `Making ginger chai with ${order.gingerSlices} slices of ginger`;
            break;
        case "elaichi":
            return `Making elaichi chai with ${order.elaichiPods} elaichi pods`;
            break;
    }
}

function brew(order : MasalaChai | GingerChai) {
    if ('spiceLevel' in order) {
        return `Brewing masala chai with spice level ${order.spiceLevel}`;
    }
}

function isStringArray(arr : unknown[]): arr is string[] {
    return arr.every(item => typeof item === 'string');
}