import React from "react";
import classes from "./Profile.module.css";

export default function Profile(){
    return <div className={classes.Profile}>
        <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
        alt="nature"></img>
        <div className={classes.item}>
            Post1
        </div>
        <div className={classes.item}>
            Post2
        </div>
        <div className={classes.item}>
            Post3
        </div>
    </div>
}