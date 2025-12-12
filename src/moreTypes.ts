let response : any = '42';

let numericlength : number = (response as string).length;

type Book = {
    name : string;
    author : string;
}

let bookString = '{"name" : "The Alchemist", "author" : "Paulo Coelho"}';

let bookObject = JSON.parse(bookString) as Book;

console.log(`Book Name: ${bookObject.name}, Author: ${bookObject.author}`);

const inputElement = document.getElementById('user-input') as HTMLInputElement;

inputElement.value = "Hello, TypeScript!";

let value : any

value = 'chai'
value = [1,2,3]
value = 2.5

value.toUppercase(); // No error at compile time

let newValue : unknown

newValue = 'chai'
newValue = [1,2,3]
newValue = 2.5
if (typeof newValue === 'string') {
    newValue.toUpperCase(); // No error, type is checked at runtime
}

try {
    
} catch (error : any) {
    if (error instanceof Error) {
        console.log(`Error occurred: ${error.message}`);
    }
    console.log(`Error occurred: ${error}`);
}

type Role = 'admin' | 'user' | 'guest';

function redirectBasedOnRole(role: Role) : void {
    if (role === 'admin') {
        console.log('Redirecting to admin dashboard');
        return;
    } else if (role === 'user') {
        console.log('Redirecting to user homepage');
        return;
    } else if (role === 'guest') {
        console.log('Redirecting to guest welcome page');
        return;
    }
    role;
}

function neverReturn() : never {
    while(true) {
        console.log('This function never returns');
    }
}