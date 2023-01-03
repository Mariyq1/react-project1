import React from "react";
import classes from "./Navbar.module.css";


export default function Navbar(){
    return (
      <div className={classes.Navbar}>
        <div className={`${classes.item} ${classes.active}`}>Profile</div>
        <div >Messages</div>
        <div>News</div>
        </div>
    )
}