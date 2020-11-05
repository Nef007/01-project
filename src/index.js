import React from 'react';
import './index.css';

import store  from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



 let rerenderEntireTree = (state) => {
     debugger;
 ReactDOM.render(
     <React.StrictMode>
      <BrowserRouter>
       <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
      </BrowserRouter>
     </React.StrictMode>,
     document.getElementById('root')
 );
}
 rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);