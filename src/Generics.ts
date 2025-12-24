// Generics => Templates for functions and classes

function wrapInArray<T>(item : T) : T[]{
	return [item];
}

wrapInArray('hello'); // ['hello']
wrapInArray(42); // [42]
wrapInArray({name: 'Alice'}); // [{name: 'Alice'}]

function pair<A, B>(a : A, b : B) : [A, B] {
    return [a, b];
}

pair('age', 30); // ['age', 30]
pair(1, true); // [1, true]
pair({x: 10}, [1, 2, 3]); // [{x: 10}, [1, 2, 3]]

interface Box<T> {
    content: T;
}

const numberBox : Box<number> = {
    content: 100
};
const numberBoxCup : Box<string> = {
    content: 'tea cup'
};

// Real World Example
interface ApiPromise<T> {
    status : number,
    data : T
}

const res: ApiPromise<{ flavor: string }> = {
    status: 200,
    data: {
        flavor: 'masala'
    }
}