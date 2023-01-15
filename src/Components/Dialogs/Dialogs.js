import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../red/state"

export default function Dialogs(props){
    let dialogsElements = props.state.dialogs
    .map (d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages
    .map (m => <Messages message={m.message} id={m.id}/>)
    
      let addMessage = ()=> {
       props.dispatch(addMessageActionCreator());
    }
    
    let newMessageElement = React.createRef();

    let onMessageChange = () =>{
        let message = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(message));
    }
   
   return <div className={classes.Dialogs}>
    <div className={classes.dialogItems}>
       {dialogsElements}
       </div>
       <div className={classes.Messages}>
        <div>{messagesElements}
       <div>
        <textarea ref={newMessageElement}
        onChange={onMessageChange}></textarea>
    </div>
    <div>
        <button onClick={addMessage}>Add</button>
    </div>
    </div>
    </div>
    </div>
}