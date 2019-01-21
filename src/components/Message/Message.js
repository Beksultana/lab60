import React from 'react';
import './Massage.css';

const Message = props => {
    return (
        <div className={'card text-black bg-dark'}>
            <div className="card-header cardStyle">
                <p className={'authorName text'}> {props.author}</p>
            </div>
            <div className="card-body cardStyle">
                <p className={'authorMessage text'}> {props.message}</p>
                <i className={'dateText'}>{props.date}</i>
            </div>
        </div>
    );
};

export default Message;