import * as React from 'react';
import { Component } from 'react';
import {
    TextField,
    Button,
    ButtonType,
    autobind
} from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import { IApplicationState } from '../interfaces/IApplicationState';
import { AddNewBook } from '../actions/index';

export interface IBookListDispatch {
    AddNewBook: (value) => void;
}
export interface IAddBookProp {

}
export interface IAddBookState {
    title: string;
    author: string;
    description: string;

}

class Form extends Component<IBookListDispatch & IAddBookProp, IAddBookState> {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: ''
        };
    }

    public handleTitleChange = (newValue: string) => {
        this.setState({
            title: newValue
        });
    }
    public handleAuthorChange = (newValue: string) => {
        this.setState({
            author: newValue
        });
    }

    public handleDescriptionChange = (newValue: string) => {
        this.setState({
            description: newValue
        });
    }
    public addBook = (e: any) => {
        e.preventDefault();
        this.props.AddNewBook({ title: this.state.title, author: this.state.author, description: this.state.description });
        this.setState({
            title: '',
            author: '',
            description: ''
        });
    }
    public render() {
        console.log("This Props ");
        console.log(this.props);

        return (
            <div>
                <div>
                    <TextField
                        name="Title"
                        value={this.state.title}
                        onChanged={this.handleTitleChange}
                        placeholder="Title"
                    />
                </div>
                <div>
                    <TextField
                        name="Author"
                        value={this.state.author}
                        onChanged={this.handleAuthorChange}
                        placeholder="Author"
                    />
                </div>
                <div>
                    <TextField
                        name="Description"
                        value={this.state.description}
                        onChanged={this.handleDescriptionChange}
                        placeholder="Description"
                    />
                </div>
                <div>
                    <Button 
                    ariaLabel="Add"
                    onClick={this.addBook}
                    >Add</Button>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state: IApplicationState) => ({

});
const mapDispatchToProps = (dispatch): IBookListDispatch => ({
    AddNewBook: (value) => {
        dispatch(AddNewBook(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);