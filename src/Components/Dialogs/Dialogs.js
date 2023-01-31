import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import { Navigate } from "react-router";

export default function Dialogs(props){
    let state = props.messagesPage;
    let dialogsElements = state.dialogs.map (d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map (m => <Messages message={m.message} key={m.id} id={m.id}/>)
    let newMessageText = React.createRef();;
      let addMessage = ()=> {
       props.sendMessage();
    }
    

    let onMessageChange = () =>{
        let message = newMessageText.current.value;
        props.updateNewMessageText(message);
    }
   if (!props.isAuth) return <Navigate to={"/login"}/>
   return <div className={classes.Dialogs}>
    <div className={classes.dialogItems}>
       {dialogsElements}
       </div>
       <div className={classes.Messages}>
        <div>{messagesElements}
       <div>
        <textarea ref={newMessageText}
        onChange={onMessageChange}></textarea>
    </div>
    <div>
        <button onClick={addMessage}>Add</button>
    </div>
    </div>
    </div>
    </div>
}