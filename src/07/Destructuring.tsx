import React from 'react';
import {AddressType, LessonsType} from './07.test';

type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: AddressType
}
type PropsType = {
    title: string
    man: ManType
    food:Array<string>
    car:{model:string}
}
function useDimychState(message:string){
    return [message,function (){}]
}

export const Destructuring: React.FC<PropsType> = (props) => {
    const {title} = props;
    const {name} = props.man;
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
                {name}
            </div>
        </div>
    );
};

