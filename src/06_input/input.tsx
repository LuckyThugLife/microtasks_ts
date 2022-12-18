import React, {ChangeEvent} from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export type InputPropsType = {
    title: string,
    setTitle: (title: string) => void
}


export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

