import React, {Component} from 'react';
import './Messages.css';
import axios from 'axios';
import Message from "../../components/Message/Message";
import AddMassage from "../../components/AddMassage/addMassage";

class Messages extends Component {

    state = {
        mess: [],
        author: '',
        message: '',
    };

    shouldComponentUpdate(nextProps, nextState){
        return this.state.mess.length !== nextState.mess.length
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            axios.get('http://146.185.154.90:8000/messages')
                .then(response => {
                    const mess = response.data;
                    this.setState({mess});
                }).catch(error => {
                console.log(error);
            });
        }, 2000);

    };

    componentDidUpdate() {
        console.log(this.state.mess);
        const lastDateTime = this.state.mess[this.state.mess.length - 1].datetime;

        clearInterval(this.interval);
        this.interval = setInterval(() => {
            axios.get('http://146.185.154.90:8000/messages?datetime=' + lastDateTime)
                .then(response => {
                    const mess = response.data;
                    this.setState({mess: [...this.state.mess].concat(mess)});
                }).catch(error => {
                console.log(error);
            });
        }, 2000);

    };

    onChangeNameHandler = event => {
        this.setState({author: event.target.value})
    };

    onChangeMessageHandler = event => {
        this.setState({message: event.target.value})
    };

    onClickAdd = () => {
        const url = 'http://146.185.154.90:8000/messages';

        const data = new URLSearchParams();
        data.set('message', this.state.message);
        data.set('author', this.state.author);

        axios.post(url, data).then(function (res) {
            console.log(res);
        }).catch(function (error) {
            console.log(error);
        });

    };

    render() {
        console.log("update");
        return (
            <div className={'Messages'}>
                <div className="messContent">
                    <div className={'mainTitle'}>
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
                <AddMassage
                    onChangeName={event => this.onChangeNameHandler(event)}
                    onChangeMessage={event => this.onChangeMessageHandler(event)}
                    onClickedd={this.onClickAdd}
                />
            </div>
        );
    }
}

export default Messages;