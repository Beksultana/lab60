import React from 'react';
import './AddMessage.css';
const AddMassage = () => {
    return (
        <div className={'addMessage'}>
            <input className={'form-control in'} type="text" placeholder={'Enter a message...'}/>
            <button className={'btn'}>Add</button>
        </div>
    );
};

export default AddMassage;