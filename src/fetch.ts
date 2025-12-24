interface Todo {
    userid : number,
    id : number,
    title : string,
    body : string
}

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data : Todo = await response.json();
        console.log(data);
    } catch (error) {
        
    }
}