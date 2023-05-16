import { useState } from "react";
import "./style.css"

export default function Buttons(){

    const [count, setCount] = useState(0);

    const calculation = (x) => {setCount(count + x)} 
    

    return(
        <div className="conteiner">
            <button onClick={() => calculation(- 1)} className="minus">-</button>
            <div className="countWrapper">I was clicked {count} times</div>
            <button onClick={() => calculation(+ 1)} className="plus">+</button>
        </div>
    )
}

