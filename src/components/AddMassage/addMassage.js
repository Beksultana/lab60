import React from 'react';
import './AddMessage.css';
const AddMassage = (props) => {
    return (
        <div className={'addMessage'}>
            <input onChange={props.onChangeName}  placeholder={'Enter a Name...'} type="text" aria-label="First name" className="input-control"/>
            <input onChange={props.onChangeMessage}  placeholder={'Enter a Message...'} type="text" aria-label="Last name" className="input-control"/>
            <button onClick={props.onClickedd} className={'btn'}>+</button>
        </div>
    );
};

export default AddMassage;