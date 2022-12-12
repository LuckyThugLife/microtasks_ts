import React, {useState} from "react";


export const Counter = () => {

    let [count, setCount] = useState(1)
    const onClickHandlerIncrease = () => {

        setCount(++count)
    }
    const onClickHandlerReset = () => {

        setCount(0)
        console.log(0)

    }
    return (
        <div>
            <h1>{count}</h1>

            <button onClick={onClickHandlerIncrease}>number</button>
            <button onClick={onClickHandlerReset}>0</button>
        </div>
    )

}