import React, {Component} from 'react';
import './Messages.css';
import axios from 'axios';
import Message from "../../components/Message/Message";
import AddMassage from "../../components/AddMassage/addMassage";

class Messages extends Component {
    state = {
        mess: [],
    };

    componentDidMount(){
        axios.get('http://146.185.154.90:8000/messages')
            .then(response => {
                console.log(response);
                const mess = response.data;

                    this.setState({mess})

            }).catch(error => {
            console.log(error)
        });

    }

    render() {

        return (
            <div className={'Messages'}>
                <AddMassage/>
                <div>
                    <h1 className={'messageText'}>Messages</h1>
                </div>
                <div className={'messagesBlock'}>
                    {
                        this.state.mess.map((message, index) => (
                            <Message
                                key={index}
                                author={message.author}
                                message={message.message}
                                date={message.datetime}
                            />
                        ))

                    }
                </div>
            </div>
        );
    }
}

export default Messages;