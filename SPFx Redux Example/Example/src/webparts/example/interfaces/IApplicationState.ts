import { List } from "lodash";
import { IBook } from "./IBook";

export interface IApplicationState {
    bookItems: IBook[];
}