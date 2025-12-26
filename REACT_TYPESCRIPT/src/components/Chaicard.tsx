interface chaicardprop {
    name : string;
    price : number;
    isSpecial ?: boolean;
}

export function Chaicard({name, price, isSpecial = false} : chaicardprop) {
    return (
        <article>
            <h2>
                {name} - ${price} {isSpecial && <span>🌟 Special!</span>}
            </h2>
            <p>{price}</p>
        </article>
    )
}