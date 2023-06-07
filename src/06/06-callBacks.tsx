import React, {ChangeEvent, MouseEvent} from 'react';

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        debugger
        console.log(event.currentTarget);
        console.log(event.currentTarget.name);
        /*      alert('User have been deleted');*/
    };
    const saveUser = () => {
        alert('User have been saved');
    };

    const nameChanged = () => {
        console.log('Name changed');
    };
    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
    };
    const onBlur = () => {
        console.log('Name changed');
    };
    return (<div>
        <textarea onBlur={onBlur} onChange={nameChanged}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name={'delete'} onClick={deleteUser}>delete</button>
        <button name={'save'} onClick={deleteUser}>save</button>
    </div>);
};