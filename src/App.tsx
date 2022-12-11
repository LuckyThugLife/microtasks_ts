import React, {useState} from 'react';
import {Button} from './03_button/03_button';

// import NewComponent, {topCars} from "./NewComponent";



function App() {

    const buttonFor1 = (subscriber:string, age:number, address:string) => {
        console.log(subscriber,age,address)
    }

    const buttonFor2 = (subscriber:string) => {
        console.log(subscriber)
    }


    return (
        // <NewComponent topCars={topCars}/>
        <div>
            <Button name={"MyYouTubeChanel-1"} callBack={()=>buttonFor1("I am Vasiliy", 21, "Minsk")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={()=>buttonFor2("I am Ivan")}/>
        </div>
    );
}

export default App;
