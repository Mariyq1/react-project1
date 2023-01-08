import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";



export default function Dialogs(props){
    let dialogsElements = props.dialogs
    .map (d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages
    .map (m => <Messages message={m.message} id={m.id}/>)
   
   return <div className={classes.Dialogs}>
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