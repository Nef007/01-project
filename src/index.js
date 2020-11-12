import React from 'react';
import './index.css';

import store  from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



 let rerenderEntireTree = (state) => {
     debugger;
 ReactDOM.render(
     <React.StrictMode>
      <BrowserRouter>
       <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
      </BrowserRouter>
     </React.StrictMode>,
     document.getElementById('root')
 );
}
 rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});