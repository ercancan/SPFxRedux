import {IAction } from '../interfaces/IAction';
export enum ActionTypes {
    AddBook,
    RemoveBook,
    UpdateBook
}

export function AddNewBook(value: any): IAction {
    return {
        type: ActionTypes.AddBook,
        data: value
    };
}

export function RemoveBook(value: any) {
    console.log("Silme işlemi başladı");
    return {
        type: ActionTypes.RemoveBook,
        data: value
    };
}
export function UpdateBook(value: any) {
    console.log("Update işlemi başlıyor");
    return {
        type: ActionTypes.UpdateBook,
        data: value
    };
}