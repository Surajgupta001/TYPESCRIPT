import { useState } from "react"

export function Counter () {

    const [count, setCount] = useState<number | null>(0);

    return (
        <div>
            <p>Cups ordered : {count}</p>
            <button onClick={() => setCount((count) => (count !== null ? count + 1 : 1))}>Add Cup</button>
        </div>
    )
}