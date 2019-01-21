import React from 'react';
import './AddMessage.css';
const AddMassage = () => {
    return (
        <div className={'addMessage'}>
            <div className="input-group">
                <input type="text" aria-label="First name" className="form-control"/>
                <input type="text" aria-label="Last name" className="form-control"/>
                <button className={'btn'}>Add</button>
            </div>
        </div>
    );
};

export default AddMassage;