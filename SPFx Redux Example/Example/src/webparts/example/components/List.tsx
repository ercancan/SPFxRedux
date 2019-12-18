import * as React  from 'react';
import { Component } from 'react';
import { IApplicationState } from '../interfaces/IApplicationState';
import { IBook } from '../interfaces/IBook';
import {connect} from 'react-redux';

import { RemoveBook, UpdateBook } from '../actions/index';
export interface IBookListProp {
    bookItems: IBook[];
    onDelete: any;
}

export interface IBookListDispatch {
    RemoveBook: (value) => void;
    UpdateBook: (value) => void;
}

class List extends Component<IBookListProp & IBookListDispatch, {}> {
    public handleRemoveBook = (title: string) => {
        console.log("Remove işlemi başlıyor");
        this.props.RemoveBook({title: title});
    }
    public handleUpdateBook = (title: string) => {
        console.log("Update işlemi başlıyor");
        this.props.UpdateBook({title: title});
    }
    
   public  render() {
        return (
            <div className="container">
            <h2><b>Book List </b></h2> <br /> <br />
                {
                    this.props.bookItems.length > 0 ? 
                    this.props.bookItems.map((item,idx) => 
                        <tr key={idx}>
                            <td>Title :{item.title} {" "}  </td> 
                            <td>Author : {item.author} {" "}  </td>
                            <td><button onClick={() => this.handleRemoveBook(item.title)} > Delete</button></td>
                            <td><button onClick={() => this.handleUpdateBook(item.title)} > Update</button></td>
                            {/* <td>Description :{item.description} {" "}</td> */}
                        </tr>
                    )
                    :
                    "Liste Boş"
                }
            </div>
        );
    }
}
const mapStateToProps = (state: IApplicationState) => ({
bookItems: state.bookItems
});

const mapDispatchToProps = (dispatch): IBookListDispatch => ({
    RemoveBook: (value) => {
        dispatch(RemoveBook(value));
    },
    UpdateBook: (value) => {
        dispatch(UpdateBook(value));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(List);