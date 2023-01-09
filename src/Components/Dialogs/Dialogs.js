import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";



export default function Dialogs(props){
    let dialogsElements = props.state.dialogs
    .map (d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages
    .map (m => <Messages message={m.message} id={m.id}/>)
    function addMessage(){
        let message = newMessageElement.current.value;
        alert(message);
    }
    let newMessageElement = React.createRef();
   return <div className={classes.Dialogs}>
    <div>
        <textarea ref={newMessageElement}></textarea>
    </div>
    <div>
        <button onClick={addMessage}>Add</button>
    </div>
    <Messages/>
    <DialogItem/> 
       <div className={classes.dialogItems}>
       {dialogsElements}
       </div>
       <div className={classes.Messages}>
        {messagesElements}
       </div>
    </div>
}