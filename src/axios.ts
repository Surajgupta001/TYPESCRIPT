import axios, { type AxiosResponse } from 'axios';

interface Todo {
    userid : number,
    id : number,
    title : string,
    body : string
}

axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(respose => {
    console.log(respose.data);
})

const fetchdata = async () => {
    try {
        const response : AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data);
    } catch (error : any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error:", error.message);
            if (error.response) {
                console.log(error.response.status);
            }
        } else {
            console.log("Unexpected error:", error);
        }
    }
}