import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";




export default function Navbar(){
  const setActive = navData => navData.isActive ? classes.active : classes.item;
    return (
      <div className={classes.Navbar}>
        <div className={classes.item}>
          <NavLink to="/profile" className = {setActive }>Profile</NavLink>
          </div>
        <div className={classes.item}>
          <NavLink to="/dialogs" className = {setActive }>Messages</NavLink>
          </div>
          <div className={classes.item}>
          <NavLink to="/users" className = {setActive }>Users</NavLink>
          </div>
          <div className={classes.item}>
          <NavLink to="/music" className = {setActive }>Music</NavLink>
          </div>
          <div className={classes.item}>
          <NavLink to="/settings" className = {setActive }>Settings</NavLink>
          </div>
        </div>
    )
}