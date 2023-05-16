import { useState } from "react";
import "./style.css"

export default function Buttons(){

    const [count, setCount] = useState(0);

    const increase = () => {setCount(count + 1)} 
    const dicrease = () => {setCount(count - 1)}

    return(
        <div className="conteiner">
            <button onClick={() => dicrease(count - 1)} className="minus">-</button>
            <div className="countWrapper">I was clicked {count} times</div>
            <button onClick={() => increase(count + 1)} className="plus">+</button>
        </div>
    )
}

