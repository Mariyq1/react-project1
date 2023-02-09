import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header(props){
    return(
        <div className={classes.Header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uYCpl_KfOiL3rP9hrDgpMUBywTUkiJebEA&usqp=CAU"
        alt="img"/>
        <div className={classes.loginBlock}>
            {props.isAuth ? 
            <div>{props.login}
            <button onClick={props.logout}>Log out</button>
            </div>
            : 
            <NavLink to={'/login'}>Log in</NavLink>}

        </div>
        </div>
        
    )
}