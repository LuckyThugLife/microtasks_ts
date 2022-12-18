import React, {Fragment, useState} from 'react';
import "./App.css"
import FullInput from "./06_input/06_fullInput";
import {Input} from "./06_input/input";
import {Button} from "./06_input/button";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return <div className={'App'}>
        {/*<FullInput addMessage={addMessage}/>*/}
        <Input title={title} setTitle={setTitle}/>
        <Button name={'+'} callBack={callBackButtonHandler}/>

        {message.map((el, index) => {
            return (
                <div key={index}>{el.message}</div>
            )
        })}

    </div>

}

export default App;
