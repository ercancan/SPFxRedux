
import { IApplicationState } from '../interfaces/IApplicationState';
import { clone } from "@microsoft/sp-lodash-subset";
import {IAction} from '../interfaces/IAction';
import { ActionTypes } from "../actions/";
const initialState: IApplicationState = {
    bookItems: []
};

const booksReducer = (state: IApplicationState= initialState, action: IAction) => {
var newState: IApplicationState = clone(state);
    switch (action.type) {
   case ActionTypes.AddBook:
   newState.bookItems = [...newState.bookItems, action.data];
   break;
   case ActionTypes.RemoveBook:
   newState.bookItems = newState.bookItems.filter(item => item.title != action.data.title);
   break;
   case ActionTypes.UpdateBook:
   newState.bookItems = newState.bookItems.filter(item => item.title === action.data.title ? action.data : newState );
   break;
   default:
   break;
    }
    return newState;
};
export default booksReducer;