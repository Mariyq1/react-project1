import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../red/messages-reducer"

export default function DialogsContainer(props){
      let state = props.store.getState().messagesPage;
      let addMessage = ()=> {
       props.store.dispatch(addMessageActionCreator());
    }
    

    let onMessageChange = (message) =>{
        let action = updateNewMessageActionCreator(message);
        props.store.dispatch(action);
    }
   
   return (<Dialogs sendMessage = {addMessage} 
    updateNewMessageText={onMessageChange}
    messagesPage = {state}
    />)
}