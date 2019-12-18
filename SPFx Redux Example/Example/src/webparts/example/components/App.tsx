import  * as React from 'react';
import { Component } from 'react';
import {  connect } from 'react-redux';
import { addMessage } from '../actions/action';
import Form from './Form';
import List from './List';
interface AppState {
    input: string;
    students: {
        list: any[]
    };
}
interface AppProps {
    submitNewMessage: (message) => void;
    messages:  any[];
    books: string;
}
 class App extends Component<AppProps,AppState> {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            students: {list: []}
        };
    }
   public handleChange = (event) => {
        this.setState({
            input: event.target.value
        });
    }
    public submitMessage = () => {
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: ''
        });
    }
   public render() {
       console.log("this props");
       console.log(this.props);
        return (
            <div>
           App
           <Form />
           <List />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {books: state.bookItems};
};

const mapDispatchToProps = (dispatch) => {
// return {
//     submitNewMessage: (message) => {
//         dispatch(addMessage(message));
//     }
 // };
};

export default  connect(mapStateToProps, mapDispatchToProps)(App);
