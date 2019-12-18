import * as React from 'react';
import styles from './Example.module.scss';
import { IExampleProps } from './IExampleProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { createStore } from 'redux';
import booksReducer from '../reducers/booksReducer';
import { Provider } from 'react-redux';
import App from './App';
const store = createStore(booksReducer);

export default class Example extends React.Component < IExampleProps, {} > {
  public render(): React.ReactElement<IExampleProps> {
    return(
      <div className = { styles.example } >
      <Provider store= {store}>
      <App />
      </Provider>
      </div >
    );
  }
}
