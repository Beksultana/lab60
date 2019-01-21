import React from 'react';
import './Massage.css';

const Message = props => {
    return (
        <div className={'card text-black bg-light'}>
            <div className="card-header cardStyle">
                <p className={'authorName text'}><strong>Author: </strong> {props.author}</p>
            </div>
            <div className="card-body cardStyle">
                <p className={'authorMessage text'}><strong>Massage: </strong> {props.message}</p>
                <i className={'dateText'}>Date: {props.date}</i>
            </div>
        </div>
    );
};

export default Message;