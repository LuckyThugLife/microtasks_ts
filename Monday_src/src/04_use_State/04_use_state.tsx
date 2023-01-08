import React, {useState} from "react";

export const Counter = () => {
    const maxVal = 5

    let [count, setCount] = useState(0)
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

            <button onClick={onClickHandlerIncrease} disabled={count===maxVal}>number</button>
            <button onClick={onClickHandlerReset} disabled={count===0}>reset</button>
        </div>
    )

}