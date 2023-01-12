import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state,{subscribe} from "./red/state";
import {addPost,updateNewPostText,addMessage,updateNewMessage } from "./red/state";


const root = ReactDOM.createRoot(document.getElementById('root')); 
let rerenderEntireTree = (state) =>{
 
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessage={updateNewMessage}
                 />
        </React.StrictMode>
    );}
    rerenderEntireTree(state);
    subscribe(rerenderEntireTree);


