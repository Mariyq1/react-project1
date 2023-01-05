import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs" + props.id; 
    return <div className={classes.dialog + " " + classes.active}>
           <NavLink to={path}>{props.name}</NavLink>  
        </div>
}
const DialogMessage = (props) =>{
    return <div className={classes.message}>
        {props.message}

    </div>
}

export default function Dialogs(){
    return<div className={classes.Dialogs}>
       <div className={classes.dialogItems}>
        <DialogItem name="Mariya" id="1"/>
        <DialogItem name="Valeriya" id="2"/>
        <DialogItem name="Yurii" id="3"/>
        <DialogItem name="Mariya" id="4"/>
       </div>
       <div className={classes.Messages}>
        <DialogMessage message="Hello, how are you"/>
        <DialogMessage message="I am very good and you"/>
        <DialogMessage message="How old are you"/>
        <DialogMessage message="I am am 27 years old"/>
       </div>
    </div>
}